"use client";

import Image from "next/image";
import Link from "next/link";

interface StatusItem {
  id: number;
  type: string;
  description: string;
  company: string;
  estimated: string;
  status: string;
}

const statusItems: StatusItem[] = [
  {
    id: 1,
    type: "Insight AI",
    description:
      "Provides data-driven insights and visualizations for market trends, customer behavior, and performance metrics.",
    company: "ArcTech Solutions",
    estimated: "~2 Hours",
    status: "Active",
  },
  {
    id: 2,
    type: "Creative AI",
    description:
      "Generates branding ideas, ad copy, and creative campaigns to enhance client marketing and engagement strategies.",
    company: "ArcTech Solutions",
    estimated: "~3 Hours",
    status: "In Queue",
  },
  {
    id: 3,
    type: "Financial AI",
    description:
      "Performs financial analysis, forecasts, and budgeting strategies to optimize costs and maximize ROI.",
    company: "ArcTech Solutions",
    estimated: "~5 Hours",
    status: "In Queue",
  },
  {
    id: 4,
    type: "Operational AI",
    description:
      "Streamlines internal processes, evaluates supply chains, and suggests operational improvements to enhance efficiency.",
    company: "ArcTech Solutions",
    estimated: "~3 Hours",
    status: "In Queue",
  },
  {
    id: 5,
    type: "Customer Experience AI",
    description:
      "Analyzes customer feedback and interactions to suggest improvements in user experience and customer journey design.",
    company: "Quantum Forge",
    estimated: "~5 Hours",
    status: "Active",
  },
  {
    id: 6,
    type: "Growth AI",
    description:
      "Designs scaling strategies, partnership opportunities, and business expansion plans for startups and enterprises.",
    company: "Quantum Forge",
    estimated: "~3 Hours",
    status: "In Queue",
  },
  {
    id: 7,
    type: "HR AI",
    description:
      "Supports recruitment, talent management, and workforce optimization using data-driven methodologies.",
    company: "Quantum Forge",
    estimated: "~5 Hours",
    status: "In Queue",
  },
  {
    id: 8,
    type: "Compliance AI",
    description:
      "Ensures that business processes align with legal, environmental, and industry-specific regulations.",
    company: "Quantum Forge",
    estimated: "~3 Hours",
    status: "In Queue",
  },
  {
    id: 9,
    type: "Competitor AI",
    description:
      "Monitors and analyzes competitor activity to provide actionable intelligence on positioning and differentiation.",
    company: "Stratos",
    estimated: "~5 Hours",
    status: "Active",
  },
  {
    id: 10,
    type: "Innovation AI",
    description:
      "Suggests product innovations, R&D directions, and breakthrough ideas based on market and technology trends.",
    company: "Stratos",
    estimated: "~3 Hours",
    status: "In Queue",
  },
  {
    id: 11,
    type: "Sustainability AI",
    description:
      "Develops eco-friendly strategies to help businesses reduce their carbon footprint and meet sustainability goals.",
    company: "Stratos",
    estimated: "~5 Hours",
    status: "In Queue",
  },
  {
    id: 12,
    type: "Crisis AI",
    description:
      "Creates crisis management plans and provides real-time recommendations to mitigate risks during emergencies.",
    company: "Stratos",
    estimated: "~3 Hours",
    status: "In Queue",
  },
];

export default function Container() {
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
                {statusItems.map((e) => (
                  <tr
                    key={e.id}
                    className="border border-[#FFCE8E] text-sm text-[#FDB479]"
                  >
                    <td className="border-r border-[#FFCE8E] p-4">{e.type}</td>
                    <td className="border-r border-[#FFCE8E] p-4">
                      {e.description}
                    </td>
                    <td className="border-r border-[#FFCE8E] p-4">
                      {e.company}
                    </td>
                    <td className="border-r border-[#FFCE8E] p-4">
                      {e.estimated}
                    </td>
                    <td className="p-4">{e.status}</td>
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
