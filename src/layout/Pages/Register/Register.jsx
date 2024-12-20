import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {createuser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // register user
        createuser(email,password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
        })

        // Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        if (!passwordRegex.test(password)) {
            setErrorMessage("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.");
            return;
        }

        const RegisterInfo = { email, password, name };
        console.log(RegisterInfo);
        setErrorMessage(""); // Clear error message on successful validation
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full md:flex">
                {/* Left Section */}
                <div className="hidden md:flex items-center justify-center w-1/2 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white p-8">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
                        <p className="text-lg">Connect with people and access everything you need in one place.</p>
                        <img
                            src="/login-reg.-img.jpeg"
                            alt="Welcome illustration"
                            className="mt-6 rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Register
                    </h2>
                    <form onSubmit={handleRegister}>
                        {/* Username */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your Name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                            />
                        </div>
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
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
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-2/3 right-3 transform -translate-y-2/3 text-pink-700"
                            >
                                {showPassword ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>
                        {/* Confirm Password */}
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute top-2/3 right-3 transform -translate-y-2/3 text-pink-700"
                            >
                                {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                            </button>
                        </div>
                        {/* Error Message */}
                        {errorMessage && (
                            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
                        )}
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                    {/* Toggle Login/Register */}
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?
                        <Link to="/login">
                            <button
                                className="text-pink-600 hover:underline hover:text-pink-800 focus:outline-none pl-2"
                            >
                                Login
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
