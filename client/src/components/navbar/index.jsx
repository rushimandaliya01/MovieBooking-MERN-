import { Navbar, Nav } from "react-bootstrap";
import { privateRoutes } from "../../routes";
import { Link } from "react-router-dom";
import UserStore from "../../store/LoginStore";

const NavbarComponent = () => {
	const { logout } = UserStore();
	return (
		<Navbar className="bg-gray-900 navbar-expand text-white flex justify-center space-x-5 ">
			<Nav >
				{privateRoutes.map((route, index) => {
					return (
						<Link key={index} to={route.path} className="nav-link  p-2 hover:text-red-600 text-white">
							{route.name}
						</Link>
					);
				})}
				<button className="btn btn-danger ml-5" onClick={() => logout()}>Logout</button>
			</Nav>
		</Navbar>
	);
};

export default NavbarComponent;
