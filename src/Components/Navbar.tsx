import React from "react";

const Navbar: React.FC = () => {
	return (
		<nav className="bg-purple-700 py-4 px-8 fixed w-full top-0 shadow-lg z-50">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<div className="text-white text-2xl font-bold flex items-center">
					<span className="text-pink-400 text-3xl">s</span>
					<span className="ml-2 font-serif">kiarie</span>
				</div>

				{/* Navigation Links */}
				<ul className="flex space-x-6 text-white font-semibold">
					<li className="hover:text-pink-300 cursor-pointer">home</li>
					<li className="hover:text-pink-300 cursor-pointer">about</li>
					<li className="hover:text-pink-300 cursor-pointer">projects</li>
					<li className="hover:text-pink-300 cursor-pointer">services</li>
					<li className="hover:text-pink-300 cursor-pointer">contact</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
