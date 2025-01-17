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
            `> Total Companies in Queue: ${companyName ? "31" : "30"}`,
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
            `1.	YOLO Wizard`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz
            25.	crypto LORDX`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz
            25.	crypto LORDX
            26.	Bulls Eyez!`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz
            25.	crypto LORDX
            26.	Bulls Eyez!
            27.	Cr4sh Monk3y`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz
            25.	crypto LORDX
            26.	Bulls Eyez!
            27.	Cr4sh Monk3y
            28.	Moon St0nker`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz
            25.	crypto LORDX
            26.	Bulls Eyez!
            27.	Cr4sh Monk3y
            28.	Moon St0nker
            29.	BAG_LaunchX`,
            onNextLine,
            `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz
            25.	crypto LORDX
            26.	Bulls Eyez!
            27.	Cr4sh Monk3y
            28.	Moon St0nker
            29.	BAG_LaunchX
            30.	Degen Titan!`,
            onNextLine,
            companyName
              ? `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz
            25.	crypto LORDX
            26.	Bulls Eyez!
            27.	Cr4sh Monk3y
            28.	Moon St0nker
            29.	BAG_LaunchX
            30.	Degen Titan!
            31. ${companyName}`
              : `1.	YOLO Wizard
            2.	BagFlip420
            3.	lambo_rush
            4.	PumpChaserX
            5.	MOON-Rider69
            6.	Gainsy_BOI
            7.	DegenXpress!
            8.	HodL-R0CKET
            9.	BigStack$999
            10.	flipper CHAD
            11.	PumpTh!s
            12.	Dripn$hred88
            13.	ToTheBagZ!
            14.	D!P_snip3R
            15.	R0ckETHawk
            16.	cashFLOW69
            17.	0xProfitZ
            18.	Sn1pER_Rug
            19.	DIADMOND Flip$
            20.	gasKilla77
            21.	stack & send
            22.	MoonGainz42
            23.	WEN_R0CKET
            24.	BoostnBagz
            25.	crypto LORDX
            26.	Bulls Eyez!
            27.	Cr4sh Monk3y
            28.	Moon St0nker
            29.	BAG_LaunchX
            30.	Degen Titan!`,
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
                  `> Your Position: 31 of 31`,
                  onNextLine,
                  `> Your Position: 31 of 31
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
