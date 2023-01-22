import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FooterSmall from './components/FooterSmall.js';
import Navbar from './components/Navbar.js';
import './index.css';
import General from './views/General.js';
import Login from './views/Login.js';

function App() {
	return (
		<>
			<main>
				<section className="absolute w-full h-full">
					<Navbar transparent />
					<Routes>
						<Route exact path="/" element={<General />} />
						<Route path="/login" element={<Login />} />
					</Routes>
					<FooterSmall absolute />
				</section>
			</main>
		</>
	);
}

export default App;
