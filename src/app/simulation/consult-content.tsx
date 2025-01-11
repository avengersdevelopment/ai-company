"use client";

import { TypeAnimation } from "react-type-animation";
import { ContentProps } from "./container";
import { useUserStore } from "@/store/user-store";
import { useState } from "react";

interface ConsultContentProps {}

export default function ConsultContent({}: ConsultContentProps) {
  const { setCompanyName } = useUserStore();

  const [secondQuestion, setSecondQuestion] = useState<boolean>(false);
  const [thirdQuestion, setThirdQuestion] = useState<boolean>(false);
  const [fourthQuestion, setForthQuestion] = useState<boolean>(false);
  const [fifthQuestion, setFifthQuestion] = useState<boolean>(false);
  const [sixthQuestion, setSixthQuestion] = useState<boolean>(false);
  const [seventhQuestion, setSeventhQuestion] = useState<boolean>(false);
  const [eighthQuestion, setEighthQuestion] = useState<boolean>(false);
  const [ninthQuesetion, setNinthQuestion] = useState<boolean>(false);
  const [tenthQuestion, setTenthQuestion] = useState<boolean>(false);
  const [eleventhQuestion, setEleventhQuestion] = useState<boolean>(false);
  const [twelfthQuestion, setTwelfthQuestion] = useState<boolean>(false);
  const [thirteenthQuestion, setThirteenQuestion] = useState<boolean>(false);
  const [fourteenthQuestion, setFourteenthQuestion] = useState<boolean>(false);

  return (
    <>
      <div className="flex w-full gap-4">
        <TypeAnimation
          className="text-sm text-[#FFCE8E]"
          style={{ whiteSpace: "pre-line" }}
          speed={90}
          sequence={[`Enter your company name?`, () => setSecondQuestion(true)]}
          wrapper="p"
          cursor={false}
        />
      </div>
    </>
  );
}
