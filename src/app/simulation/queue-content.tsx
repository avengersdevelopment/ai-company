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
            `1.	ArcTech Solutions`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid
              12.	ZenithCore
              13.	ByteCraft`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid
              12.	ZenithCore
              13.	ByteCraft
              14.	NovaFusion`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid
              12.	ZenithCore
              13.	ByteCraft
              14.	NovaFusion
              15.	Polaris Nexus`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid
              12.	ZenithCore
              13.	ByteCraft
              14.	NovaFusion
              15.	Polaris Nexus
              16.	infinicode`,
            onNextLine,
            `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid
              12.	ZenithCore
              13.	ByteCraft
              14.	NovaFusion
              15.	Polaris Nexus
              16.	infinicode
              17.	Lumora`,
            companyName
              ? `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid
              12.	ZenithCore
              13.	ByteCraft
              14.	NovaFusion
              15.	Polaris Nexus
              16.	infinicode
              17.	Lumora
            18. ${companyName}`
              : `1.	ArcTech Solutions
              2.	Quantum Forge
              3.	Stratos
              4.	Orionix
              5.	flux innovations
              6.	CoreByte Systems
              7.	Nexum AI
              8.	aeris lab
              9.	NeuralSphere
              10.	Celestix
              11.	TerraGrid
              12.	ZenithCore
              13.	ByteCraft
              14.	NovaFusion
              15.	Polaris Nexus
              16.	infinicode
              17.	Lumora`,
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
