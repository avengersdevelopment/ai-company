"use client";

import { TypeAnimation } from "react-type-animation";
import { ContentProps } from "./container";
import { useState } from "react";
import { useUserStore } from "@/store/user-store";

export default function QueueContent({
  onStart,
  onDone,
  onNextLine,
}: ContentProps) {
  const { companyName } = useUserStore();
  const [showTotal, setShowTotal] = useState<boolean>(false);
  const [showList, setShowList] = useState<boolean>(false);
  const [showPosition, setShowPosition] = useState<boolean>(false);

  return (
    <>
      <TypeAnimation
        className="text-sm text-[#FFCE8E]"
        style={{ whiteSpace: "pre-line" }}
        speed={90}
        sequence={[
          onStart,
          `Please wait while we process your position.`,
          onNextLine,
          1500,
          () => {
            setShowTotal(true);
          },
        ]}
        wrapper="p"
        cursor={false}
      />

      {showTotal && (
        <TypeAnimation
          className="text-sm text-[#FFCE8E]"
          style={{ whiteSpace: "pre-line" }}
          speed={90}
          sequence={[
            `> Total Companies in Queue: ${companyName ? "18" : "17"}`,
            onNextLine,
            1000,
            () => {
              setShowList(true);
            },
          ]}
          wrapper="p"
          cursor={false}
        />
      )}

      {showList && (
        <TypeAnimation
          className="text-sm text-[#FFCE8E]"
          style={{ whiteSpace: "pre-line" }}
          speed={90}
          sequence={[
            `1. NovaTech Labs`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs
            12. Titan Data Systems`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs
            12. Titan Data Systems
            13. ByteGrid Analytics`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs
            12. Titan Data Systems
            13. ByteGrid Analytics
            14. MetaFusion AI`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs
            12. Titan Data Systems
            13. ByteGrid Analytics
            14. MetaFusion AI
            15. Polaris Strategies`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs
            12. Titan Data Systems
            13. ByteGrid Analytics
            14. MetaFusion AI
            15. Polaris Strategies
            16. Infinity Codex`,
            onNextLine,
            `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs
            12. Titan Data Systems
            13. ByteGrid Analytics
            14. MetaFusion AI
            15. Polaris Strategies
            16. Infinity Codex
            17. SpectraWave Solutions`,
            companyName
              ? `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs
            12. Titan Data Systems
            13. ByteGrid Analytics
            14. MetaFusion AI
            15. Polaris Strategies
            16. Infinity Codex
            17. SpectraWave Solutions
            18. ${companyName}`
              : `1. NovaTech Labs
            2. Quantum Dynamics
            3. Zenith Solutions
            4. Orion AI Systems
            5. Eclipse Innovations
            6. CyberCore Technologies
            7. HyperNet AI
            8. Aether AI Lab
            9. Neural Nexus
            10. AstroSyn AI
            11. EchoSphere Labs
            12. Titan Data Systems
            13. ByteGrid Analytics
            14. MetaFusion AI
            15. Polaris Strategies
            16. Infinity Codex
            17. SpectraWave Solutions`,
            1000,
            onNextLine,
            () => {
              setShowPosition(true);
            },
          ]}
          wrapper="p"
          cursor={false}
        />
      )}

      {showPosition && (
        <TypeAnimation
          className="text-sm text-[#FFCE8E]"
          style={{ whiteSpace: "pre-line" }}
          speed={90}
          sequence={
            companyName
              ? [
                  `> Your Position: 18 of 18`,
                  onNextLine,
                  `> Your Position: 18 of 18
            > Estimated Wait Time: 15 minutes`,
                  onNextLine,
                  1000,
                  onNextLine,
                  onDone,
                ]
              : [
                  `You haven't registered your company yet`,
                  onNextLine,
                  `You haven't registered your company yet
                  Please execute command 'consult' to submit a request`,
                  onNextLine,
                  1000,
                  onNextLine,
                  onDone,
                ]
          }
          wrapper="p"
          cursor={false}
        />
      )}
    </>
  );
}
