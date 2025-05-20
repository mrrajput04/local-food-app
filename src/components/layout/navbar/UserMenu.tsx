
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { useAuth } from "@/contexts/AuthContext";
import { User as AuthUser } from '@supabase/supabase-js';


interface UserMenuProps {
	user: AuthUser | null;
	logout: () => Promise<void>;
	authIsLoading: boolean;
}

export function UserMenu({ user, logout, authIsLoading }: UserMenuProps) {
	const { language } = useLanguage();
	const isLoggedIn = !!user;

	const handleLogout = async () => {
		await logout();
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon" disabled={authIsLoading}>
					<User className="h-5 w-5" />
					<span className="sr-only">{getTranslation("account", language)}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{isLoggedIn ? (
					<>
						<Link to="/profile">
							<DropdownMenuItem>
								{getTranslation("myProfile", language)}
							</DropdownMenuItem>
						</Link>
						<Link to="/orders">
							<DropdownMenuItem>
								{getTranslation("myOrders", language)}
							</DropdownMenuItem>
						</Link>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
							<LogOut className="h-4 w-4" />
							{getTranslation("logout", language)}
						</DropdownMenuItem>
					</>
				) : (
					<>
						<Link to="/auth/login">
							<DropdownMenuItem>
								{getTranslation("login", language)}
							</DropdownMenuItem>
						</Link>
						<Link to="/auth/signup">
							<DropdownMenuItem>
								{getTranslation("signUp", language)}
							</DropdownMenuItem>
						</Link>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}