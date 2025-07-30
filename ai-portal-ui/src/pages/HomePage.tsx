import { Link } from "react-router-dom";
import type { Project } from "../types";
import ImageCard from "../components/ImageCard";
import Contact from "../components/Contact";
import SlideshowCarousel from "../components/SlideshowCarousel";

export default function HomePage() {
    const projects: Project[] = [
        {
            id: "1",
            title: "KM Agent",
            description: "An AI assistant.",
            imageUrl: "/images/placeholder.jpg",
            videoUrl: "/videos/km-agents.mp4",
        },
        {
            id: "2",
            title: "Cobol Transpiler",
            description: "An AI assistant.",
            imageUrl: "/images/placeholder.jpg",
            videoUrl: "https://yourstorage.blob.core.windows.net/videos/chatbot.mp4",
        },
        {
            id: "3",
            title: "VB6 to .Net",
            description: "An AI assistant.",
            imageUrl: "/images/placeholder.jpg",
            videoUrl: "/videos/km-agents.mp4",
        },
        {
            id: "4",
            title: "Reverse Engineering",
            description: "An AI assistant.",
            imageUrl: "/images/placeholder.jpg",
            videoUrl: "https://yourstorage.blob.core.windows.net/videos/chatbot.mp4",
        }
    ];
    const contacts = [
        {
            name: "Gonçalo Oliveira",
            email: "goncalo-dias.oliveira@capgemini.com",
            imageUrl: "/images/default-avatar.png",
        },
        {
            name: "André Filipe",
            email: "andre-miguel.filipe@capgemini.com",
            imageUrl: "/images/default-avatar.png",
        },
        {
            name: "Felipe dos Santos",
            email: "felipe-henrico.dos-santos@capgemini.com",
            imageUrl: "/images/default-avatar.png",
        }
    ];
    const pptSlides = [
        "/slides/slide1.png",
        "/slides/slide2.png",
        "/slides/slide3.png",
    ];

    return (
        <>
            {/* ✅ Header */}
            <header className="w-full bg-white shadow">
                <div className="max-w-screen-xl mx-auto px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-800">Cap GenAI Portal</h1>
                </div>
            </header>

            {/* ✅ Main Content */}
            <main className="max-w-screen-xl mx-auto p-6 min-h-screen">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Sidebar */}
                    <aside className="w-full md:w-[380px] flex-shrink-0 space-y-6">
                        <div className="bg-white shadow rounded p-4">
                            <h2 className="text-lg font-semibold mb-2">Overview</h2>
                            <p className="text-sm text-gray-700">
                                This portal showcases the GenAI projects developed by Capgemini Portugal.
                                For an overview of ... click the button below.
                            </p>
                            <SlideshowCarousel images={pptSlides} buttonLabel="View Slides" />
                        </div>

                        <div className="bg-white shadow rounded p-4 space-y-3">
                            <h2 className="text-lg font-semibold mb-2">Contacts</h2>
                            {contacts.map((c) => (
                                <Contact key={c.email} {...c} />
                            ))}
                        </div>
                    </aside>

                    {/* Gallery */}
                    <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <Link
                                key={project.id}
                                to={`/project/${project.id}`}
                                state={{ project }}
                            >
                                <ImageCard title={project.title} imageUrl={project.imageUrl} />
                            </Link>
                        ))}
                    </section>
                </div>
            </main>
        </>
    );
}
