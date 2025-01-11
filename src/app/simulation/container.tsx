"use client";

import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import HelpContent from "./help-content";
import QueueContent from "./queue-content";
import ConsultContent from "./consult-content";

export interface ContentProps {
  onStart: () => void;
  onDone: () => void;
}

export default function Container() {
  const [command, setCommand] = useState<string>("");
  const [contents, setContents] = useState<JSX.Element[]>([]);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showStartSimulation, setShowStartSimulation] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim()) {
      const Command = (
        <p className="text-sm text-[#FFCE8E]">{`>  ${command}`}</p>
      );

      switch (command) {
        case "status": {
          return;
        }
        case "consult": {
          setCommand("");
          setContents((prev) => [...prev, Command, <ConsultContent />]);
          return;
        }
        case "queue": {
          setCommand("");
          setContents((prev) => [
            ...prev,
            Command,
            <QueueContent
              onStart={() => setIsLoading(true)}
              onDone={() => setIsLoading(false)}
            />,
          ]);
          return;
        }
        case "help": {
          setCommand("");
          setContents((prev) => [
            ...prev,
            Command,
            <HelpContent
              onStart={() => setIsLoading(true)}
              onDone={() => setIsLoading(false)}
            />,
          ]);
          return;
        }
        default: {
          return;
        }
      }
    }
  };

  return (
    <main className="relative h-full w-full px-10">
      <div className="my-16 flex h-full w-full flex-col gap-4">
        <p className="text-sm text-[#FFCE8E]">V.0.1.0</p>
        <p className="text-3xl font-bold text-[#FFCE8E]">
          Welcome to AI Command Center
        </p>
        <TypeAnimation
          className="text-sm text-[#FFCE8E]"
          style={{ whiteSpace: "pre-line" }}
          speed={90}
          sequence={[
            () => {
              setIsLoading(true);
            },
            1000,
            `The screen flickers as you enter the terminal.
            Lines of code cascade across the screen, and a smooth robotic voice greets you.
            
            Connecting to AI Company's Mainframe...
            
            Welcome, User.
            
            Initializing your consultation space...`,
            1000,
            () => {
              setShowInstructions(true);
            },
          ]}
          wrapper="p"
          cursor={false}
        />

        {showInstructions && (
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[
              `AI Company: Where Artificial Intelligence Meets Seamless Efficiency.
                >  Type 'status' to view active AI tasks.
                >  Type 'consult' to submit a request.
                >  Type 'queue' to check your position.
                >  Type 'help' for more commands.`,
              1000,
              () => {
                setShowStartSimulation(true);
              },
            ]}
            wrapper="p"
            cursor={false}
          />
        )}

        {showStartSimulation && (
          <TypeAnimation
            className="text-sm text-[#FFCE8E]"
            style={{ whiteSpace: "pre-line" }}
            speed={90}
            sequence={[
              `Remember, unexpected outcomes are expected\nThe simulation is about to begin`,
              500,
              () => {
                setIsLoading(false);
              },
            ]}
            wrapper="p"
            cursor={false}
          />
        )}

        {contents.map((e) => e)}

        <div className="flex h-4 gap-4">
          <p className="text-sm text-[#FFCE8E]">{">"}</p>
          {isLoading ? (
            <Image
              src={"/assets/simulation/type-loading.png"}
              width={200}
              height={200}
              alt="Loading"
              className="animate-spin-fast h-[20px] w-auto"
            />
          ) : (
            <input
              className="w-1/2 bg-transparent text-[#FFCE8E] caret-[#FFCE8E] focus:outline-none"
              onBlur={({ target }) => target.focus()}
              autoFocus
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleSubmit}
            />
          )}
        </div>
      </div>
    </main>
  );
}
