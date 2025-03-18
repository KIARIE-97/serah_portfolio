import React from "react";
import { FaGlobe, FaCode, FaPaintBrush } from "react-icons/fa";

const services = [
	{
		title: "Web Design",
		icon: <FaGlobe className="text-cyan-400 text-4xl mx-auto" />,
		description:
			"I am a professional Web Designer. I have designed more than 50 web templates for my clients. You can hire me to design your personal, business, or other website templates.",
	},
	{
		title: "Web Development",
		icon: <FaCode className="text-cyan-400 text-4xl mx-auto" />,
		description:
			"I am a professional Web Developer. I have built scalable and high-performance websites. You can trust me to develop your website to meet your needs.",
	},
	{
		title: "Graphic Design",
		icon: <FaPaintBrush className="text-cyan-400 text-4xl mx-auto" />,
		description:
			"I am a professional Graphic Designer. I have created eye-catching graphics for businesses and individuals. You can hire me to create your branding and designs.",
	},
];

const Services: React.FC = () => {
	return (
		<section className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-24 rounded-lg">
			<h2 className="text-3xl font-bold text-center text-white mb-8">
				My <span className="text-cyan-400">Services</span>
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<div
						key={index}
						className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition transform hover:scale-105"
					>
						{service.icon}
						<h3 className="text-xl font-semibold text-cyan-400 mt-4">
							{service.title}
						</h3>
						<p className="text-sm text-gray-300 mt-2">{service.description}</p>
						<button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition">
							Hire Me
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
