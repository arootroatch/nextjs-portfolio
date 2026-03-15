"use client";
import React, { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const [token, setToken] = useState<string>("");
  const captchaRef = useRef<HCaptcha>(null);
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 z-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:arootroatch@gmail.com">
          arootroatch@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (formData) => {
          if (!token) {
              toast.error(`Please complete the captcha`);
              return;
            }
            formData.append("token", token);
            
            const { error } = (await sendEmail(formData)) || {};
            if (error) {
              captchaRef.current?.resetCaptcha();
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
            captchaRef.current?.resetCaptcha();
        }}
        className="mt-10 flex flex-col"
      >
        <label htmlFor="senderEmail" className="text-left text-sm font-medium text-gray-700 dark:text-white/80 mb-1">
          Email
        </label>
        <input
          id="senderEmail"
          type="email"
          required
          name="senderEmail"
          maxLength={500}
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/40 dark:focus:bg-white/20 transition-all dark:outline-none"
          placeholder="jane@example.com"
        />
        <label htmlFor="message" className="text-left text-sm font-medium text-gray-700 dark:text-white/80 mb-1 mt-3">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          className="h-52 rounded-lg border border-black/10 p-4 dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/40 dark:focus:bg-white/20 transition-all dark:outline-none"
          placeholder="Hi Alex, I'd love to chat about..."
        ></textarea>
        <HCaptcha
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
          onVerify={(token) => setToken(token)}
          ref={captchaRef}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
