import React from "react";


const Hero: React.FC = () => {
	return (
		<section className="relative flex items-center justify-center h-screen px-8 pt-20 bg-white">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Left Side - Image */}
				<div className="relative">
					<div className="absolute -left-10 -top-10 bg-gradient-to-br from-purple-600 to-pink-400 w-72 h-96 rounded-full blur-3xl opacity-30"></div>
					<img
						src="/images/me.JPG" // Replace with your image URL
						alt="Profile"
						className="relative w-full max-w-sm mx-auto border-8 rounded-full shadow-2xl"
					/>
				</div>

				{/* Right Side - Text */}
				<div>
					<h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
						About Me
					</h4>
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
						i am serah kiarie
					</h1>
					<p className="text-gray-600 mt-4">
						I'm a full-stack developer with expertise in React, Redux Toolkit,
						Tailwind CSS, Node.js, and database management. I specialize in
						building scalable web applications, including vehicle rental
						systems, data visualization tools, and enterprise solutions. Beyond
						coding, I'm passionate about mentorship, tech advocacy, and
						community engagement as an active member of the Computer Society of
						Kirinyaga. My mission is to leverage technology to solve real-world
						problems and empower others in the industry.
					</p>

					<button className="mt-6 px-6 py-3 text-white font-bold bg-gradient-to-r from-purple-600 to-pink-400 rounded-lg shadow-lg hover:opacity-80 transition">
						DOWNLOAD CV
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
