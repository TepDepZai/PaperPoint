"use client";
import { useRouter } from "next/navigation";
import ShowPassword from "./components/Password";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const LoginPage = () => {

    const [loading, setLoading] = useState(false);
    const supabase = useSupabaseClient();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const session = useSession();
    const signIn = async (email: string, password: string) => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) {
            console.error("Lỗi đăng nhập:", error.message);
            setError(error.message);
            setLoading(false);
            return null;
        }
        setLoading(false);
    };
    const handleSignIn = () => {
        signIn(email, password);
        if (loading === false && error !== "")
            router.push("/")
    };
    useEffect(() => {
        if (session)
            router.push("/")
    }, [session])

    const loginWithGoogle = async () => {
        supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/`,
            },
        });
    }
    const [submitted, setsubmitted] = useState(false);
    const [enteredUserNull, setenteredUserNull] = useState("")
    const [enteredPwNull, setenteredPwNull] = useState("")
    const UserNull = submitted && enteredUserNull.trim() === "";
    const PwNull = submitted && enteredPwNull.trim() === "";
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold p-6">Paper Point</h1>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white w-[450px] rounded-lg shadow-lg p-8">
                    <h2 className="text-xl font-bold text-center mb-6">Sign in to your account</h2>

                    <div className="flex flex-col gap-4 mb-4">
                        <div>
                            <label htmlFor="username" className={`${UserNull ? "block mb-1 text-red-500" : "block mb-1"}`}>User Name</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="w-full border border-gray-300 p-2 rounded-md"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setenteredUserNull(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className={`${PwNull ? "block mb-1 text-red-500" : "block mb-1"}`}

                            >Password</label>
                            <ShowPassword onChange={(e) => {
                                setPassword(e.target.value);
                                setenteredPwNull(e.target.value);
                            }} />
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
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-xl"
                            onClick={() => {
                                handleSignIn();
                                setsubmitted(true);
                            }}
                        >
                            Login
                        </button>
                    </div>
                    <div className="flex items-center justify-center mt-4 mb-6">
                        <button className="bg-white border-1 text-sm hover:bg-blue-400 text-black py-2 px-3 rounded-xl flex gap-1 "
                            onClick={loginWithGoogle} disabled={loading}
                        >
                            <img src="./google.svg" alt="ảnh google" className="w-5 h-5" /> Login with google
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
