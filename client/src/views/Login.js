import React from 'react';

export default function Login() {
	return (
		<>
			<div
				className="absolute top-0 w-full h-full bg-gray-900"
				// style={{
				// 	backgroundImage: '',
				// 	backgroundSize: '100%',
				// 	backgroundRepeat: 'no-repeat',
				// }}
			></div>
			<div className="container mx-auto px-4 h-full">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-2/3 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
							<div className="flex-auto px-4 lg:px-10 pt-10 pb-5">
								<form>
									<div className="relative w-full mb-3">
										<label className="block uppercase text-gray-700 text-xs font-bold mb-2 pl-2" htmlFor="grid-password">
											Login
										</label>
										<input
											type="text"
											className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
											placeholder="Login"
											style={{ transition: 'all .15s ease' }}
										/>
									</div>

									<div className="relative w-full mb-3">
										<label className="block uppercase text-gray-700 text-xs font-bold mb-2 pl-2" htmlFor="grid-password">
											Password
										</label>
										<input
											type="password"
											className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
											placeholder="Password"
											style={{ transition: 'all .15s ease' }}
										/>
									</div>
									<div className="text-center mt-12">
										<button
											className="bg-gray-900 text-white active:bg-gray-700 text-xs font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
											type="button"
											style={{ transition: 'all .15s ease' }}
										>
											Sign In
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
