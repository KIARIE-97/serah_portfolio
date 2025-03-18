import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
	return (
		<section
			id="contact"
			className="bg-gray-900 text-white py-12 px-6 md:px-16 lg:px-24 mt-10"
		>
			<h2 className="text-3xl font-bold text-center mb-8">
				Contact <span className="text-cyan-400">Me</span>
			</h2>

			{/* Social Links */}
			<div className="flex justify-center gap-6 mb-8">
				<a
					href="https://github.com/KIARIE-97"
					target="_blank"
					rel="noopener noreferrer"
					className="text-cyan-400 text-3xl hover:text-cyan-300 transition"
				>
					<FaGithub />
				</a>
				<a
					href="https://twitter.com/yourusername"
					target="_blank"
					rel="noopener noreferrer"
					className="text-cyan-400 text-3xl hover:text-cyan-300 transition"
				>
					<FaTwitter />
				</a>
				<a
					href="https://www.linkedin.com/in/serah-kiarie-a54681268/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-cyan-400 text-3xl hover:text-cyan-300 transition"
				>
					<FaLinkedin />
				</a>
				<a
					href="mailto:sarahwanjiruki1@gmail.com"
					className="text-cyan-400 text-3xl hover:text-cyan-300 transition"
				>
					<FaEnvelope />
				</a>
			</div>

			{/* Contact Form */}
			<div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
				<form>
					<div className="mb-4">
						<label className="block text-gray-300 text-sm font-semibold mb-2">
							Name
						</label>
						<input
							type="text"
							className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
							placeholder="Your Name"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-300 text-sm font-semibold mb-2">
							Email
						</label>
						<input
							type="email"
							className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
							placeholder="Your Email"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-300 text-sm font-semibold mb-2">
							Message
						</label>
						<textarea
							className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
							placeholder="Your Message"
							rows={4}
							required
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 rounded-lg transition"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
