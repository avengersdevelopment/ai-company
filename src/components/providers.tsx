"use client";

import { ConfigProvider, TConfig } from "@/store/config";
import { AppProgressBar } from "next-nprogress-bar";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

interface ProvidersProps {
  children: React.ReactNode;
  config: TConfig;
}

export default function Providers({ children, config }: ProvidersProps) {
  return (
    <>
      <ConfigProvider config={config}>
        <AppProgressBar
          height="8px"
          color={"#FFCE8E"}
          options={{ showSpinner: false }}
          shallowRouting
        />
        <AnimatedCursor
          innerSize={16}
          outerSize={16}
          color="251, 245, 240"
          outerAlpha={0.2}
          innerScale={4}
          outerScale={4}
        >
          <div className="h-4 w-4 border border-[#FFCE8E] bg-[#25071c]"></div>
        </AnimatedCursor>
        {children}
      </ConfigProvider>
    </>
  );
}
