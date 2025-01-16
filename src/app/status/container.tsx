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
    type: "Strategy AI",
    description: "Developing a growth strategy for client X.",
    company: "fufufafa",
    estimated: "~5 Hours",
    status: "Active",
  },
  {
    id: 2,
    type: "Analytical AI",
    description: "Analyzing market trends for client Y's new product launch.",
    company: "mulyono",
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
