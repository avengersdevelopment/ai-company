import Aos from "@/components/aos";
import Providers from "@/components/providers";
import { createClient } from "@/utils/supabase/server";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const fira = Fira_Code({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "Neurowork",
  description: "Fully AI-driven Consulting Firm",
  openGraph: {
    title: "Neurowork",
    description: "Fully AI-driven Consulting Firm",
    url: "/",
    images: [
      {
        url: "/preview.png",
        alt: "App Preview",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data: configs } = await supabase.from("configs").select();

  return (
    <>
      <Aos />
      <html lang="en" className="relative">
        <body
          className={twMerge(fira.variable, "bg-black font-fira antialiased")}
        >
          <Providers config={configs?.[0] || null}>{children}</Providers>
        </body>
      </html>
    </>
  );
}
