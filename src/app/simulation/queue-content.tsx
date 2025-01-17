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
            `> Total Companies in Queue: ${companyName ? "50" : "30"}`,
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
            `1.	*CreepyDrip`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz`,
            onNextLine,
            `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks
            43. MOon3r-88`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks
            43. MOon3r-88
            44. _D3genLORD`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks
            43. MOon3r-88
            44. _D3genLORD
            45. YEETmyToken`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks
            43. MOon3r-88
            44. _D3genLORD
            45. YEETmyToken
            46. FOMO!champ`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks
            43. MOon3r-88
            44. _D3genLORD
            45. YEETmyToken
            46. FOMO!champ
            47. !PumpDaddy`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks
            43. MOon3r-88
            44. _D3genLORD
            45. YEETmyToken
            46. FOMO!champ
            47. !PumpDaddy
            48. G@SFeez_Go`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks
            43. MOon3r-88
            44. _D3genLORD
            45. YEETmyToken
            46. FOMO!champ
            47. !PumpDaddy
            48. G@SFeez_Go
            49. Ch1LLbagz`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
            companyName
              ? `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r
            31. ${companyName}
            32. ChaddBag69
            33. DUMP_p1ease
            34. rugGED*123
            35. MOon*ShoT420
            36. STACK-N-STAK
            37. TRIP_baggz
            38. YOLO!Flip
            39. T0ken_BOI
            40. gimme_profit
            41. DIAMOND!!69
            42. toXIC_St0nks
            43. MOon3r-88
            44. _D3genLORD
            45. YEETmyToken
            46. FOMO!champ
            47. !PumpDaddy
            48. G@SFeez_Go
            49. Ch1LLbagz
            50. lamb0_secur3`
              : `1.	*CreepyDrip
            2.	Yeet-BAGG
            3.	gasFeeSucks!
            4.	flip-4-Fun
            5.	R!sKy_trader
            6.	MOoN-shot88
            7.	cra$hSnIp3r
            8.	DumpDaddY_69
            9.	pr0f!t$ONLY
            10.	Sn!peM3_NOW
            11.	YOLO-King777
            12.	WEN_dump42
            13.	Rekt4EvEr
            14.	BAG_STACKED!
            15.	rocketB@Gz
            16.	Ch@dBagLord
            17.	trADeZOr*
            18.	FL1PDat_boi
            19.	Sn!pe_diz
            20.	TO_the$TOP
            21.	Hodl!gang42"
            22.	_DumpIt42
            23.	P@Perhands
            24.	Sh!LLmeNOW
            25.	wh@L3b@G$
            26.	0xFomoKing
            27.	FlipIt!!123
            28.	WEN_Piggy
            29.	staR*BAGz
            30.	YOLO-Stak3r`,
            onNextLine,
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
                  `> Your Position: 31 of 50`,
                  onNextLine,
                  `> Your Position: 31 of 50
            > Estimated Wait Time: 3 hours 11 minutes`,
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
