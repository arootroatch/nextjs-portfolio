import { links } from "./data";

declare global{
  namespace NodeJS {
    export interface ProcessEnv {
      RESEND_API_KEY: string;
      NEXT_PUBLIC_HCAPTCHA_SITE_KEY: string;
      HCAPTCHA_SECRET: string;
    }
  }
}

export type SectionName = (typeof links)[number]["name"];
