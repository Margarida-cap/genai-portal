import { Link } from "react-router-dom";
import type { Project } from "../types";
import ImageCard from "../components/ImageCard";
import Contact from "../components/Contact";
import PdfSlideshowDialog from "@/components/PdfSlideshowDialog";

export default function HomePage() {

    const projects: Project[] = [
        {
            id: "1",
            title: "KM Agent",
            description: "The KM agent allows the user to ask natural language questions to a chatbot interface about a large stockpile of loaded documents, lowering the amount of time it takes to find relevant information on various subjects. This project is a Flask-based API and a set of scripts for processing and embedding documents.",
            features: [
                "Chatbot Interface",
                "Document processing",
                "Gen-Ai Powered Search",
                "Flask API ", 
            ],
            benefits: [
                "Accelerated knowledge retrieval",
                "Time efficiency",
                "Centralized knowledge access",
                "Reduces human error ",
            ],
            imageUrl: "/images/km-icon.png",
            videoUrl: "/videos/km-agents.mp4",
        },
        {
            id: "2",
            title: "Cobol Transpiler",
            description: "The transpiler is an automated tool for translating COBOL Hogan programs into Java, leveraging Azure OpenAI models. This solution is designed to modernize COBOL codebases, streamline migration processes, and facilitate integration with contemporary software environments. The system supports both batch and interactive workflows, enabling users to process multiple COBOL files, validate outputs, and generate explanations for the translated code.",
            imageUrl: "/images/cbl-icon.png",
            features: [
                "Automated COBOL to Java/C# code translation", "Integration with Azure OpenAI for intelligent code transformation",
                "Output validation and consistency checks", "Code explanation generation for translated logic"],
            benefits: [
                "Accelerated legacy modernization", "Improved maintainability of modernized code",
                "Enhanced understanding of legacy logic via AI-generated explanations", "Seamless integration with modern development pipelines",
                "Cost savings on long-term COBOL maintenance", "Increased developer productivity and onboarding speed"
            ],
            
            videoUrl: "/videos/cobol.mp4",
        },
        {
            id: "3",
            title: "VB6 to .Net",
            description: "A tool to translate VB6 to .Net.",
            imageUrl: "/images/placeholder.jpg",
            videoUrl: "",
        },
        {
            id: "4",
            title: "Reverse Engineering",
            description: "The Reverse Engineering is an AI-powered solution that automatically generates technical documentation from source code. This tool saves developers countless hours by transforming complex codebases into comprehensive, readable documentation.",
            features: [
                "Process entire code repositories in one go", 
                "Understand dependencies between classes", 
                "Generate consolidated documentation that's actually useful for developers",
                "Supports multiple programing languagues", 
                "Generates several types of documentation for multiple purposes"
            ],
            benefits: [
                "Accelerating developer onboarding by providing immediate insight into unfamiliar code.",
                "Preserving institutional knowledge when experienced team members leave.",
                "Supporting compliance requirements in regulated industries by generating standardized documentation.",
                "Enabling smoother legacy system modernization by documenting outdated systems.",
                "Improving code quality by making technical debt and architectural issues more visible.",
            ],
            imageUrl: "/images/re-icon.png",
            videoUrl: "/videos/reverse-eng.mp4",
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
    // const pptSlides = [
    //     "/slides/slide1.png",
    //     "/slides/slide2.png",
    //     "/slides/slide3.png",
    // ];

    return (
        <>
            <header className="w-full bg-white shadow">
                <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">Cap GenAI Portal</h1>
                    <img
                        src="/images/logo-cap.png"
                        alt="Capgemini Logo"
                        className="h-20 w-auto"
                    />
                </div>
            </header>



            {/* ✅ Main Content */}
            <main className="max-w-screen-xl mx-auto p-6 min-h-screen">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Sidebar */}
                    <aside className="w-full md:w-[380px] flex-shrink-0 space-y-6">
                        <div className="bg-white shadow rounded p-4">
                            <h2 className="text-lg font-semibold mb-2">Overview</h2>
                            <p className="text-sm text-gray-700 mb-4">
                                This portal showcases the GenAI projects developed by Capgemini Portugal.
                                For an overview of ... click the button below.
                            </p>
                            <PdfSlideshowDialog file="GenAI-GADM-BlueBook-v1.1.pdf" buttonLabel="Open Slideshow Explanation" />

                            {/* <SlideshowCarousel images={pptSlides} buttonLabel="Click to view Slideshow" /> */}
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
