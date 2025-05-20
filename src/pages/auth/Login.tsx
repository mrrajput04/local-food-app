
import { useState } from "react";
import { Link } from "react-router-dom"; // useNavigate removed as navigation is handled by AuthContext
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// toast import removed as it's handled by AuthContext
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { useAuth } from "@/contexts/AuthContext"; // Import useAuth

export default function Login() {
	// navigate import removed
	const { language } = useLanguage();
	const { login, isLoading: authIsLoading } = useAuth(); // Use login and isLoading from useAuth
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false); // Local submitting state

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		await login(formData.email, formData.password);
		setIsSubmitting(false);
		// Navigation is handled by AuthContext's onAuthStateChange
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-farm-yellow-light via-farm-green-light to-farm-softBlue p-4">
			<div className="w-full max-w-md">
				<Card className="border-t-4 border-farm-green shadow-xl">
					<CardHeader className="space-y-1 pt-6">
						<CardTitle className="text-2xl font-bold text-center">
							{getTranslation("login", language)}
						</CardTitle>
						<CardDescription className="text-center">
							{getTranslation("enterCredentials", language)}
						</CardDescription>
					</CardHeader>
					<form onSubmit={handleSubmit}>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="email">{getTranslation("email", language)}</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="email@example.com"
									required
									value={formData.email}
									onChange={handleChange}
									disabled={authIsLoading || isSubmitting}
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">{getTranslation("password", language)}</Label>
								<Input
									id="password"
									name="password"
									type="password"
									required
									value={formData.password}
									onChange={handleChange}
									disabled={authIsLoading || isSubmitting}
								/>
							</div>
							<div className="text-right">
								<Link to="/auth/forgot-password" className="text-sm text-farm-green hover:underline">
									{getTranslation("forgotPassword", language)}
								</Link>
							</div>
						</CardContent>
						<CardFooter className="flex flex-col">
							<Button className="w-full bg-farm-green hover:bg-farm-green-dark" type="submit" disabled={authIsLoading || isSubmitting}>
								{(authIsLoading || isSubmitting) ? getTranslation("loggingIn", language) : getTranslation("login", language)}
							</Button>
							<div className="mt-4 text-center text-sm">
								{getTranslation("noAccount", language)}{" "}
								<Link to="/auth/signup" className="text-farm-green hover:underline">
									{getTranslation("signUp", language)}
								</Link>
							</div>
						</CardFooter>
					</form>
				</Card>
			</div>
		</div>
	);
}
