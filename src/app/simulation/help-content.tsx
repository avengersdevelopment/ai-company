"use client";

import { TypeAnimation } from "react-type-animation";
import { ContentProps } from "./container";

export default function HelpContent({ onStart, onDone }: ContentProps) {
  return (
    <TypeAnimation
      className="text-sm text-[#FFCE8E]"
      style={{ whiteSpace: "pre-line" }}
      speed={90}
      sequence={[
        onStart,
        `AI Company: Where Artificial Intelligence Meets Seamless Efficiency.
            >  Type 'status' to view active AI tasks.
            >  Type 'consult' to submit a request.
            >  Type 'queue' to check your position.
            >  Type 'help' for more commands.`,
        onDone,
      ]}
      wrapper="p"
      cursor={false}
    />
  );
}
