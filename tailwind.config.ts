import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(({ addBase, addUtilities, addComponents }) => {
      addBase({});
      addUtilities({});
      addComponents({
        ".text-heading": {
          "@apply text-[36px] lg:text-[60px] font-bold": {},
        },
        ".text-hero": {
          "@apply text-[16px] leading-[20px] font-normal": {},
        },
        ".text-title": {
          "@apply text-[28px] lg:text-[48px] leading-[60px] font-bold": {},
        },
        ".text-body": {
          "@apply text-[14px] lg:text-[16px] leading-[24px] font-normal": {},
        },
        ".text-product": {
          "@apply text-[16px] lg:text-[18px] leading-[24px] font-medium": {},
        },
        ".wrapper": {
          "@apply max-w-[1220px] w-full mx-auto px-4": {},
        },
        ".py-section": {
          "@apply py-16 md:py-28": {},
        },
        ".pt-section": {
          "@apply pt-16 md:pt-28": {},
        },
      });
    }),
  ],
} satisfies Config;
