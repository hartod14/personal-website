import { projects } from "@/data/projects";
import ProjectDetail from "@/components/portfolio/ProjectDetail";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

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
    images: project.images
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