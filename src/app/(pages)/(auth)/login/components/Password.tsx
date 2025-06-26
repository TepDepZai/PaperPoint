'use client';
import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent, useState } from "react";
interface ShowPasswordProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Password = ({ onChange }: ShowPasswordProps) => {

    return (
        <div className="relative">
            <input
                type={"password"}
                className="w-full border border-gray-300 p-2 rounded-md"
                placeholder="Enter password"
                onChange={onChange}
            />

        </div>
    );
}

export default Password;