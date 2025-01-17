"use client";

import { useUserStore } from "@/store/user-store";
import { calculateEstimatedTime } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface StatusItem {
  agent_type: string;
  description: string;
  client: string;
  totalMinute: number;
  endedAt?: string;
  status: string;
  agent_name: string;
}

const statusItems: StatusItem[] = [
  // Insight AI
  {
    agent_type: "Insight AI",
    description: "Provides strategic insights using advanced data analytics.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Max",
  },
  {
    agent_type: "Insight AI",
    description: "Delivers actionable insights for business growth.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Max",
  },
  {
    agent_type: "Insight AI",
    description: "Transforms data into strategic business insights.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Max",
  },
  {
    agent_type: "Insight AI",
    description: "Utilizes AI to uncover hidden business opportunities.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Nina",
  },
  {
    agent_type: "Insight AI",
    description: "Enhances decision-making with predictive analytics.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Nina",
  },
  {
    agent_type: "Insight AI",
    description: "Empowers businesses with data-driven insights.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Nina",
  },
  {
    agent_type: "Insight AI",
    description: "Leverages AI to provide comprehensive market analysis.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Leo",
  },
  {
    agent_type: "Insight AI",
    description: "Offers deep insights into market trends and dynamics.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Leo",
  },
  {
    agent_type: "Insight AI",
    description: "Facilitates strategic planning with AI-driven insights.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Leo",
  },
  // Creative AI
  {
    agent_type: "Creative AI",
    description: "Generates innovative content for marketing campaigns.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Lily",
  },
  {
    agent_type: "Creative AI",
    description: "Enhances creative processes with AI-generated ideas.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Lily",
  },
  {
    agent_type: "Creative AI",
    description: "Transforms creative concepts into compelling content.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Lily",
  },
  {
    agent_type: "Creative AI",
    description: "Utilizes AI to craft unique and engaging narratives.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Aria",
  },
  {
    agent_type: "Creative AI",
    description: "Supports creative teams with AI-driven content creation.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Aria",
  },
  {
    agent_type: "Creative AI",
    description: "Inspires creativity through AI-enhanced storytelling.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Aria",
  },
  {
    agent_type: "Creative AI",
    description: "Empowers brands with AI-generated visual content.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Oliver",
  },
  {
    agent_type: "Creative AI",
    description: "Revolutionizes content creation with AI technology.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Oliver",
  },
  {
    agent_type: "Creative AI",
    description: "Drives innovation in creative projects using AI.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Oliver",
  },
  // Financial AI
  {
    agent_type: "Financial AI",
    description: "Provides financial forecasting and risk assessment.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Aiden",
  },
  {
    agent_type: "Financial AI",
    description: "Enhances financial strategies with predictive analytics.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Aiden",
  },
  {
    agent_type: "Financial AI",
    description: "Optimizes investment portfolios using AI insights.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Aiden",
  },
  {
    agent_type: "Financial AI",
    description: "Supports financial planning with AI-driven analysis.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Ella",
  },
  {
    agent_type: "Financial AI",
    description: "Facilitates data-driven financial decision-making.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Ella",
  },
  {
    agent_type: "Financial AI",
    description: "Leverages AI for comprehensive financial analysis.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Ella",
  },
  {
    agent_type: "Financial AI",
    description: "Provides real-time financial insights and analytics.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Max",
  },
  {
    agent_type: "Financial AI",
    description: "Transforms financial data into actionable insights.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Max",
  },
  {
    agent_type: "Financial AI",
    description: "Empowers financial teams with AI-driven solutions.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Max",
  },
  // Operational AI
  {
    agent_type: "Operational AI",
    description: "Optimizes business operations through AI automation.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Daniel",
  },
  {
    agent_type: "Operational AI",
    description: "Streamlines processes with AI-driven efficiency.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Daniel",
  },
  {
    agent_type: "Operational AI",
    description: "Enhances operational workflows using AI technology.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Daniel",
  },
  {
    agent_type: "Operational AI",
    description: "Facilitates seamless operations with AI solutions.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Sophia",
  },
  {
    agent_type: "Operational AI",
    description: "Improves productivity through AI-driven automation.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Sophia",
  },
  {
    agent_type: "Operational AI",
    description: "Leverages AI to enhance operational performance.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Sophia",
  },
  {
    agent_type: "Operational AI",
    description: "Transforms operations with AI-powered solutions.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "James",
  },
  {
    agent_type: "Operational AI",
    description: "Drives operational excellence through AI innovation.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "James",
  },
  {
    agent_type: "Operational AI",
    description: "Empowers businesses with AI-enhanced operations.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "James",
  },
  // Customer Experience AI
  {
    agent_type: "Customer Experience AI",
    description: "Enhances customer interactions with AI insights.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Customer Experience AI",
    description: "Improves customer satisfaction through AI analysis.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Customer Experience AI",
    description: "Transforms customer service with AI-driven solutions.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Customer Experience AI",
    description: "Utilizes AI to personalize customer experiences.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Zara",
  },
  {
    agent_type: "Customer Experience AI",
    description: "Enhances customer loyalty with AI-powered insights.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Zara",
  },
  {
    agent_type: "Customer Experience AI",
    description: "Empowers customer service teams with AI tools.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Zara",
  },
  {
    agent_type: "Customer Experience AI",
    description: "Drives customer engagement through AI technology.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Amelia",
  },
  {
    agent_type: "Customer Experience AI",
    description: "Facilitates seamless customer interactions with AI.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Amelia",
  },
  {
    agent_type: "Customer Experience AI",
    description: "Transforms customer feedback into actionable insights.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Amelia",
  },
  // Growth AI
  {
    agent_type: "Growth AI",
    description: "Supports business growth with AI-driven strategies.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Lena",
  },
  {
    agent_type: "Growth AI",
    description: "Facilitates market expansion through AI insights.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Lena",
  },
  {
    agent_type: "Growth AI",
    description: "Enhances growth potential with AI forecasting.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Lena",
  },
  {
    agent_type: "Growth AI",
    description: "Utilizes AI to identify new growth opportunities.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Jack",
  },
  {
    agent_type: "Growth AI",
    description: "Empowers businesses with AI-driven growth solutions.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Jack",
  },
  {
    agent_type: "Growth AI",
    description: "Transforms growth strategies with AI technology.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Jack",
  },
  {
    agent_type: "Growth AI",
    description: "Drives business expansion through AI innovation.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Sophia",
  },
  {
    agent_type: "Growth AI",
    description: "Facilitates strategic growth with AI insights.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Sophia",
  },
  {
    agent_type: "Growth AI",
    description: "Enhances market positioning through AI analysis.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Sophia",
  },
  // HR AI
  {
    agent_type: "HR AI",
    description: "Optimizes talent management with AI solutions.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Emily",
  },
  {
    agent_type: "HR AI",
    description: "Enhances recruitment processes through AI technology.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Emily",
  },
  {
    agent_type: "HR AI",
    description: "Facilitates employee engagement with AI insights.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Emily",
  },
  {
    agent_type: "HR AI",
    description: "Supports HR teams with AI-driven analytics.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Ethan",
  },
  {
    agent_type: "HR AI",
    description: "Transforms HR operations with AI-powered tools.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Ethan",
  },
  {
    agent_type: "HR AI",
    description: "Empowers HR professionals with AI-enhanced solutions.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Ethan",
  },
  {
    agent_type: "HR AI",
    description: "Drives talent acquisition through AI innovation.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Olivia",
  },
  {
    agent_type: "HR AI",
    description: "Facilitates workforce optimization with AI insights.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Olivia",
  },
  {
    agent_type: "HR AI",
    description: "Enhances employee retention through AI analysis.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Olivia",
  },
  // Compliance AI
  {
    agent_type: "Compliance AI",
    description: "Ensures regulatory compliance with AI solutions.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "John",
  },
  {
    agent_type: "Compliance AI",
    description: "Facilitates compliance monitoring through AI technology.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "John",
  },
  {
    agent_type: "Compliance AI",
    description: "Enhances compliance processes with AI-driven insights.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "John",
  },
  {
    agent_type: "Compliance AI",
    description: "Supports compliance teams with AI-powered tools.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Sarah",
  },
  {
    agent_type: "Compliance AI",
    description: "Transforms compliance management with AI solutions.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Sarah",
  },
  {
    agent_type: "Compliance AI",
    description: "Empowers businesses with AI-enhanced compliance strategies.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Sarah",
  },
  {
    agent_type: "Compliance AI",
    description: "Drives regulatory adherence through AI innovation.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Mason",
  },
  {
    agent_type: "Compliance AI",
    description: "Facilitates risk management with AI insights.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Mason",
  },
  {
    agent_type: "Compliance AI",
    description: "Enhances policy enforcement through AI analysis.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Mason",
  },
  // Competitor AI
  {
    agent_type: "Competitor AI",
    description: "Analyzes market trends with AI-driven insights.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Liam",
  },
  {
    agent_type: "Competitor AI",
    description: "Enhances competitive analysis through AI technology.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Liam",
  },
  {
    agent_type: "Competitor AI",
    description: "Facilitates strategic positioning with AI insights.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Liam",
  },
  {
    agent_type: "Competitor AI",
    description: "Supports market analysis with AI-driven tools.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Emma",
  },
  {
    agent_type: "Competitor AI",
    description: "Transforms competitive strategies with AI solutions.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Emma",
  },
  {
    agent_type: "Competitor AI",
    description: "Empowers businesses with AI-enhanced market analysis.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Emma",
  },
  {
    agent_type: "Competitor AI",
    description: "Drives competitive advantage through AI innovation.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Oliver",
  },
  {
    agent_type: "Competitor AI",
    description: "Facilitates market intelligence with AI insights.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Oliver",
  },
  {
    agent_type: "Competitor AI",
    description: "Enhances strategic planning through AI analysis.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Oliver",
  },
  // Innovation AI
  {
    agent_type: "Innovation AI",
    description: "Identifies innovative strategies with AI insights.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Innovation AI",
    description: "Enhances innovation processes through AI technology.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Innovation AI",
    description: "Facilitates creative problem-solving with AI insights.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Innovation AI",
    description: "Supports innovation teams with AI-driven tools.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Dylan",
  },
  {
    agent_type: "Innovation AI",
    description: "Transforms innovation strategies with AI solutions.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Dylan",
  },
  {
    agent_type: "Innovation AI",
    description: "Empowers businesses with AI-enhanced innovation.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Dylan",
  },
  {
    agent_type: "Innovation AI",
    description: "Drives creative thinking through AI innovation.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Nina",
  },
  {
    agent_type: "Innovation AI",
    description: "Facilitates breakthrough ideas with AI insights.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Nina",
  },
  {
    agent_type: "Innovation AI",
    description: "Enhances product development through AI analysis.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Nina",
  },
  // Sustainability AI
  {
    agent_type: "Sustainability AI",
    description: "Promotes sustainable practices with AI solutions.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Issac",
  },
  {
    agent_type: "Sustainability AI",
    description: "Facilitates eco-friendly strategies through AI insights.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Issac",
  },
  {
    agent_type: "Sustainability AI",
    description: "Enhances environmental impact with AI-driven analysis.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Issac",
  },
  {
    agent_type: "Sustainability AI",
    description: "Supports sustainability initiatives with AI tools.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Sustainability AI",
    description: "Transforms sustainability strategies with AI solutions.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Sustainability AI",
    description: "Empowers businesses with AI-enhanced sustainability.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Grace",
  },
  {
    agent_type: "Sustainability AI",
    description: "Drives green innovation through AI technology.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Ethan",
  },
  {
    agent_type: "Sustainability AI",
    description: "Facilitates resource efficiency with AI insights.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Ethan",
  },
  {
    agent_type: "Sustainability AI",
    description: "Enhances corporate responsibility through AI analysis.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Ethan",
  },
  // Crisis AI
  {
    agent_type: "Crisis AI",
    description: "Manages crisis situations with AI-driven solutions.",
    client: "YOLO Wizard",
    totalMinute: 6,
    status: "Active",
    agent_name: "Luke",
  },
  {
    agent_type: "Crisis AI",
    description: "Facilitates crisis response through AI technology.",
    client: "BagFlip420",
    totalMinute: 12,
    status: "Active",
    agent_name: "Luke",
  },
  {
    agent_type: "Crisis AI",
    description: "Enhances crisis management with AI insights.",
    client: "lambo_rush",
    totalMinute: 18,
    status: "Active",
    agent_name: "Luke",
  },
  {
    agent_type: "Crisis AI",
    description: "Supports crisis teams with AI-driven tools.",
    client: "YOLO Wizard",
    totalMinute: 24,
    status: "Active",
    agent_name: "Olivia",
  },
  {
    agent_type: "Crisis AI",
    description: "Transforms crisis strategies with AI solutions.",
    client: "BagFlip420",
    totalMinute: 30,
    status: "Active",
    agent_name: "Olivia",
  },
  {
    agent_type: "Crisis AI",
    description: "Empowers businesses with AI-enhanced crisis management.",
    client: "lambo_rush",
    totalMinute: 36,
    status: "Active",
    agent_name: "Olivia",
  },
  {
    agent_type: "Crisis AI",
    description: "Drives effective crisis resolution through AI innovation.",
    client: "YOLO Wizard",
    totalMinute: 42,
    status: "Active",
    agent_name: "Michael",
  },
  {
    agent_type: "Crisis AI",
    description: "Facilitates rapid crisis response with AI insights.",
    client: "BagFlip420",
    totalMinute: 48,
    status: "Active",
    agent_name: "Michael",
  },
  {
    agent_type: "Crisis AI",
    description: "Enhances crisis preparedness through AI analysis.",
    client: "lambo_rush",
    totalMinute: 54,
    status: "Active",
    agent_name: "Michael",
  },
];

export default function Container() {
  const { dateAccess } = useUserStore();

  const [items, setItems] = useState<StatusItem[]>([]);

  useEffect(() => {
    if (dateAccess) {
      const _items = statusItems
        .map((e) => {
          const endedAt = new Date(
            new Date(dateAccess).getTime() + e.totalMinute * 60000,
          ).toISOString();

          return {
            ...e,
            endedAt: endedAt,
          };
        })
        .filter((e) => new Date(e.endedAt) >= new Date());

      setItems(_items);
    }
  }, [dateAccess]);

  return (
    <main className="relative h-screen w-full px-4 py-16 md:px-10">
      <Image
        src={"/assets/background/radius-left.webp"}
        width={1000}
        height={1000}
        alt=""
        className="absolute bottom-0 left-0 h-auto w-full"
      />

      <Image
        src={"/assets/background/radius-right.webp"}
        width={1000}
        height={1000}
        alt=""
        className="absolute bottom-0 right-0 h-full w-auto"
      />

      <div className="absolute left-4 top-16 z-50 md:left-10">
        <Link href="/simulation">
          <p className="text-sm text-[#FFCE8E] md:text-lg">Back To Terminal</p>
        </Link>
      </div>

      <div className="absolute bottom-16 left-0 right-0 top-0 z-40 px-4 pt-28 md:px-10">
        <div className="flex h-full w-full flex-col">
          <p className="mb-4 mt-10 text-xl font-bold text-[#FFCE8E] md:text-3xl">
            Consultation Task Status
          </p>
          <p className="mb-10 w-full text-sm text-[#FFCE8E] md:w-1/2">
            Below is an overview of active and pending tasks managed by the AI
            for your consulting needs. Each task includes a role name, task
            details, estimated completion time, and current status.
          </p>

          <div className="flex-1 overflow-y-auto border-t border-[#FFCE8E]">
            <table className="z-10 w-full border-collapse">
              <thead className="sticky top-0 border-collapse bg-[#251B13]">
                <tr className="border border-t-0 border-[#FFCE8E] text-sm font-bold text-[#FDB479]">
                  <th className="backdrop- border-r border-[#FFCE8E] p-4">
                    Name
                  </th>
                  <th className="border-r border-[#FFCE8E] p-4">
                    Task Description
                  </th>
                  <th className="border-r border-[#FFCE8E] p-4">Client</th>
                  <th className="border-r border-[#FFCE8E] p-4">
                    Estimated Time
                  </th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {items?.map((e, index) => (
                  <tr
                    key={index}
                    className="border border-[#FFCE8E] text-sm text-[#FDB479]"
                  >
                    <td className="border-r border-[#FFCE8E] p-4">{`${e.agent_name} - ${e.agent_type}`}</td>
                    <td className="border-r border-[#FFCE8E] p-4">
                      {e.description}
                    </td>
                    <td className="border-r border-[#FFCE8E] p-4">
                      {e.client}
                    </td>
                    <td className="border-r border-[#FFCE8E] p-4">
                      ~{e.endedAt ? calculateEstimatedTime(e.endedAt) : ""}
                    </td>
                    <td className="p-4">
                      {new Date(e.endedAt ?? "").getTime() -
                        new Date().getTime() <
                      6 * 60000
                        ? "Active"
                        : "In Queue"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
