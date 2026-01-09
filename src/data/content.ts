
export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    demoLink?: string;
    repoLink?: string;
    icon: string;
}

export interface SkillCategory {
    category: string;
    items: Array<{
        name: string;
        slug: string;
    }>;
}

export interface Bio {
    headline: string;
    aboutText: string;
}

export interface Contact {
    text: string;
    socialLinks: SocialLink[];
}

export interface Theme {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textSecondary: string;
}

export interface PortalIcon {
    id: string;
    label: string;
    iconUrl: string;
    description?: string;
}

export const bio: Bio = {
    headline: "hey i'm mohammad — Full-Stack Developer & Designer",
    aboutText: `I'm a web developer who loves building things and breaking them to see how they work. Currently focused on shipping my own products while juggling college and freelance work.`
};

export const skills: SkillCategory[] = [
    {
        category: "Languages",
        items: [
            { name: "JavaScript", slug: "javascript" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Python", slug: "python" },
            { name: "C++", slug: "cplusplus" },
            { name: "C", slug: "c" },
            { name: "HTML5", slug: "html5" },
            { name: "CSS3", slug: "css3" },
            { name: "Go (beginner)", slug: "go" },
            { name: "Swift", slug: "swift" }
        ]
    },
    {
        category: "Frameworks & Libraries",
        items: [
            { name: "React", slug: "react" },
            { name: "Next.js", slug: "nextdotjs" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "Express", slug: "express" },
            { name: "Tailwind CSS", slug: "tailwindcss" },
            { name: "Framer Motion", slug: "framer" }
        ]
    },
    {
        category: "Tools & Platforms",
        items: [
            { name: "Git", slug: "git" },
            { name: "GitHub", slug: "github" },
            { name: "Docker", slug: "docker" },
            { name: "Figma", slug: "figma" },
            { name: "Vercel", slug: "vercel" },
            { name: "Vite", slug: "vite" },
            { name: "Supabase", slug: "supabase" },
            { name: "AI Tools", slug: "openai" },
            { name: "CLI Tools", slug: "gnubash" }
        ]
    },
    {
        category: "Architecture & Design",
        items: [
            { name: "System Design (beginner)", slug: "diagramsdotnet" },
            { name: "Component Architecture", slug: "react" }
        ]
    }
];

export const contact: Contact = {
    text: "Feel free to drop me an email at shariqattar@icloud.com — I always appreciate when people connect!",
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/shariqattarr",
            icon: "💻"
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/md-shariq-5894a5366",
            icon: "💼"
        },
        {
            platform: "Twitter",
            url: "https://twitter.com/shaqzxs",
            icon: "🐦"
        },
        {
            platform: "Email",
            url: "mailto:shariqattar@icloud.com",
            icon: "📧"
        }
    ]
};

export const portalIcons: PortalIcon[] = [
    {
        id: "bio",
        label: "About",
        iconUrl: "https://win98icons.alexmeub.com/icons/png/computer-3.png",
        description: "Learn more about me"
    },
    {
        id: "projects",
        label: "Projects",
        iconUrl: "https://win98icons.alexmeub.com/icons/png/folder_open-4.png",
        description: "View my work"
    },
    {
        id: "skills",
        label: "Skills",
        iconUrl: "https://win98icons.alexmeub.com/icons/png/notepad-3.png",
        description: "My tech stack"
    },
    {
        id: "contact",
        label: "Contact",
        iconUrl: "https://win98icons.alexmeub.com/icons/png/message_file-0.png",
        description: "Get in touch"
    }
];

export const projects: Project[] = [
    {
        id: "web-os-portfolio",
        title: "mohammad-computer",
        description: "A portfolio website styled as a retro operating system with draggable windows, taskbar, and classic UI elements. Features window management state architecture and CRT aesthetic.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        demoLink: "https://mohammad-computer.vercel.app/",
        repoLink: "https://github.com/shariqattarr/mohamamd-computerr.git",
        icon: "💾"
    },
    {
        id: "lofi-focus-tool",
        title: "Focuswaqt",
        description: "An atmospheric Pomodoro timer with ambient video backgrounds and multi-track audio mixer. Built for deep work sessions with customizable soundscapes — 100+ active users and growing!",
        techStack: ["React", "Zustand", "YouTube API", "Web Audio API"],
        demoLink: "https://focuswaqt.vercel.app/",
        icon: "🎵"
    },
    {
        id: "dynamic-test-generation",
        title: "Dynamic Test Generation",
        description: "An automated API testing tool that dynamically generates test cases for REST APIs. Analyzes API schemas, creates comprehensive test scenarios, and helps catch edge cases.",
        techStack: ["Python"],
        repoLink: "https://github.com/shariqattarr/dynamic-test-generation",
        icon: "🧪"
    }
];

export const theme: Theme = {
    primary: "#008080",
    secondary: "#c0c0c0",
    accent: "#000080",
    background: "#008080",
    text: "#000000",
    textSecondary: "#808080"
};
