"use client";

import { useEffect, useState } from "react";

interface LoadingProps {
  childern: React.ReactNode;
}

export default function Loading({ childern }: LoadingProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (progress <= 99) {
      const loadingInterval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 25);

      return () => {
        clearInterval(loadingInterval);
      };
    }
  }, [progress]);

  if (progress === 100) {
    return childern;
  }

  return (
    <main className="relative h-screen w-full">
      <div className="absolute left-4 top-16 md:left-10">
        <p className="text-sm text-[#FFCE8E]">V.0.1.0</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 flex w-full justify-center">
        <div className="flex h-full w-full flex-col justify-center gap-4 px-4 md:w-1/4 md:px-0">
          <p className="text-xl font-bold text-[#FFCE8E] md:text-5xl">
            AI COMPANY
          </p>
          <p className="text-sm text-[#FFCE8E]">Please wait...</p>
          <div className="w-full border-b border-dashed border-[#FFCE8E]" />
          <div className="flex w-full items-center gap-4">
            <p className="text-sm text-[#FFCE8E]">Progress :</p>
            <div className="relative h-8 flex-1 bg-[#280823]">
              <div
                className="h-full bg-[#FFCE8E]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-[#FFCE8E]">{progress}%</p>
          </div>
          <div className="w-full border-b border-dashed border-[#FFCE8E]" />
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
