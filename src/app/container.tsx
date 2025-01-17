"use client";

import { useConfig } from "@/store/config";
import Image from "next/image";
import Link from "next/link";

export default function Container() {
  const store = useConfig();
  const config = store((state) => state.config);

  return (
    <main className="relative h-full min-h-screen w-full px-4 py-16 md:h-screen md:px-10">
      <div className="flex h-full w-full flex-col md:items-center items-start justify-center gap-4">
        <p className="text-sm text-[#FFCE8E]">V.0.1.0</p>
        <p className="text-6xl font-bold text-[#FFCE8E]">Neuroworks</p>
        <p className="w-full text-center text-sm text-[#FFCE8E] md:w-1/2">
          We&apos;re reshaping the consulting landscape with a fully autonomous
          AI-driven workforce. Every employee is a self-learning AI agent
          seamlessly integrated across finance, marketing, and strategy. No
          downtime. no inefficiencies. just real-time collaboration, faster
          insights, and transformative results that redefine precision.
        </p>

        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-[#FFCE8E]">Our Works:</p>
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4">
            <a href="/assets/pdf/future-of-entertainment.pdf" target="_blank">
              <p className="text-sm text-[#FFCE8E] underline">
                Future Of Entertainment
              </p>
            </a>

            <a
              href="/assets/pdf/on-demand-and-subscription.pdf"
              target="_blank"
            >
              <p className="text-sm text-[#FFCE8E] underline">
                On Demand And Subscription
              </p>
            </a>

            <a href="/assets/pdf/up-to-the-future.pdf" target="_blank">
              <p className="text-sm text-[#FFCE8E] underline">
                Up To The Future
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link href="/simulation">
            <Image
              src={"/assets/homepage/btn-simulation.png"}
              width={355}
              height={55}
              alt=""
              className="h-[35px] w-auto hover:animate-shake"
            />
          </Link>

          <div className="flex flex-row gap-4">
            <Link href={config?.buy_url || ""} target="_blank">
              <Image
                src={"/assets/homepage/btn-buy.png"}
                width={275}
                height={55}
                alt=""
                className="h-[35px] w-auto hover:animate-shake"
              />
            </Link>

            <Link href={config?.x_coin_url || ""} target="_blank">
              <Image
                src={"/assets/homepage/btn-x.png"}
                width={71}
                height={55}
                alt=""
                className="h-[35px] w-auto hover:animate-shake"
              />
            </Link>
          </div>
        </div>

        <p className="text-sm text-[#FFCE8E]">How it works: </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex h-[250px] w-full flex-col justify-evenly border border-[#FFCE8E] bg-[#28071F] p-4 sm:w-[350px]">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#FFCE8E]">01</p>
              <p className="text-xl text-[#FFCE8E]">Input Your Challenge</p>
            </div>
            <p className="text-xs text-[#FFCE8E]">
              Tell us what you need help with, whether it&apos;s optimizing your
              finances, building a growth strategy, or anything else.
            </p>
          </div>

          <div className="flex h-[250px] w-full flex-col justify-evenly border border-[#FFCE8E] bg-[#28071F] p-4 sm:w-[350px]">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#FFCE8E]">02</p>
              <p className="text-xl text-[#FFCE8E]">Live Queue management</p>
            </div>
            <p className="text-xs text-[#FFCE8E]">
              Once submitted, you&apos;ll get a real-time position in our queue.
              For instance, &ldquo;You&apos;re currently #20 on the waiting
              list.&ldquo;
            </p>
          </div>

          <div className="flex h-[250px] w-full flex-col justify-evenly border border-[#FFCE8E] bg-[#28071F] p-4 sm:w-[350px]">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#FFCE8E]">03</p>
              <p className="text-xl text-[#FFCE8E]">AI at Work</p>
            </div>
            <p className="text-xs text-[#FFCE8E]">
              Track progress as our AI team collaborates and analyzes to deliver
              actionable insights.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full">
        <video
          src="/assets/background/base-bg.webm"
          autoPlay
          loop
          muted
          className="h-full w-full object-fill object-center"
        />
      </div>
    </main>
  );
}
