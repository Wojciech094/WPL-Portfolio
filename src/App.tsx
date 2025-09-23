import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/projects/ProjectDetail';

export default function App() {
	return (
		<div className='app-bg min-h-screen text-slate-100'>
			<Nav />
			<main id='top'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Hero />
								<Projects />
								<Skills />
								<Experience />
								<About />
								<Contact />
							</>
						}
					/>
					<Route
						path='/projects/:slug'
						element={<ProjectDetail />}
					/>
				</Routes>
			</main>
			<Footer />
		</div>
	);
}
