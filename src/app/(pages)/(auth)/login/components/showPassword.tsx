'use client';
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const ShowPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 p-2 rounded-md pr-10"
                placeholder="Enter password"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                tabIndex={-1}
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
    );
}

export default ShowPassword;