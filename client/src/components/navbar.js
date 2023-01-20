import React from 'react';

// We import bootstrap to make our application look better.

// We import NavLink to utilize the react router.
import { NavLink } from 'react-router-dom';

// Here, we display our Navbar
export default function Navbar() {
	return (
		<div>
			<nav className="w-full z-30 top-0 py-1">
				<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
					<ul>
						<li>
							<NavLink className="nav-link" to="/login">
								login
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
