import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<nav className="bg-cyan-700 py-4 px-8 fixed w-full top-0 shadow-lg z-50">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<div className="text-white text-2xl font-bold flex items-center">
					<span className="text-pink-400 text-3xl">s</span>
					<span className="ml-2 font-serif">kiarie</span>
				</div>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex space-x-6 text-white font-semibold">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="about">About</Link>
					</li>
					<li>
						<Link to="projects">Projects</Link>
					</li>
					{/* <li>
						<Link to="services">Services</Link>
					</li> */}
					<li>
						<Link to="contact">Contact</Link>
					</li>
				</ul>

				{/* Mobile Menu Button */}
				<button onClick={toggleMenu} className="md:hidden text-white text-2xl">
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Mobile Navigation */}
			<ul
				className={`absolute top-16 left-0 w-full bg-purple-700 py-4 text-center space-y-4 transition transform ${
					isOpen ? "translate-y-0" : "-translate-y-full"
				} md:hidden`}
			>
				<li>
					<a
						href="#home"
						className="text-white hover:text-pink-300"
						onClick={toggleMenu}
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#about"
						className="text-white hover:text-pink-300"
						onClick={toggleMenu}
					>
						About
					</a>
				</li>
				<li>
					<a
						href="#projects"
						className="text-white hover:text-pink-300"
						onClick={toggleMenu}
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href="#services"
						className="text-white hover:text-pink-300"
						onClick={toggleMenu}
					>
						Services
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className="text-white hover:text-pink-300"
						onClick={toggleMenu}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
