import React from "react";

const projects = [
	{
		title: "bankist App",
		image: "/images/bankist.png", // Replace with actual image path
		description:
			"A web-based banking application with features like transfers, loans, and investments.",
		github: "https://numbers-date-and-time-bankist.vercel.app/",
	},
	{
		title: "CarMinder",
		image: "/images/carminder.png", // Replace with actual image path
		description:
			"A vehicle rental management system with booking, fleet tracking, and user authentication.",
		github: "https://github.com/KIARIE-97/vehicle-rental-system_client",
	},
	{
		title: "Portfolio Website",
		image: "/projects/portfolio.png",
		description:
			"My personal portfolio website showcasing my projects, experience, and blog posts.",
		github: "https://github.com/yourusername/portfolio",
	},
];

const Projects: React.FC = () => {
	return (
		<section className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-24 h-screen mt-12">
			<h2 className="text-3xl font-bold text-center text-white mb-8">
				My <span className="text-cyan-400">Projects</span>
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project, index) => (
					<div
						key={index}
						className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold text-cyan-400">
								{project.title}
							</h3>
							<p className="text-sm text-gray-300 mt-2">
								{project.description}
							</p>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block mt-4 text-cyan-500 hover:underline"
							>
								View live demo →
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
