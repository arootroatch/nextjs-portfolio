"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
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
          const { error } = (await sendEmail(formData)) || {};
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
