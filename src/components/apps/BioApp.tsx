const BioApp = () => {
    return (
        <div className="bg-yellow-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <div className="font-pixel text-black leading-relaxed text-sm sm:text-base">

                <h1 className="text-3xl font-bold mb-4 font-serif">Hello there! 👋</h1>

                {/* Who I Am */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-2 border-b-2 border-black inline-block">Who I Am</h2>
                    <p className="mt-2">
                        I'm <span className="font-bold bg-yellow-200 px-1">Mohammad</span>, a Full-Stack Developer & Designer
                        who loves breaking things just to see how they work. This entire retro OS is built with
                        <span className="font-bold text-blue-700"> React</span> and
                        <span className="font-bold text-blue-700"> TypeScript</span> — a tribute to the golden age of computing.
                    </p>
                </section>

                {/* What I'm Building */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-2 border-b-2 border-black inline-block">What I'm Building</h2>
                    <p className="mt-2">
                        Currently shipping <span className="font-bold text-green-700">Focuswaqt</span> — an atmospheric
                        Pomodoro timer that's grown to <span className="font-bold">100+ active users</span>. It's got
                        ambient video backgrounds, multi-track audio mixing, and everything you need for deep work sessions.
                    </p>
                    <p className="mt-2">
                        I also run a small web & voice agency on the side. It's going well, though college runs 9-6 so
                        I'm juggling everything at once.
                    </p>
                </section>

                {/* What I'm Learning */}
                <section className="mb-6">
                    <h2 className="text-xl font-bold mb-2 border-b-2 border-black inline-block">What I'm Learning</h2>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Mastering JavaScript deeply (not just frameworks)</li>
                        <li>Picking up GoLang for backend work</li>
                        <li>Scaling apps from 100 to 1000+ users</li>
                        <li>📚 Reading books (no self-help please!)</li>
                    </ul>
                </section>

                {/* Contact */}
                <div className="mt-6 p-4 bg-blue-100 border-2 border-blue-900 text-blue-900 text-center">
                    <p className="font-bold mb-2">Let's Connect!</p>
                    <p>
                        My mindset is building and shipping my own products, but I'd love to work on projects
                        that genuinely excite me. Also open to freelance work!
                    </p>
                    <p className="mt-2 font-bold">
                        📧 <a href="mailto:shariqattar@icloud.com" className="underline hover:text-blue-700">shariqattar@icloud.com</a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default BioApp;
