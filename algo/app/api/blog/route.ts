import { NextRequest, NextResponse } from "next/server";

const blogs =[
    {
      "id": 1,
      "title": "The Future Of IT In The Legal Field Trends To Watch",
      "category": "App Development",
      "content": "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy.",
      "imageUrl": "/images/man.jpg",
      "link": "/blog/the-future-of-it-in-the-legal-field-trends-to-watch"
    },
    {
      "id": 2,
      "title": "Cybersecurity Tips For Law Firms & Its Legal Aids",
      "category": "Cybersecurity",
      "content": "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy.",
      "imageUrl": "/images/man.jpg",
      "link": "/blog/Cybersecurity-Tips-For-Law-Firms-Its-Legal-Aids"
    },
    {
      "id": 3,
      "title": "IT Compliance And Data Protection For Law Firms",
      "category": "IT Compliance",
      "content": "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy.",
      "imageUrl": "/images/man.jpg",
      "link": "/blog/IT-Compliance-And-Data-Protection-For-Law-Firms"
    },
    {
      "id": 4,
      "title": "The Future Of IT In The Legal Field Trends To Watch",
      "category": "App Development",
      "content": "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy.",
      "imageUrl": "/images/man.jpg",
      "link": "/blog/the-future-of-it-in-the-legal-field-trends-to-watch"
    },
    {
      "id": 5,
      "title": "Cybersecurity Tips For Law Firms & Its Legal Aids",
      "category": "Cybersecurity",
      "content": "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy.",
      "imageUrl": "/images/man.jpg",
      "link": "/blog/Cybersecurity-Tips-For-Law-Firms-Its-Legal-Aids"
    },
    {
      "id": 6,
      "title": "IT Compliance And Data Protection For Law Firms",
      "category": "IT Compliance",
      "content": "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy.",
      "imageUrl": "/images/man.jpg",
      "link": "/blog/IT-Compliance-And-Data-Protection-For-Law-Firms"
    }
  ]
  
export async function GET(req: NextRequest) {
  return NextResponse.json(blogs, { status: 200 });
}
