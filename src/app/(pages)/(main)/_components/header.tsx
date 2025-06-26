import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { EllipsisVertical, LogOutIcon, User } from "lucide-react";
const supabase = createClientComponentClient();
const LogOut = async () => {
    await supabase.auth.signOut();
}
const Header = () => {
    return (
        <header className="h-12 w-full bg-amber-500 border-b border-gray-400 shadow-md flex items-center justify-between px-4">
            <h1 className="text-white font-bold text-lg">My App</h1>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="p-2 rounded-full hover:bg-amber-600 text-white transition-colors duration-200">
                        <EllipsisVertical size={20} />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="gap-2">
                        <User size={16} /> Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-red-600 hover:text-red-700" onClick={() => { LogOut() }}>
                        <LogOutIcon /> Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
};

export default Header;
