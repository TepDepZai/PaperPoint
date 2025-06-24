"use client";
import { useRouter } from "next/navigation";
import ShowPassword from "./components/showPassword";

const LoginPage = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold p-6">Paper Point</h1>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white w-[450px] rounded-lg shadow-lg p-8">
                    <h2 className="text-xl font-bold text-center mb-6">Sign in to your account</h2>

                    <div className="flex flex-col gap-4 mb-4">
                        <div>
                            <label htmlFor="username" className="block mb-1">User Name</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="w-full border border-gray-300 p-2 rounded-md"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-1">Password</label>
                            <ShowPassword />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm mb-6">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" name="rememberMe" />
                            Remember Me
                        </label>
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-xl">
                            Login
                        </button>
                    </div>
                    <p className="text-center mt-6 text-sm">
                        Don't have an account?{" "}
                        <span className="text-blue-500 cursor-pointer hover:underline"
                            onClick={() => router.push('/register')}>
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
