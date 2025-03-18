import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<footer className="bg-cyan-700 text-white py-6 opacity-50">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
				{/* Left Section - Copyright */}
				<p className="text-sm text-center md:text-left">
					© {new Date().getFullYear()} Serah Kiarie. All Rights Reserved.
				</p>

				{/* Right Section - Social Media Links */}
				<div className="flex space-x-4 mt-4 md:mt-0">
					<a
						href="https://github.com/KIARIE-97"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-pink-300 transition"
					>
						<FaGithub size={24} />
					</a>
					<a
						href="https://twitter.com/your-twitter"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-pink-300 transition"
					>
						<FaTwitter size={24} />
					</a>
					<a
						href="https://www.linkedin.com/in/serah-kiarie-a54681268/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-pink-300 transition"
					>
						<FaLinkedin size={24} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
