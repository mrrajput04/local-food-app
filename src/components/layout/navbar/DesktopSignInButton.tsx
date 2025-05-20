
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { User as AuthUser } from '@supabase/supabase-js';

interface DesktopSignInButtonProps {
	user: AuthUser | null;
	authIsLoading: boolean;
}

export function DesktopSignInButton({ user, authIsLoading }: DesktopSignInButtonProps) {
	const { language } = useLanguage();
	const isLoggedIn = !!user;

	if (!isLoggedIn && !authIsLoading) {
		return (
			<Link to="/auth/login">
				<Button className="hidden md:flex bg-farm-green hover:bg-farm-green-dark">
					{getTranslation("signIn", language)}
				</Button>
			</Link>
		);
	}
	return null;
}