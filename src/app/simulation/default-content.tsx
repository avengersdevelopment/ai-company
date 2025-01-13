"use client";

import { TypeAnimation } from "react-type-animation";
import { ContentProps } from "./container";

export default function DefaultContent({ onStart, onDone }: ContentProps) {
  return (
    <TypeAnimation
      className="text-sm text-[#FFCE8E]"
      style={{ whiteSpace: "pre-line" }}
      speed={90}
      sequence={[
        onStart,
        `We don't understand your command, please type 'help' to view list of commands`,
        onDone,
      ]}
      wrapper="p"
      cursor={false}
    />
  );
}
