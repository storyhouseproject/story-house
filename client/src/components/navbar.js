import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	return (
		<>
			<nav className={(props.transparent ? 'top-0 absolute z-50 w-full' : 'relative shadow-lg bg-white') + ' flex flex-wrap items-center justify-between px-2 py-3 '}>
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
						<Link className={(props.transparent ? 'text-white' : 'text-gray-800') + ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'} to="/">
							Story House
						</Link>
						<button
							className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className={(props.transparent ? 'text-white' : 'text-gray-800') + ' fas fa-bars'}></i>
						</button>
					</div>
					<div className={'md:flex flex-grow items-center bg-white md:bg-transparent md:shadow-none' + (navbarOpen ? ' block rounded shadow-lg' : ' hidden')} id="example-navbar-warning">
						<ul className="flex flex-col md:flex-row list-none md:ml-auto">
							<li className="flex items-center">
								<Link
									to="/login"
									className={
										(props.transparent ? 'lg:text-white lg:hover:text-gray-300 text-gray-800' : 'text-gray-800 hover:text-gray-600') +
										' px-3 py-4 md:py-2 flex items-center text-xs uppercase font-bold w-full'
									}
								>
									<i className={(props.transparent ? 'lg:text-gray-300 text-gray-500' : 'text-gray-500') + ' fa fa-sign-in text-lg leading-lg '} />
									<span className="md:hidden inline-block ml-2">Login</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
