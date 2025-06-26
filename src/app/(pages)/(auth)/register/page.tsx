"use client";
import { useState } from "react";
import { useRouter } from "next/dist/client/components/navigation";
import Password from "../login/components/Password";

const RegisterPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [enteredUserNull, setenteredUserNull] = useState("")
    const [enteredPwNull, setenteredPwNull] = useState("")
    const [enteredCfPwNull, setenteredCfPwNull] = useState("")
    const [submitted, setsubmitted] = useState(false);


    const checkCfPw = password.trim() === confirmPassword.trim();
    const router = useRouter();
    const UserNull = submitted && enteredUserNull.trim() === "";
    const PwNull = submitted && enteredPwNull.trim() === "";
    const CfPwNull = submitted && enteredCfPwNull.trim() === "";

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold p-6">Paper Point</h1>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white w-[450px] rounded-lg shadow-lg p-8">
                    <h2 className="text-xl font-bold text-center mb-6">Create your account</h2>

                    <div className="flex flex-col gap-4 mb-4">
                        <div>
                            <label htmlFor="username" className={`${UserNull ? "block mb-1 text-red-500" : "block mb-1"}`}>User Name</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="w-full border border-gray-300 p-2 rounded-md"
                                onChange={(e) => setenteredUserNull(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className={`${PwNull ? "block mb-1 text-red-500" : "block mb-1"}`}>Password</label>
                            <Password onChange={(e) => {
                                setPassword(e.target.value)
                                setenteredPwNull(e.target.value)
                            }} />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className={`${CfPwNull || (!checkCfPw && submitted) ? "block mb-1 text-red-500" : "block mb-1"}`}>Confirm Password</label>
                            <Password onChange={(e) => {
                                setConfirmPassword(e.target.value)
                                setenteredCfPwNull(e.target.value)
                            }} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-xl"
                            onClick={() => setsubmitted(true)}
                        >
                            Register
                        </button>
                    </div>
                    <p className="text-center mt-6 text-sm">
                        Already have an account?{" "}
                        <span className="text-blue-500 cursor-pointer hover:underline"
                            onClick={() => router.push("/login")}>
                            Sign In
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
