import React from 'react';
import { Route, Routes } from 'react-router-dom';
import General from './components/general';
import Login from './components/login';
import Navbar from './components/navbar';
import './index.css';

function App() {
	return (
		<div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
			<Navbar />
			<Routes>
				<Route exact path="/" element={<General />} />
				<Route path="/login" element={<Login />} />
				{/* <Route path="/edit/:id" element={<Edit />} />
				<Route path="/create" element={<Create />} /> */}
			</Routes>
		</div>
		// <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
		// 	<nav id="header" >
		// 		<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

		// 		</div>
		// 	</nav>
		// 	<section class="bg-white py-8">
		// 		<div class="container py-8 px-6 mx-auto">
		// 		</div>
		// 	</section>
		// 	<footer class="container mx-auto bg-white py-8 border-t border-gray-400">
		// 		<div class="container flex px-3 py-8 ">
		// 			<div class="w-full mx-auto flex flex-wrap">
		// 				<div class="flex w-full lg:w-1/2 ">
		// 					<div class="px-3 md:px-0">
		// 						<h3 class="font-bold text-gray-900">About</h3>
		// 						<p class="py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.</p>
		// 					</div>
		// 				</div>
		// 				<div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
		// 					<div class="px-3 md:px-0">
		// 						<h3 class="font-bold text-gray-900">Social</h3>
		// 						<ul class="list-reset items-center pt-3">
		// 							<li>
		// 								<a class="inline-block no-underline hover:text-black hover:underline py-1" href="#">
		// 									Add social links
		// 								</a>
		// 							</li>
		// 						</ul>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</footer>
		// </div>
	);
}

export default App;
