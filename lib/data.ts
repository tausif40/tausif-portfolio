import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaGitAlt,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiNextdotjs,
	SiTypescript,
	SiRedux,
	SiShadcnui,
	SiSocketdotio,
	SiZod
} from "react-icons/si";

export const portfolioData = {
	personal: {
		name: "Muhammad Tausif",
		title: "Frontend Developer",
		tagline: "Crafting digital experiences with modern web technologies",
		email: "tausif6040@gmail.com",
		phone: "+91 8804236040",
		location: "Indore, MP, India",
		avatar: "/img/hero-img.jpg",
		resume: "/resume.pdf",
		bio: "Frontend developer with 1+ years of experience building scalable web applications. I specialize in React.js and Next.js, with a keen eye for user experience and performance optimization. Always write clean and maintainable code.",
		social: {
			github: "https://github.com/tausif40",
			linkedin: "https://www.linkedin.com/in/muhammad-tausif-0142692a9/",
			portfolio: "https://tausif.info"
		}
	},
	skills: [
		{ name: "React", icon: FaReact, category: "Library", color: "sky-500" },
		{
			name: "Next.js",
			icon: SiNextdotjs,
			category: "Framework",
			color: "black"
		},
		{
			name: "TypeScript",
			icon: SiTypescript,
			category: "Language",
			color: "blue-500"
		},
		{
			name: "JavaScript",
			icon: FaJs,
			category: "Language",
			color: "yellow-500"
		},
		{
			name: "Redux Toolkit",
			icon: SiRedux,
			category: "Library",
			color: "[#764abc]"
		},
		{
			name: "Socket IO",
			icon: SiSocketdotio,
			category: "Library",
			color: "gray-800"
		},
		{ name: "ZOD", icon: SiZod, category: "Library", color: "purple-500" },
		{ name: "HTML", icon: FaHtml5, category: "Markup", color: "orange-500" },
		{ name: "CSS", icon: FaCss3Alt, category: "Styling", color: "blue-500" },
		{
			name: "Tailwind CSS",
			icon: SiTailwindcss,
			category: "Styling",
			color: "teal-500"
		},
		{
			name: "Shadcn UI",
			icon: SiShadcnui,
			category: "Styling",
			color: "gray-600"
		},
		{
			name: "Git",
			icon: FaGitAlt,
			category: "Version Control",
			color: "red-500"
		}
		// { name: "Framer Motion", icon: "🎭", category: "Styling" },
		// { name: "Figma", icon: "🎨", category: "Design" },
		// { name: "Jest", icon: "🧪", category: "Testing" },
		// { name: "Webpack", icon: "📦", category: "Build Tool" }
	],

	services: [
		{
			title: "Web Development",
			description:
				"Full-stack web applications with modern frameworks and best practices",
			icon: "💻",
			features: [
				"React/Next.js",
				"Node.js Backend",
				"Database Design",
				"API Development"
			],
			color: "from-blue-500 to-cyan-500"
		},
		{
			title: "Mobile Development",
			description: "Cross-platform mobile apps with React Native and Flutter",
			icon: "📱",
			features: [
				"React Native",
				"Flutter",
				"iOS & Android",
				"App Store Deployment"
			],
			color: "from-purple-500 to-pink-500"
		},
		{
			title: "UI/UX Design",
			description:
				"Beautiful, intuitive user interfaces that convert and engage",
			icon: "🎨",
			features: [
				"Figma Design",
				"Prototyping",
				"User Research",
				"Design Systems"
			],
			color: "from-green-500 to-emerald-500"
		},
		{
			title: "DevOps & Cloud",
			description: "Scalable infrastructure and deployment automation",
			icon: "☁️",
			features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
			color: "from-orange-500 to-red-500"
		},
		{
			title: "Consulting",
			description:
				"Technical guidance and architecture planning for your projects",
			icon: "🧠",
			features: [
				"Code Review",
				"Architecture",
				"Performance",
				"Best Practices"
			],
			color: "from-indigo-500 to-purple-500"
		},
		{
			title: "E-commerce",
			description:
				"Complete online stores with payment integration and analytics",
			icon: "🛒",
			features: ["Shopify", "WooCommerce", "Payment Gateways", "Analytics"],
			color: "from-pink-500 to-rose-500"
		}
	],
	achievements: [
		{
			title: "AWS Certified Developer",
			organization: "Amazon Web Services",
			date: "2023",
			icon: "🏆",
			description: "Professional level certification in AWS development"
		},
		{
			title: "React Expert Certification",
			organization: "Meta",
			date: "2022",
			icon: "⚛️",
			description: "Advanced React development and best practices"
		},
		{
			title: "Top 1% Developer",
			organization: "Stack Overflow",
			date: "2023",
			icon: "📊",
			description: "Ranked in top 1% of developers globally"
		},
		{
			title: "Open Source Contributor",
			organization: "GitHub",
			date: "2021-Present",
			icon: "🌟",
			description: "500+ contributions to open source projects"
		}
	],

	projects: [
		{
			id: 1,
			title: "AnyUni",
			subTitle: "Overseas Education Consultant",
			description:
				"AnyUNI is an overseas education consultant that helps students from all over the world find the perfect study abroad program.",
			image: "/projects/anyUni.png",
			technologies: [
				"Next.js",
				"Javascript",
				"Redux Toolkit",
				"Tailwind CSS",
				"Google auth",
				"reCaptcha"
			],
			liveUrl: "https://anyuni.io/",
			githubUrl: "https://github.com/tausif40",
			featured: true
		},
		{
			id: 2,
			title: "More Matrimony",
			subTitle: "Online Matrimonial Service",
			description:
				"It is an online matrimonial service. The platform allows users to create profiles, search for potential matches, and connect securely.",
			image: "/projects/matrimony.png",
			technologies: [
				"React",
				"Redux Toolkit",
				"Socket.io",
				"Tailwind CSS",
				"ant-design"
			],
			liveUrl: "https://morematrimony.com",
			githubUrl: "https://github.com/tausif40",
			featured: true
		},
		{
			id: 3,
			title: "Best Fitted Wardrobe",
			subTitle: "Bespoke Wardrobe Design",
			description:
				"Best fitted wardrobe creates and installs luxury bespoke wardrobes and kitchens, designed and crafted in London and Essex.",
			image: "/projects/wardrobe.png",
			technologies: ["HTML", "CSS", "Javascript", "React.js", "Tailwind CSS"],
			liveUrl: "https://bestfittedwardrobe.co.uk",
			githubUrl: "https://github.com/tausif40",
			featured: false
		},
		{
			id: 4,
			title: "Auro Terra Energy",
			subTitle: "Biomass Pellets",
			description:
				"Powering Sustainability with Biomass Pellets. benefits of biomass pellets as an eco-friendly and sustainable energy source.",
			image: "/projects/auroTerra.png",
			technologies: ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap"],
			liveUrl: "https://blog-cms-demo.vercel.app",
			githubUrl: "https://github.com/tausif40",
			featured: false
		},
		{
			id: 5,
			title: "My Portfolio",
			subTitle: "Personal Portfolio Website",
			description:
				"This portfolio showcases of my skills in advanced UI/UX design, animations, and performance-optimized web development.",
			image: "/projects/portfolio.png",
			technologies: [
				"HTML",
				"CSS",
				"Javascript",
				"NEXT",
				"shadcn UI",
				"Tailwind CSS"
			],
			liveUrl: "https://tausif.info",
			githubUrl: "https://github.com/tausif40",
			featured: false
		},

	],
	experience: [
		{
			position: "Frontend Developer",
			company: "Modern Technology Pvt. Ltd.",
			duration: "July / 2024 - Current",
			location: "Indore, Madhya Pradesh",
			description:
				"Frontend Developer with 1+ year of experience, working in an office environment and collaborating closely with backend developers. Proficient in React.js, Next.js, JavaScript, TypeScript, Redux, Tailwind CSS, and Socket.io. I’ve contributed to full project lifecycles from understanding client requirements and participating in team discussions to implementing UI components, managing state, and integrating APIs. Focused on writing clean, maintainable code and delivering better user experiences.",
			technologies: [
				"React.js",
				"Next.js",
				"JavaScript",
				"TypeScript",
				"Redux",
				"Socket.io",
				"Tailwind CSS"
			]
		},
		{
			company: "Self-Employed",
			position: "Freelance Web Developer",
			duration: "Jan to july - 2024",
			location: "Indore, Madhya Pradesh",
			description:
				"Worked directly with clients to understand their requirement, and turn ideas into fully functional web applications. From the first meeting to the final deployment, I handled the entire development process, design user interfaces, coding in React, Next.js, Tailwind CSS, and managing state with Redux. I focused on building clean, responsive websites and admin panels, while ensuring clear communication, and adapting to client feedback throughout the project.",
			technologies: [
				"React.js",
				"JavaScript",
				"HTML",
				"CSS",
				"Tailwind CSS",
				"Bootstrap",
				"Jquery",
			]
		},
		{
			company: "Ypsilon IT Solutions pvt ltd",
			position: "Internship",
			duration: "6 Months",
			location: "Indore, Madhya Pradesh",
			description:
				"I started my journey with a 6-month internship as a React developer, where I worked on real projects and learned the fundamentals of building modern web apps. Since then, I have continued to grow as a frontend developer, gaining hands-on experience building responsive, user-friendly interfaces using React and related technologies.",
			technologies: [
				"React.js",
				"JavaScript",
				"HTML",
				"CSS",
				"Tailwind CSS",
				"Bootstrap",
				"Jquery"
			]
		}
	],
	testimonials: [
		{
			name: "Sarah Chen",
			position: "Product Manager at TechCorp",
			content:
				"Alex consistently delivers high-quality code and has an excellent understanding of both frontend and backend technologies. A pleasure to work with!",
			avatar: "/placeholder.svg?height=60&width=60"
		},
		{
			name: "Mike Rodriguez",
			position: "CTO at StartupXYZ",
			content:
				"One of the most talented developers I've worked with. Alex's attention to detail and problem-solving skills are exceptional.",
			avatar: "/placeholder.svg?height=60&width=60"
		},
		{
			name: "Emily Davis",
			position: "Design Lead at CreativeStudio",
			content:
				"Alex brings designs to life with pixel-perfect precision. The collaboration was seamless and the results exceeded expectations.",
			avatar: "/placeholder.svg?height=60&width=60"
		}
	]
};

export type PortfolioData = typeof portfolioData;
export type Project = (typeof portfolioData.projects)[0];
export type Skill = (typeof portfolioData.skills)[0];
export type Experience = (typeof portfolioData.experience)[0];
export type Testimonial = (typeof portfolioData.testimonials)[0];
export type Service = (typeof portfolioData.services)[0];
export type Achievement = (typeof portfolioData.achievements)[0];