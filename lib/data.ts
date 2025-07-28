export const portfolioData = {
	personal: {
		name: "Muhammad Tausif",
		title: "FullStack Developer",
		tagline: "Crafting digital experiences with modern web technologies",
		email: "tausif6040@gmail.com",
		phone: "+91 8804236040",
		location: "Indore, MP, India",
		avatar: "/img/hero-img.jpg",
		resume: "/resume.pdf",
		bio: "FullStack developer with 2 years of experience building scalable web applications. I specialize in React.js, Next.js and Node.js, with a keen eye for user experience and performance optimization. Always write clean and maintainable code.",
		social: {
			github: "https://github.com/tausif40",
			linkedin: "https://www.linkedin.com/in/muhammad-tausif-0142692a9/",
			portfolio: "https://tausif.info"
		}
	},
	skills: [
		{ name: "ReactJS", icon: "/skills/react.png", color: "bg-sky-500" },
		{ name: "NextJS", icon: "/skills/next.png", color: "bg-black" },
		{ name: "TypeScript", icon: "/skills/typescript.png", color: "bg-blue-500" },
		{ name: "JavaScript", icon: "/skills/javascript.png", color: "bg-yellow-500" },
		{ name: "Redux Toolkit", icon: "/skills/redux.png", color: "bg-[#764abc]" },
		{ name: "Socket IO", icon: "/skills/socket.png", color: "bg-gray-800" },
		{ name: "NodeJS", icon: "/skills/node.png", color: "bg-purple-500" },
		{ name: "ExpressJS", icon: "/skills/express.png", color: "bg-purple-500" },
		{ name: "Mongo DB", icon: "/skills/mongo-db.png", color: "bg-purple-500" },
		{ name: "HTML", icon: "/skills/html.png", color: "bg-orange-500" },
		{ name: "CSS", icon: "/skills/css.png", color: "bg-blue-500" },
		{ name: "Tailwind CSS", icon: "/skills/tailwind.png", color: "bg-teal-500" },
		{ name: "Shadcn UI", icon: "/skills/shadcn.png", color: "bg-gray-600" },
		{ name: "Ant design", icon: "/skills/ant-design.svg", color: "bg-gray-600" },
		{ name: "React hook form", icon: "/skills/react-hook-form.png", color: "bg-red-500" },
		{ name: "ZOD", icon: "/skills/zod.png", color: "bg-purple-500" },
		{ name: "Material UI", icon: "/skills/material.png", color: "bg-gray-600" },
		{ name: "Bootstrap", icon: "/skills/bootstrap.png", color: "bg-teal-500" },
		{ name: "Framer Motion", icon: "/skills/framer-motion.png", color: "bg-gray-600" },
		{ name: "Git", icon: "/skills/git.png", color: "bg-red-500" },
		{ name: "Github", icon: "/skills/github.png", color: "bg-red-500" },
		{ name: "pnpm", icon: "/skills/pnpm.png", color: "bg-red-500" },
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
			title: "Zappy",
			subTitle: "Event Management Platform",
			description:
				"Zappy is a comprehensive event management platform designed to simplify the planning and organization of various events such as weddings, birthdays, and corporate gatherings.",
			image: "/projects/zappy.png",
			technologies: [
				"Next.js",
				"TypeScript",
				"Redux Toolkit",
				"Zod",
				"Socket.io",
				"ShadCN UI"
			],
			liveUrl: "https://zappyeventz.com",
			githubUrl: "https://github.com/tausif40",
			featured: true,
			status: "Working"
		},
		{
			id: 4,
			title: "Helios Fintec",
			subTitle: "financial services",
			description:
				"Designed and developed a modern Fintech website to display financial services, investment plans, and user insights. Integrated responsive layouts, data visualization, and secure user interface.",
			image: "/projects/helios-fintec.png",
			technologies: [
				"Next.js",
				"TypeScript",
				"Redux Toolkit",
				"Zod",
				"Socket.io",
				"ShadCN UI"
			],
			liveUrl: "https://helios-fintec.vercel.app/",
			githubUrl: "https://github.com/tausif40",
			featured: false,
			status: "Working"
		},
		{
			id: 5,
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
			id: 6,
			title: "Patel Automotive",
			subTitle: "E-commerce",
			description:
				"Developed a responsive e-commerce website named Patel Automotive for showcasing and selling automotive products. Implemented product listings, cart functionality, and a user- friendly UI using modern frontend technologies.",
			image: "/projects/patelautomotive.jpg",
			technologies: ["React.js", "Node.js", "ExpressJS", "Mongo DB", "HTML", "CSS", "Javascript", "Tailwind CSS"],
			liveUrl: "https://github.com/tausif40/Patel-Automotive.git",
			githubUrl: "https://github.com/tausif40/Patel-Automotive.git",
			featured: false
		},
		{
			id: 7,
			title: "Hadoti Satta",
			subTitle: "Online Satta",
			description:
				"Built a real-time Online Satta result website with live result updates and a clean, responsive UI. Focused on fast data rendering, mobile optimization, and seamless user experience.",
			image: "/projects/hadoti-satta.png",
			technologies: ["React.js", "Node.js", "ExpressJS", "Mongo DB", "HTML", "CSS", "Javascript", "Tailwind CSS"],
			liveUrl: "https://www.hadotisatta.com",
			githubUrl: "https://github.com/tausif40",
			featured: false
		},
		{
			id: 8,
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
			id: 9,
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
			duration: "July 2024 - Current",
			location: "Indore, Madhya Pradesh",
			description:
				"Currently working as a Frontend Developer, collaborating with a team in an office environment. Proficient in React.js, Next.js, Node.js, JavaScript, TypeScript, Redux, Tailwind CSS, and Socket.io. I have contributed to full frontend development  lifecycle from understanding client requirements and participating in team discussions to implementing UI components, managing state, and integrating APIs. Focused on writing clean, maintainable code and delivering better user experiences.",
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
			duration: "Jan - July 2024",
			location: "Indore, Madhya Pradesh",
			description:
				"Completed 3 freelance projects by working directly with clients to understand their requirements, and transform ideas into fully functional web applications. From the first meeting to the final deployment, I handled the entire development process, designing user interfaces, coding in React, Next.js and Node.js, and managing state with Redux. I focused on building clean, responsive websites and admin panels, while ensuring clear communication and adapting to client feedback throughout the project.",
			technologies: [
				"React.js",
				"JavaScript",
				"HTML",
				"CSS",
				"Tailwind CSS",
				"Bootstrap",
				"jQuery",
			]
		},
		{
			company: "Ypsilon IT Solutions Pvt. Ltd.",
			position: " MERN Stack developer - Internship",
			duration: "July 2023 - JAN 2024 (6 Months)",
			location: "Indore, Madhya Pradesh",
			description:
				"I completed a 6-month internship as a MERN Stack developer, where I worked on real-world projects and learned the fundamentals of building modern web applications. Since then, I have continued to grow as a full-stack developer, gaining hands-on experience building responsive UIs with React and implementing scalable backend APIs using Node.js and Express.js.",
			technologies: [
				"React.js",
				"Node.js",
				"MongoDB",
				"Express.js",
				"JavaScript",
				"HTML",
				"CSS",
				"Tailwind CSS",
				"Bootstrap",
				"jQuery"
			]
		}
	],

	testimonials: [
		{
			name: "Sarah Chen",
			position: "Product Manager at TechCorp",
			content:
				"Alex consistently delivers high-quality code and has an excellent understanding of both fullstack and backend technologies. A pleasure to work with!",
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