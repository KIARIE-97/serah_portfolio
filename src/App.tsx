import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home";
import AboutMe from "./Components/About";
import Projects from "./Components/projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

// Create a layout wrapper to include the Navbar
const Layout = () => (
	<>
		<Navbar />
		<Outlet /> {/* This will render the matched route */}
		<Footer />
	</>
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />, // Wrap routes with Layout to include Navbar
		children: [
			{ path: "", element: <Hero /> }, // Default route
			{ path: "about", element: <AboutMe /> },
			{ path: "projects", element: <Projects /> },
			{ path: "contact", element: <Contact /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
