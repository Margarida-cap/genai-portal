import { useLocation, useNavigate } from "react-router-dom";
import type { Project } from "../types";
import { ArrowLeft, Eye, ListCheck, ChartColumnIncreasing } from "lucide-react";

export default function ProjectPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const project = (location.state as { project: Project })?.project;

  if (!project) {
    return (
      <div className="m-10">
        <p>Project not found.</p>
        <div className="group py-2 flex flex-inline hover:text-gray-800">
          <button onClick={() => navigate("/")} className="text-black-600 underline flex flex-inline">
            <ArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
            <p className="underline ">Go home</p>
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-12 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="group inline-flex items-center gap-1 text-black-600 hover:text-black-800 transition-colors duration-200 mb-4"
      >
        <ArrowLeft className="transition-transform duration-200 group-hover:-translate-x-1" />
      </button>

      {/* Layout: Description + Video */}
      <div className="flex flex-col lg:flex-row gap-8 w-full h-full">

        {/* ✅ Description column */}
        <div className="lg:w-1/3 space-y-6 text-gray-900">

          {/* Title */}
          <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
          {/* Overview */}
          <div>
            <div className="flex flex-inline gap-2 ">
              <Eye />
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
            </div>
            <p className="text-base text-lg">{project.description}</p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <div className="flex flex-inline gap-2 ">
                <ListCheck />
                <h2 className="text-xl font-semibold mb-2">Features</h2>
              </div>
              <ul className="list-disc list-inside space-y-1 text-base">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}


          {/* Benefits */}
          {project.benefits && (
            <div>
              <div className="flex flex-inline gap-2 ">
                <ChartColumnIncreasing />
                <h2 className="text-xl font-semibold mb-2">Benefits</h2>
              </div>
              <ul className="list-disc list-inside space-y-1 text-base">
                {project.benefits.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ✅ Video section */}
        <div className="lg:flex-1 w-full">
          <video controls className="w-full h-full max-h-[80vh] rounded shadow object-contain">
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
