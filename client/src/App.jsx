import { useEffect } from "react";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import UserStore from "./store/LoginStore";

const App = () => {
	const { loginState, setLoginState } = UserStore();

	useEffect(() => {
		console.log("is Logged In: ", loginState);
	}, [loginState]);

	const PublicRoutes = () => {
		return (
			<Routes>
				{publicRoutes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={route.component}
							index={route.index}
						/>
					);
				})}
			</Routes>
		);
	};

	const PrivateRoutes = () => {
		return (
			<Routes>
				{privateRoutes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={route.component}
							index={route.index}
						/>
					);
				})}
			</Routes>
		);
	};

	return (
		<>
			
			<BrowserRouter>
				{loginState ? (
					<AdminLayout>
						<PrivateRoutes />
					</AdminLayout>
				) : (
					<AuthLayout>
						<PublicRoutes />
					</AuthLayout>
				)}
			</BrowserRouter>
		</>
	);
};

export default App;
