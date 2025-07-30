"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, ArrowLeft, Filter, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { portfolioData } from "@/lib/data"
import { useState, useEffect } from "react"

export default function Page() {
	const { projects } = portfolioData
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedTech, setSelectedTech] = useState<string | null>(null)
	const [filteredProjects, setFilteredProjects] = useState(projects)
	const [isVisible, setIsVisible] = useState(false)

	// Get all unique technologies
	const allTechnologies = Array.from(new Set(projects.flatMap((project) => project.technologies))).sort()

	useEffect(() => {
		setIsVisible(true)
	}, [])

	useEffect(() => {
		let filtered = projects

		// Filter by search term
		if (searchTerm) {
			filtered = filtered.filter(
				(project) =>
					project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
					project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase())),
			)
		}

		// Filter by selected technology
		if (selectedTech) {
			filtered = filtered.filter((project) => project.technologies.includes(selectedTech))
		}

		setFilteredProjects(filtered)
	}, [searchTerm, selectedTech, projects])

	const clearFilters = () => {
		setSearchTerm("")
		setSelectedTech(null)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-background via-purple-50/20 to-background dark:via-purple-950/20">
			{/* Header */}
			<div className="pt-24 pb-16 px-4">
				<div className="max-w-7xl mx-auto">
					<div>
						<Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 mb-8">
							<Button variant='outline'>
								<ArrowLeft className="w-4 h-4" />
								Back to Home
							</Button>
						</Link>

						<h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
							<span className="rainbow-text">All </span>
							<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
								Projects
							</span>
						</h1>

						<p className="text-xl text-muted-foreground leading-relaxed">
							Explore my complete portfolio of innovative solutions and cutting-edge applications
						</p>
					</div>
				</div>
			</div>

			{/* Filters */}
			<div className="px-4 mb-12">
				<div className="max-w-7xl mx-auto">
					<div >
						{/* className={`${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`} style={{ animationDelay: "0.2s" }} */}
						<Card className="glass-morphism border-0">
							<div className="flex items-start gap-2 justify-end">
								{/* Search */}
								<div className="relative flex-1">
									<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
									<Input
										placeholder="Search projects..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="pl-10 glass-morphism border-0"
									/>
								</div>

								{/* Clear Filters */}
								{(searchTerm || selectedTech) && (
									<Button
										variant="ghost"
										size="sm"
										onClick={clearFilters}
										className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary"
									>
										<X className="w-4 h-4 text-muted-foreground" />
									</Button>
								)}
							</div>
						</Card>
						{/* Technology Filter */}
						{/* <div className="flex items-center justify-end gap-2 mt-3">
							<Filter className="w-4 h-4 text-muted-foreground" />
							<div className="flex flex-wrap gap-2">
								{allTechnologies.slice(0, 8).map((tech) => (
									<Button
										key={tech}
										variant={selectedTech === tech ? "default" : "outline"}
										size="sm"
										onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
										className={`text-xs ${selectedTech === tech ? "bg-primary text-white border-0" : "glass-morphism bg-transparent"	}`}
									>
										{tech}
									</Button>
								))}
							</div>
						</div> */}
					</div>
				</div>
			</div>

			{/* Featured Projects */}
			{/* {featuredProjects.length > 0 && (
				<div className="px-4 mb-16">
					<div className="max-w-7xl mx-auto">
						<div
							className={`${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`}
							style={{ animationDelay: "0.4s" }}
						>
							<h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
								<Star className="w-8 h-8 text-yellow-500 fill-current" />
								<span className="rainbow-text">Featured Projects</span>
							</h2>

							<div className="grid md:grid-cols-2 gap-8">
								{featuredProjects.map((project, index) => (
									<Card
										key={project.id}
										className="group glass-morphism border-0 hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer overflow-hidden"
									>
										<div className="relative h-64 overflow-hidden">
											<Image
												src={project.image || "/placeholder.svg"}
												alt={project.title}
												fill
												className="object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

											<div className="absolute top-4 left-4">
												<Badge className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white border-0 animate-pulse">
													<Star className="w-3 h-3 mr-1 fill-current" />
													Featured
												</Badge>
											</div>

											<div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
												<Button
													size="icon"
													className="glass-morphism hover:scale-125 transition-all duration-300 w-10 h-10"
													asChild
												>
													<Link href={project.liveUrl} target="_blank">
														<ExternalLink className="w-4 h-4" />
													</Link>
												</Button>
												<Button
													size="icon"
													className="glass-morphism hover:scale-125 transition-all duration-300 w-10 h-10"
													asChild
												>
													<Link href={project.githubUrl} target="_blank">
														<Github className="w-4 h-4" />
													</Link>
												</Button>
											</div>
										</div>

										<CardHeader className="p-6">
											<CardTitle className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
												{project.title}
											</CardTitle>
											<CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
										</CardHeader>

										<CardContent className="px-6 pb-6">
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech, techIndex) => (
													<Badge
														key={techIndex}
														variant="outline"
														className="text-xs hover:scale-110 transition-transform duration-300 cursor-pointer holographic border-0"
														onClick={() => setSelectedTech(tech)}
													>
														{tech}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</div>
			)} */}

			{/* All Projects */}
			<div className="px-4 pb-16">
				<div className="max-w-7xl mx-auto">
					<div className={`${isVisible ? "animate-slide-in-bounce" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
						<h2 className="text-3xl font-bold mb-8 rainbow-text">All Projects </h2>
						{/* ({filteredProjects.length}) */}

						{filteredProjects.length === 0 ? (
							<div className="text-center py-16">
								<p className="text-xl text-muted-foreground mb-4">No projects found matching your criteria</p>
								<Button onClick={clearFilters} variant="outline" className="glass-morphism bg-transparent">
									Clear Filters
								</Button>
							</div>
						) : (
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
								{filteredProjects.map((project, index) => (
									<Card
										key={project.id}
										className="group glass-morphism border-0 hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer overflow-hidden h-full"
										style={{ animationDelay: `${0.1 + index * 0.1}s` }}
									>
										<div className="relative h-48 overflow-hidden">
											<Image
												src={project.image || "/placeholder.svg"}
												alt={project.title}
												fill
												className="object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

											{/* Featured Badge */}
											{project.featured && (
												<div className="absolute top-3 left-4">
													<Badge className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white border-0 animate-pulse text-xs">
														<Star className="w-3 h-3 mr-1 fill-current" />
														Featured
													</Badge>
												</div>
											)}
											{project?.status &&
												<div className="absolute top-2 left-2 transition-all duration-500">
													<div className="px-2 bg-yellow-200 text-yellow-600 border border-yellow-500 rounded-full flex items-center justify-center text-sm">
														{project?.status}
													</div>
												</div>
											}

											{/* Action Buttons */}
											<div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
												<Button
													size="icon"
													className="glass-morphism hover:scale-110 transition-all duration-300 w-8 h-8"
													asChild
												>
													<Link href={project.githubUrl} target="_blank">
														<Github className="w-3 h-3" />
													</Link>
												</Button>
												<Button
													size="icon"
													className="glass-morphism hover:scale-110 transition-all duration-300 w-8 h-8"
													asChild
												>
													<Link href={project.liveUrl} target="_blank">
														<ExternalLink className="w-3 h-3" />
													</Link>
												</Button>
											</div>

											{/* Project Number */}
											{/* <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
												<div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
													{index + 1}
												</div>
											</div> */}
										</div>

										<CardHeader className="p-4">
											<Link href={project.liveUrl} target="_blank">
												<CardTitle className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500 flex items-center gap-2">
													<div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse" />
													{project.title}
												</CardTitle>
											</Link>
											<CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
										</CardHeader>

										<CardContent className="px-4 pb-4">
											<div className="flex flex-wrap gap-1">
												{project.technologies.slice(0, 4).map((tech, techIndex) => (
													<Badge
														key={techIndex}
														variant="outline"
														className="text-xs hover:scale-110 transition-transform duration-300 cursor-pointer holographic border-0"
														onClick={() => setSelectedTech(tech)}
													>
														{tech}
													</Badge>
												))}
												{project.technologies.length > 4 && (
													<Badge variant="outline" className="text-xs">
														+{project.technologies.length - 4}
													</Badge>
												)}
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div >
	)
}
