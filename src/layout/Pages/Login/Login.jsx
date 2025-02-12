import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {login} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password }
        console.log(loginInfo);

        // login
        login(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[url('/bg-img.jpeg')] bg-cover bg-center h-screen w-full">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full md:flex">
                {/* Left Section */}
                <div className="hidden md:flex items-center justify-center w-1/2 bg-gradient-to-r from-green-900 via-green-500 to-green-300 text-white p-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
                        <p className="text-lg">Connect with people and access everything you need in one place.</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Login
                    </h2>
                    <form onSubmit={handleLogin}>
                        {/* Username or Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                            />
                        </div>
                        {/* Password */}
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-2/3 right-3 transform -translate-y-2/3 text-green-700"
                            >
                                {showPassword ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    {/* Toggle Login/Register */}
                    <p className="text-center text-gray-600 mt-4">
                        Don't have an account?
                        <Link to="/register">
                            <button
                                className="text-green-600 hover:underline hover:text-green-800 focus:outline-none pl-2"
                            >
                                Register
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
