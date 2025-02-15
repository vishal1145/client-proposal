"use client";
import ProjectDetail from "@/components/sections/projectDetails";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const { slug } = useParams(); // Get the slug from URL

  // Ensure 'id' is always a string
  const projectId = Array.isArray(slug) ? slug.join("-") : slug || "default-id";

  // Sample project data (Replace with API call if needed)
  const projectData = {
    id: projectId, // Now always a string ✅
    title: projectId.replace(/-/g, " "),
    category: "App Development",
    description: "An innovative solution for modern businesses.",
    image: "/images/project2.png",
    mainImage: "/images/project1.png",
    content: `
      Now-a-days, let it be anyone, let him have to fight his pursuit, looking for its acquisition/solution. 
      Because he will still resist, protect but through narrow, and also of those who resist.
    `,
    client: "Digital Trading Apps",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "Real-time data synchronization",
      "Secure payment processing",
      "Advanced analytics dashboard",
    ],
  };

  return (
    <main className="min-h-screen bg-white ">
      <ProjectDetail project={projectData} />
    </main>
  );
}
