import { useLocation, useNavigate } from "react-router-dom";
import type { Project } from "../types";

export default function ProjectPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const project = (location.state as { project: Project })?.project;

  if (!project) {
    // Could fallback to fetch or redirect
    return (
      <div className="p-6">
        <p>Project not found.</p>
        <button onClick={() => navigate("/")} className="text-blue-600 underline">
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6 text-lg">{project.description}</p>
      <video controls className="w-full rounded shadow">
        <source src={project.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
