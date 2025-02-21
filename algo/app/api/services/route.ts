import connectDB from "@/lib/DB";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  
  const services = [
    {
      "_id": "67b71c32bda5a81522122ef3",
      "title": "Designing IT Services",
      "description": "Contrary to popular belief, Lorem Ipsum is",
      "slug": "designing-it-services",
      "featured": true,
      "icon": "<svg class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'/></svg>",
      "__v": 0
  },
  {
      "_id": "67b71cb9bda5a81522122ef5",
      "title": "Cloud IT Services",
      "description": "Contrary to popular belief, Lorem Ipsum is",
      "slug": "cloud-it-services",
      "featured": true,
      "icon": "<svg class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z'/></svg>",
      "__v": 0
  },
  {
      "_id": "67b71ce0bda5a81522122ef7",
      "title": "Cybersecurity Services",
      "description": "Contrary To Popular Belief, Lorem Ipsum is",
      "slug": "cybersecurity-services",
      "featured": false,
      "icon": "<svg class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'/></svg>",
      "__v": 0
  },
  {
      "_id": "67b71d8bbda5a81522122ef9",
      "title": "Managed IT Services",
      "description": "Contrary To Popular Belief, Lorem Ipsum",
      "slug": "managed-it-services",
      "featured": false,
      "icon": "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'/></svg>",
      "__v": 0
  },
  {
      "_id": "67b71de8bda5a81522122efd",
      "title": "Network And Infrastructure",
      "description": "Contrary To Popular Belief, Lorem Ipsum",
      "slug": "network-and-infrastructure",
      "featured": false,
      "icon": "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z'/></svg>",
      "__v": 0
  },
  {
      "_id": "67b71e05bda5a81522122eff",
      "title": "IT Consulting Services",
      "description": "Contrary To Popular Belief, Lorem Ipsum",
      "slug": "it-consulting-services",
      "featured": false,
      "icon": "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18'/></svg>",
      "__v": 0
  },
  {
      "_id": "67b71e35bda5a81522122f01",
      "title": "Legal Technology Services",
      "description": "Contrary To Popular Belief, Lorem Ipsum",
      "slug": "legal-technology-services",
      "featured": false,
      "icon": "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z'/></svg>",
      "__v": 0
  },
  {
      "_id": "67b71e53bda5a81522122f03",
      "title": "Software Development",
      "description": "Contrary To Popular Belief, Lorem Ipsum",
      "slug": "software-development",
      "featured": false,
      "icon": "<svg xmlns='http://www.w3.org/2000/svg' class='w-10 h-10 text-[#0561FC] group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'/></svg>",
      "__v": 0
  }
  ];
  
  return NextResponse.json({ success: true, data: services }, { status: 200 });
}
