import { contact } from '../../data/content';
import { ExternalLink } from 'lucide-react';

const ContactApp = () => {
    return (
        <div className="bg-yellow-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <div className="font-pixel text-black leading-relaxed text-sm sm:text-base">

                <h1 className="text-3xl font-bold mb-4 font-serif">Get In Touch 📬</h1>

                {/* Intro */}
                <section className="mb-6">
                    <p className="mb-4">{contact.text}</p>
                    <p>
                        Whether you have a project idea, want to collaborate, or just want to say hi —
                        I'm always happy to connect!
                    </p>
                </section>

                {/* Social Links */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-3 border-b-2 border-black inline-block">
                        Connect with me
                    </h2>

                    <div className="space-y-2 mt-3">
                        {contact.socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-white border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all"
                            >
                                <span className="text-2xl">{social.icon}</span>
                                <span className="flex-1 font-bold">{social.platform}</span>
                                <ExternalLink size={16} className="text-gray-500" />
                            </a>
                        ))}
                    </div>
                </section>

                {/* Call to action */}
                <div className="mt-6 p-4 bg-green-100 border-2 border-green-800 text-green-800 text-center">
                    <p className="font-bold mb-2">🚀 Let's build something cool together!</p>
                    <p className="text-sm">
                        Open to freelance work, collaborations, and interesting side projects.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ContactApp;
