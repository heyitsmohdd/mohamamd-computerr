import { projects } from '../../data/content';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsApp = () => {
    return (
        <div className="bg-yellow-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <div className="font-pixel text-black leading-relaxed text-sm sm:text-base">

                <h1 className="text-3xl font-bold mb-4 font-serif">My Projects 💾</h1>

                <p className="mb-6">
                    Here's what I've been building. Real projects, real users, real learning.
                </p>

                <div className="space-y-6">
                    {projects.map((project) => (
                        <section key={project.id} className="pb-6 border-b-2 border-black last:border-0">
                            <h2 className="text-xl font-bold mb-2 border-b-2 border-black inline-block">
                                {project.icon} {project.title}
                            </h2>

                            <p className="mt-3 mb-3">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs px-2 py-1 bg-blue-100 border-2 border-blue-900 text-blue-900 font-bold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-1 bg-green-100 border-2 border-green-800 text-green-800 font-bold hover:bg-green-200 transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                                {project.repoLink && (
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 border-2 border-gray-800 text-gray-800 font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        <Github size={14} />
                                        <span>Source Code</span>
                                    </a>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProjectsApp;
