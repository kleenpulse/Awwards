import ReactLenis from "lenis/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TheRealm from "./components/TheRealm";

function App() {
	return (
		<ReactLenis root>
			<main className="relative min-h-screen w-screen overflow-x-hidden  ">
				<Navbar />
				<Hero />
				<About />
				<Features />
				<TheRealm />
				<Contact />
				<Footer />
			</main>
		</ReactLenis>
	);
}

export default App;
