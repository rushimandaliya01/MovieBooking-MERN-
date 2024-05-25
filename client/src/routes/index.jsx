import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ProfilePage from "../pages/ProfilePage";
 import BookingsPage from "../pages/BookingsPage";
 import AddMoviePage from "../pages/AddMovie";
 

const publicRoutes = [
	{
		path: "/",
		component: <LoginPage />,
		index:true,
		name: "Login",
	},
	{
		path: "/register",
		component: <RegisterPage />,
		name: "Register",
	},
	
];

const privateRoutes = [
    {
        path: "/",
        component: <HomePage />,
		index:true,
		name: "Home",
    },
	{
		path: "/dashboard",
		component: <DashboardPage />,
		name: "Dashboard",
	},
    {
        path: "/profile",
        component: <ProfilePage />,
		name: "Profile",
     },
	  {
		path:"/Bookings",
		component: <BookingsPage />,
		name: "Bookings",
	},
	{
		path:"/AddMovie",
		component: <AddMoviePage/>,
		name: "AddMovie",
	},
	
];

export { publicRoutes, privateRoutes };
