import { skills } from '../../data/content';

const SkillsApp = () => {
    return (
        <div className="bg-yellow-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6">
            <div className="font-pixel text-black leading-relaxed text-sm sm:text-base">

                <h1 className="text-3xl font-bold mb-4 font-serif">My Skills 🛠️</h1>

                <p className="mb-6">
                    The tools and technologies I work with. Always learning more!
                </p>

                <div className="space-y-6">
                    {skills.map((category, idx) => (
                        <section key={idx} className="mb-4">
                            <h2 className="text-xl font-bold mb-3 border-b-2 border-black inline-block">
                                {category.category}
                            </h2>

                            <div className="grid grid-cols-2 gap-2 mt-3">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-3 p-2 bg-white border-2 border-gray-300 hover:border-blue-500 transition-colors"
                                    >
                                        <img
                                            src={`https://cdn.simpleicons.org/${skill.slug}/000000`}
                                            alt={skill.name}
                                            style={{ width: '20px', height: '20px', minWidth: '20px' }}
                                            className="opacity-80"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                        <span className="font-bold text-sm">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Footer note */}
                <div className="mt-6 p-3 bg-blue-100 border-2 border-blue-900 text-blue-900 text-center">
                    <p className="font-bold">💡 Always exploring new tools and technologies!</p>
                </div>

            </div>
        </div>
    );
};

export default SkillsApp;
