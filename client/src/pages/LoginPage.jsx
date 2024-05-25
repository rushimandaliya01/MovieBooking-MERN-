import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserStore from "../store/LoginStore";
import "./LoginPage.css"; // Import custom CSS file for additional styling
import { Link } from "react-router-dom";
function LoginPage() {
    const { loginData, setLoginState } = UserStore();
    const [data, setData] = useState({ email: "", password: "" });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/v1/auth/login", data);
            console.log(response.data);
            loginData(response.data);
            setLoginState(true);
            toast.success("Login successful!"); 
            alert("Login successful!"); 
                

        } catch (error) {
            console.error(error);
            // alert("Please enter valid email address & password.");
            var tag = document.createElement("p");
            var text = document.createTextNode("Your Email or Password is invalid! Try Again.");
            tag.appendChild(text);
            var element = document.getElementById("invalid");
            element.appendChild(tag);
        }
    };

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="container" >
            <ToastContainer /> {/* Add ToastContainer for toast notifications */}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card login-card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4 text-sky-600 text-5xl " >Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="form-group text-white">
                                    <label htmlFor="email ">Email</label>
                                    <input
                                        className="form-control"
                                        onChange={handleChange}
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                <div className="form-group text-white">
                                    <label htmlFor="password ">Password</label>
                                    <input
                                        className="form-control"
                                        onChange={handleChange}
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter Your password "
                                    />
                                </div>
                                <div className="m-2 text-red-500" id="invalid">
                                    {/* <p className="text-red-500 text-bold">Your Email or Password is invalid! Try Again.</p> */}
                                </div>
                                <div className="form-group flex justify-center ">
                                    <button className="btn bg-blue-500 text-white w-100 hover:bg-blue-700" type="submit">Login</button>
                                </div>
                                <p className="text-center text-white">Don't have an account? <Link to="/register">Sign Up</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
