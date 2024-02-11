"use client";
import React, { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const [token, setToken] = useState<string>("");
  const captchaRef = useRef<HCaptcha>(null);
  const { ref } = useSectionInView("Contact");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 3900, 4200], [0, 0, 1]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 z-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28"
      style={{ opacity }}
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
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          type="email"
          required
          name="senderEmail"
          maxLength={500}
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg  border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
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
