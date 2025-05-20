
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguageSelector } from "@/components/language/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { NavbarLogo } from "./navbar/NavbarLogo";
import { NavbarMainLinks } from "./navbar/NavbarMainLinks";
import { SearchFeature } from "./navbar/SearchFeature";
import { UserMenu } from "./navbar/UserMenu";
import { CartIcon } from "./navbar/CartIcon";
import { DesktopSignInButton } from "./navbar/DesktopSignInButton";

export default function Navbar() {
	const { language } = useLanguage();
	const { user, logout, isLoading: authIsLoading } = useAuth();

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-2">
					<NavbarLogo />
				</div>

				<NavbarMainLinks />

				<div className="flex items-center gap-2">
					<div className="mr-2">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline" size="sm" className="flex items-center gap-2 border-farm-green text-farm-green">
									<Globe className="h-4 w-4" />
									<span className="hidden sm:inline capitalize">
										{language === "english" ? "English" : language}
									</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<LanguageSelector />
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<SearchFeature />
					<UserMenu user={user} logout={logout} authIsLoading={authIsLoading} />
					<CartIcon />
					<DesktopSignInButton user={user} authIsLoading={authIsLoading} />
				</div>
			</div>
		</header>
	);
}