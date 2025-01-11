"use client";

import { useConfig } from "@/store/config";
import Image from "next/image";
import Link from "next/link";

export default function Container() {
  const store = useConfig();
  const config = store((state) => state.config);

  return (
    <main className="relative h-screen w-full px-10 py-16">
      <div className="flex h-full w-full flex-col gap-4 justify-center">
        <p className="text-sm text-[#FFCE8E]">V.0.1.0</p>
        <p className="text-6xl font-bold text-[#FFCE8E]">AI COMPANY</p>
        <p className="w-1/2 text-sm text-[#FFCE8E]">
          we&apos;re redefining the future of consulting by running a fully
          AI-driven workforce. Every department, every role, and every task is
          powered by cutting-edge AI models designed to deliver unparalleled
          efficiency, precision, and innovation.
        </p>

        <div className="flex gap-4">
          <Link href="/simulation">
            <Image
              src={"/assets/homepage/btn-simulation.png"}
              width={355}
              height={55}
              alt=""
              className="h-[35px] w-auto hover:animate-shake"
            />
          </Link>

          <Link href={config?.buy_url || ""}>
            <Image
              src={"/assets/homepage/btn-buy.png"}
              width={275}
              height={55}
              alt=""
              className="h-[35px] w-auto hover:animate-shake"
            />
          </Link>

          <Link href={config?.x_coin_url || ""}>
            <Image
              src={"/assets/homepage/btn-x.png"}
              width={71}
              height={55}
              alt=""
              className="h-[35px] w-auto hover:animate-shake"
            />
          </Link>
        </div>

        <p className="text-sm text-[#FFCE8E]">How it works</p>
        <div className="flex gap-4">
          <div className="flex h-[250px] w-[350px] flex-col justify-evenly border border-[#FFCE8E] bg-[#28071F] p-4">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#FFCE8E]">01</p>
              <p className="text-xl text-[#FFCE8E]">Input Your Challenge</p>
            </div>
            <p className="text-xs text-[#FFCE8E]">
              Tell us what you need help with, whether it&apos;s optimizing your
              finances, building a growth strategy, or anything else.
            </p>
          </div>

          <div className="flex h-[250px] w-[350px] flex-col justify-evenly border border-[#FFCE8E] bg-[#28071F] p-4">
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

          <div className="flex h-[250px] w-[350px] flex-col justify-evenly border border-[#FFCE8E] bg-[#28071F] p-4">
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
    </main>
  );
}
