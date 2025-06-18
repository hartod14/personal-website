"use client"

import { projects } from "@/data/projects";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { notFound, useParams } from "next/navigation";

export default  function ProjectDetailPage() {
  // Ensure params is properly awaited
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const projectData = {
    title: project.title,
    shortDescription: project.description,
    techStack: project.techStack,
    projectOverview: project.description,
    keyFeatures: project.keyFeatures,
    challengesAndSolutions: project.challengesAndSolutions,
    images: project.images,
  };

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetail {...projectData} />
      </main>
      <Footer />
    </>
  );
}
