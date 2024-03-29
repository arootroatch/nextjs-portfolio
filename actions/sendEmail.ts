"use server";
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown) => {
  let message = " ";
  if (error instanceof Error) {
    message = String(error.message);
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  const token = String(formData.get("token"));

  const params = new URLSearchParams();
  params.append('response',token);
  params.append('secret', String(process.env.HCAPTCHA_SECRET));

  const response = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    body: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const json = await response.json();
  const { success } = json;
  if (!success) {
    return {
      error: "Invalid captcha token",
    };
  } else {
    const message = formData.get("message");
    const senderEmail = formData.get("senderEmail");

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
      return {
        error: "Invalid sender email",
      };
    }
    if (!validateString(message, 5000)) {
      return {
        error: "Invalid message",
      };
    }

    let data;

    try {
      data = await resend.emails.send({
        from: "ContactForm <onboarding@resend.dev>",
        to: "arootroatch@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
          message: message as string,
          senderEmail: senderEmail as string,
        }),
      });
    } catch (error: unknown) {
      return {
        error: getErrorMessage(error),
      };
    }
    return {
      data,
    };
  }
};
