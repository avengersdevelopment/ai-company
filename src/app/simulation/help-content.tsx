"use client";

import { TypeAnimation } from "react-type-animation";
import { ContentProps } from "./container";

export default function HelpContent({
  onStart,
  onDone,
  onNextLine,
}: ContentProps) {
  return (
    <TypeAnimation
      className="text-sm text-[#FFCE8E]"
      style={{ whiteSpace: "pre-line" }}
      speed={90}
      sequence={[
        onStart,
        `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.`,
        onNextLine,
        `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.`,
        onNextLine,
        `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.`,
        onNextLine,
        `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.
              >  Type 'queue' to check your position.`,
        onNextLine,
        `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.
              >  Type 'queue' to check your position.
              >  Type 'help' for more commands.`,
        onNextLine,
        `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.
              >  Type 'queue' to check your position.
              >  Type 'help' for more commands.
              >  Type 'clear' to clear commands.`,
        onNextLine,
        `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.
              >  Type 'queue' to check your position.
              >  Type 'help' for more commands.
              >  Type 'clear' to clear commands.
              >  Type 'exit' to exit program.`,
        onNextLine,
        onDone,
      ]}
      wrapper="p"
      cursor={false}
    />
  );
}
