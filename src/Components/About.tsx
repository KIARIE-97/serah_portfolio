import React, { useState } from "react";

const AboutMe: React.FC = () => {
	const [activeTab, setActiveTab] = useState<
		"education" | "experience"
	>("education");

	return (
		<section className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-24 rounded-lg  mt-10 h-screen">
			<h2 className="text-3xl font-bold text-center text-white mb-6">
				About <span className="text-cyan-400">Me</span>
			</h2>

			<div className="flex flex-col md:flex-row items-center md:items-start">
				{/* Left Section - Profile Card */}
				<div className="bg-cyan-500 text-center p-6 rounded-lg shadow-lg w-full md:w-1/3">
					<img
						src="/images/me.JPG"
						alt="Profile"
						className="w-32 h-32 mx-auto rounded-full border-4 border-white"
					/>
					<h2 className="text-xl font-semibold mt-4">Serah Kiarie</h2>
					<p className="text-sm">Frontend Developer</p>
					<p className="text-sm">Backend Developer</p>
					<p className="text-sm">cloud engineer</p>
				</div>

				{/* Right Section - Details */}
				<div className="md:ml-10 mt-6 md:mt-0 w-full md:w-2/3">
					{/* Responsive Navigation Tabs */}
					<div className="flex space-x-4 border-b border-gray-700 pb-2">
						{["education", "experience"].map(
							(tab) => (
								<button
									key={tab}
									className={`text-sm font-semibold ${
										activeTab === tab
											? "text-cyan-400 border-b-2 border-cyan-400"
											: "text-gray-400"
									} transition duration-300`}
									onClick={() => setActiveTab(tab as any)}
								>
									{tab.charAt(0).toUpperCase() +
										tab.slice(1).replace(/([A-Z])/g, " $1")}
								</button>
							)
						)}
					</div>

					{/* Dynamic Content Based on Active Tab */}
					<div className="mt-4">
						{activeTab === "education" && (
							<>
								<h3 className="text-lg font-semibold text-cyan-400">
									BSC in SoftwareEngineering
								</h3>
								<p className="text-sm">Institution: Kirinyaga University</p>
								<p className="text-sm">Session: 2021 - present</p>
								<p className="text-sm">Result: Running</p>

								<h3 className="text-lg font-semibold text-cyan-400">
									certificate in certified cloud practitioner(CCP)
								</h3>
								<p className="text-sm">Institution: Ajira(aws re/start)</p>
								<p className="text-sm">Session: Jan 2025 - present</p>
								<p className="text-sm">Result: Running</p>
							</>
						)}
						{activeTab === "experience" && (
							<>
								<h3 className="text-lg font-semibold text-cyan-400">
									Frontend Developer
								</h3>
								<p className="text-sm">Company: Teach2Give</p>
								<p className="text-sm">Duration: may 2024 - july 2024</p>
								<p className="text-sm">
									Worked as an intern where we built scalable web applications
									using React & Tailwind.
								</p>

								<h3 className="text-lg font-semibold text-cyan-400 mt-4">
									Backend Developer
								</h3>
								<p className="text-sm">Company: Teach2Give</p>
								<p className="text-sm">Duration: may 2024 - july 2024</p>
								<p className="text-sm">
									Developed RESTful APIs using Node.js and hono.
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
