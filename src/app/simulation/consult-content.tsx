"use client";

import { TypeAnimation } from "react-type-animation";
import { ContentProps } from "./container";
import { useUserStore } from "@/store/user-store";
import { useEffect, useRef, useState } from "react";

export default function ConsultContent({
  onStart,
  onDone,
  onNextLine,
}: ContentProps) {
  const { setCompanyName } = useUserStore();

  const [command, setCommand] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([""]);

  const [step, setStep] = useState<number>(1);

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim()) {
      if (step === 1) {
        setCompanyName(command);
        setAnswers([command]);
        setStep((prev) => prev + 1);

        setCommand("");
      } else {
        setAnswers((prev) => [...prev, command]);
        setStep((prev) => prev + 1);

        setCommand("");
      }

      onNextLine();
      return;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {step >= 1 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[onStart, `Enter your company name?`]}
            wrapper="p"
            cursor={false}
          />

          {answers[0] && <p className="text-sm text-[#FFCE8E]">{answers[0]}</p>}
        </div>
      )}

      {step >= 2 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[
              `Please describe your company's industry and main business areas!`,
            ]}
            wrapper="p"
            cursor={false}
          />

          {answers[1] && <p className="text-sm text-[#FFCE8E]">{answers[1]}</p>}
        </div>
      )}

      {step >= 3 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`How many employees does your company have?`]}
            wrapper="p"
            cursor={false}
          />

          {answers[2] && <p className="text-sm text-[#FFCE8E]">{answers[2]}</p>}
        </div>
      )}

      {step >= 4 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`What is your annual revenue?`]}
            wrapper="p"
            cursor={false}
          />

          {answers[3] && <p className="text-sm text-[#FFCE8E]">{answers[3]}</p>}
        </div>
      )}

      {step >= 5 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`List your key departments!`]}
            wrapper="p"
            cursor={false}
          />

          {answers[4] && <p className="text-sm text-[#FFCE8E]">{answers[4]}</p>}
        </div>
      )}

      {step >= 6 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`Who are the key stakeholders involved?`]}
            wrapper="p"
            cursor={false}
          />

          {answers[5] && <p className="text-sm text-[#FFCE8E]">{answers[5]}</p>}
        </div>
      )}

      {step >= 7 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`What is your company's mission?`]}
            wrapper="p"
            cursor={false}
          />

          {answers[6] && <p className="text-sm text-[#FFCE8E]">{answers[6]}</p>}
        </div>
      )}

      {step >= 8 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`What is your company's vision?`]}
            wrapper="p"
            cursor={false}
          />

          {answers[7] && <p className="text-sm text-[#FFCE8E]">{answers[7]}</p>}
        </div>
      )}

      {step >= 9 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`List your core values!`]}
            wrapper="p"
            cursor={false}
          />

          {answers[8] && <p className="text-sm text-[#FFCE8E]">{answers[8]}</p>}
        </div>
      )}

      {step >= 10 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[
              `What specific problem or challenge is your company facing?`,
            ]}
            wrapper="p"
            cursor={false}
          />

          {answers[9] && <p className="text-sm text-[#FFCE8E]">{answers[9]}</p>}
        </div>
      )}

      {step >= 11 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`How long has this issue persisted?`]}
            wrapper="p"
            cursor={false}
          />

          {answers[10] && (
            <p className="text-sm text-[#FFCE8E]">{answers[10]}</p>
          )}
        </div>
      )}

      {step >= 12 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[
              `What is the priority or urgency of solving this issue? (High/Medium/Low)`,
            ]}
            wrapper="p"
            cursor={false}
          />

          {answers[11] && (
            <p className="text-sm text-[#FFCE8E]">{answers[11]}</p>
          )}
        </div>
      )}

      {step >= 13 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[`What metrics (KPIs) will define success?`]}
            wrapper="p"
            cursor={false}
          />

          {answers[12] && (
            <p className="text-sm text-[#FFCE8E]">{answers[12]}</p>
          )}
        </div>
      )}

      {step >= 14 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[
              `What is your desired timeline for achieving these goals?`,
            ]}
            wrapper="p"
            cursor={false}
          />

          {answers[13] && (
            <p className="text-sm text-[#FFCE8E]">{answers[13]}</p>
          )}
        </div>
      )}

      {step >= 15 && (
        <div className="flex gap-2">
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[
              `Thank you for your input.`,
              onNextLine,
              `Thank you for your input.
              
              Processing data...`,
              onNextLine,
              1000,
              `Thank you for your input.
              
              Processing data...
              
              Your position: 31 of 31`,
              onNextLine,
              `Thank you for your input.
              
              Processing data...
              
              Your position: 31 of 31
              Estimated wait time: 3 hours 11 minutes`,
              onNextLine,
              1000,
              onNextLine,
              onDone,
            ]}
            wrapper="p"
            cursor={false}
          />
        </div>
      )}

      {step <= 14 && (
        <div className="flex h-4 gap-4">
          <p className="text-sm text-[#FFCE8E]">{">"}</p>
          <input
            className="w-1/2 bg-transparent text-[#FFCE8E] caret-[#FFCE8E] focus:outline-none"
            onBlur={({ target }) => target.focus()}
            autoFocus
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleSubmit}
          />
        </div>
      )}
    </div>
  );
}
