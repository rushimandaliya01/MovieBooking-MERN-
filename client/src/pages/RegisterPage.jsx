import axios from "axios";
import { useState } from "react";
import "./RegisterPage.css";

function RegisterPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/v1/auth/register", formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="register-container text-black">
            <h1 className="text-center ">Register</h1>
            <div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
