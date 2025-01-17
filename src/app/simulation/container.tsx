"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import HelpContent from "./help-content";
import QueueContent from "./queue-content";
import ConsultContent from "./consult-content";
import DefaultContent from "./default-content";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user-store";

export interface ContentProps {
  onStart: () => void;
  onDone: () => void;
  onNextLine: () => void;
}

export default function Container() {
  const router = useRouter();
  const endRef = useRef<HTMLDivElement>(null);
  const { companyName } = useUserStore();

  const [command, setCommand] = useState<string>("");
  const [contents, setContents] = useState<JSX.Element[]>([]);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showStartSimulation, setShowStartSimulation] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showInput, setShowInput] = useState<boolean>(true);
  const [nextLine, setNextLine] = useState<number>(0);

  function handleNextLine() {
    setNextLine((prev) => prev + 1);
  }

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && command.trim()) {
      const Command = (
        <p className="text-sm text-[#FFCE8E]">{`>  ${command}`}</p>
      );

      const lowercaseCommand = command.toLowerCase();

      switch (lowercaseCommand) {
        case "status": {
          setCommand("");
          router.push("/status");
          setIsLoading(true);
          return;
        }
        case "consult": {
          setCommand("");

          if (!companyName) {
            setContents((prev) => [
              ...prev,
              Command,
              <ConsultContent
                key={`consult ${contents.length}`}
                onStart={() => {
                  setShowInput(false);
                  setIsLoading(true);
                }}
                onDone={() => {
                  setShowInput(true);
                  setIsLoading(false);
                }}
                onNextLine={handleNextLine}
              />,
            ]);
          } else {
            setContents((prev) => [
              ...prev,
              Command,
              <TypeAnimation
                key={prev.length}
                className="text-sm text-[#FFCE8E]"
                style={{ whiteSpace: "pre-line" }}
                speed={90}
                sequence={[
                  () => setIsLoading(true),
                  `You already submit your company consultation`,
                  handleNextLine,
                  `You already submit your company consultation

                  Your Position: 31 of 50`,
                  handleNextLine,
                  `You already submit your company consultation

                  Your Position: 31 of 50
                  Estimated Wait Time: 3 hours 11 minutes`,
                  handleNextLine,
                  () => setIsLoading(false),
                ]}
                wrapper="p"
                cursor={false}
              />,
            ]);
          }
          return;
        }
        case "queue": {
          setCommand("");
          setContents((prev) => [
            ...prev,
            Command,
            <QueueContent
              key={`queue ${contents.length}`}
              onStart={() => setIsLoading(true)}
              onDone={() => setIsLoading(false)}
              onNextLine={handleNextLine}
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
              key={`help ${contents.length}`}
              onStart={() => setIsLoading(true)}
              onDone={() => setIsLoading(false)}
              onNextLine={handleNextLine}
            />,
          ]);
          return;
        }
        case "clear": {
          setCommand("");
          setContents([]);
          return;
        }
        case "exit": {
          setCommand("");
          router.replace("/");
          setIsLoading(true);
          return;
        }
        default: {
          setCommand("");
          setContents((prev) => [
            ...prev,
            Command,
            <DefaultContent
              key={`default ${contents.length}`}
              onStart={() => setIsLoading(true)}
              onDone={() => setIsLoading(false)}
              onNextLine={handleNextLine}
            />,
          ]);
          return;
        }
      }
    }
  };

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView();
    }
  }, [nextLine, endRef]);

  return (
    <main className="relative h-screen w-full px-4 py-16 md:px-10">
      <div className="flex h-full w-full flex-col gap-4 overflow-y-auto">
        <p className="text-sm text-[#FFCE8E]">V.0.1.0</p>
        <p className="text-xl font-bold text-[#FFCE8E] md:text-3xl">
          Welcome to Neuroworks&apos;s Commands Center
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
            `Booting Neurowork Systems...`,
            handleNextLine,
            `Booting Neurowork Systems...

            Initializing protocols...`,
            handleNextLine,
            `Booting Neurowork Systems...

            Initializing protocols...
            Establishing secure connection...`,
            handleNextLine,
            `Booting Neurowork Systems...

            Initializing protocols...
            Establishing secure connection...
            Loading consulting framework...`,
            handleNextLine,
            `Booting Neurowork Systems...

            Initializing protocols...
            Establishing secure connection...
            Loading consulting framework...
            
            Connecting to Neuroworks's Mainframe...`,
            handleNextLine,
            `Booting Neurowork Systems...

            Initializing protocols...
            Establishing secure connection...
            Loading consulting framework...
            
            Connecting to Neuroworks's Mainframe...
            
            Welcome, User.`,
            handleNextLine,
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
              `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.`,
              handleNextLine,
              `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.`,
              handleNextLine,
              `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.`,
              handleNextLine,
              `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.
              >  Type 'queue' to check your position.`,
              handleNextLine,
              `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.
              >  Type 'queue' to check your position.
              >  Type 'help' for more commands.`,
              handleNextLine,
              `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.
              >  Type 'queue' to check your position.
              >  Type 'help' for more commands.
              >  Type 'clear' to clear commands.`,
              handleNextLine,
              `Neuroworks: Where Artificial Intelligence Meets Seamless Efficiency.
              >  Type 'status' to view active AI tasks.
              >  Type 'consult' to submit a request.
              >  Type 'queue' to check your position.
              >  Type 'help' for more commands.
              >  Type 'clear' to clear commands.
              >  Type 'exit' to exit program.`,
              handleNextLine,
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
              `Remember, unexpected outcomes are expected`,
              handleNextLine,
              `Remember, unexpected outcomes are expected
              
              The simulation is about to begin`,
              handleNextLine,
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

        {showInput ? (
          <div className="flex h-4 gap-4">
            <p className="text-sm text-[#FFCE8E]">{">"}</p>
            {!isLoading ? (
              <input
                className="w-1/2 bg-transparent text-[#FFCE8E] caret-[#FFCE8E] focus:outline-none"
                onBlur={({ target }) => target.focus()}
                autoFocus
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleSubmit}
              />
            ) : (
              <Image
                src={"/assets/simulation/type-loading.png"}
                width={200}
                height={200}
                alt="Loading"
                className="h-[20px] w-auto animate-spin-fast"
              />
            )}
          </div>
        ) : (
          <></>
        )}

        <div ref={endRef} className="mt-4" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full">
        <video
          src="/assets/background/simulation-bg.webm"
          autoPlay
          loop
          muted
          className="h-full w-full object-fill object-center"
        />
      </div>
    </main>
  );
}
