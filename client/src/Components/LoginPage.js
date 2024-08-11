import './Auth.css'; // Include the updated CSS
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../auth';
// Import toast from the appropriate library (e.g., react-toastify)
import { toast } from 'react-toastify';

const Login = () => {
    const { API, storeTokenInLS } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const URL = `${API}/api/auth/login`; // Fixed template literal usage
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const res_data = await response.json();
            if (response.ok) {
                storeTokenInLS(res_data.token);
                toast.success("Login Successful"); // Fixed toast usage
                setUser({ email: '', password: '' });
                navigate("/");
            } else {
              toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message); // Fixed console.log
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2 className="auth-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Added name attribute
                            value={user.email}
                            autoComplete="off"
                            onChange={handleInput}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password" // Added name attribute
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInput}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn-primary">Login</button>
                </form>
                <div className="auth-link">
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
