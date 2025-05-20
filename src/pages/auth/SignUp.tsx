
import { useState } from "react";
import { Link } from "react-router-dom"; // useNavigate removed
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast"; // Keep toast for password mismatch
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { useAuth } from "@/contexts/AuthContext"; // Import useAuth

type UserRole = "consumer" | "producer";

export default function SignUp() {
	// navigate import removed
	const { language } = useLanguage();
	const { signUp, isLoading: authIsLoading } = useAuth(); // Use signUp and isLoading from useAuth
	const [isSubmitting, setIsSubmitting] = useState(false); // Local submitting state

	const [formData, setFormData] = useState({
		name: "", // We'll pass this in signUp options
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		location: "",
		role: "consumer" as UserRole,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleRoleChange = (value: string) => {
		setFormData((prev) => ({ ...prev, role: value as UserRole }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			toast({
				title: getTranslation("error", language),
				description: getTranslation("passwordsDoNotMatch", language),
				variant: "destructive",
			});
			return;
		}

		setIsSubmitting(true);
		// Pass additional data (name, role, etc.) in the options for Supabase signUp
		// Supabase stores this in `raw_user_meta_data`
		await signUp(formData.email, formData.password, {
			data: {
				full_name: formData.name, // Supabase convention often uses `full_name`
				phone: formData.phone,
				location: formData.location,
				role: formData.role,
			}
		});
		setIsSubmitting(false);
		// Navigation is handled by AuthContext or Supabase redirects
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-farm-yellow-light via-farm-green-light to-farm-softBlue p-4">
			<div className="w-full max-w-md">
				<Card className="border-t-4 border-farm-green shadow-xl">
					<CardHeader className="space-y-1 pt-6">
						<CardTitle className="text-2xl font-bold text-center">
							{getTranslation("createAccount", language)}
						</CardTitle>
						<CardDescription className="text-center">
							{getTranslation("enterDetailsBelow", language)}
						</CardDescription>
					</CardHeader>
					<form onSubmit={handleSubmit}>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">{getTranslation("fullName", language)}</Label>
								<Input
									id="name"
									name="name"
									placeholder={getTranslation("enterName", language)}
									required
									value={formData.name}
									onChange={handleChange}
									disabled={authIsLoading || isSubmitting}
								/>
							</div>
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
								<Label htmlFor="phone">{getTranslation("phone", language)}</Label>
								<Input
									id="phone"
									name="phone"
									type="tel"
									placeholder="+1234567890"
									value={formData.phone}
									onChange={handleChange}
									disabled={authIsLoading || isSubmitting}
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="location">{getTranslation("location", language)}</Label>
								<Input
									id="location"
									name="location"
									placeholder={getTranslation("enterLocation", language)}
									required
									value={formData.location}
									onChange={handleChange}
									disabled={authIsLoading || isSubmitting}
								/>
							</div>
							<div className="space-y-2">
								<Label>{getTranslation("role", language)}</Label>
								<RadioGroup value={formData.role} onValueChange={handleRoleChange} className="pt-1">
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="consumer" id="consumer" disabled={authIsLoading || isSubmitting} />
										<Label htmlFor="consumer" className="font-normal">{getTranslation("consumer", language)}</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="producer" id="producer" disabled={authIsLoading || isSubmitting} />
										<Label htmlFor="producer" className="font-normal">{getTranslation("producer", language)}</Label>
									</div>
								</RadioGroup>
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
							<div className="space-y-2">
								<Label htmlFor="confirmPassword">{getTranslation("confirmPassword", language)}</Label>
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									required
									value={formData.confirmPassword}
									onChange={handleChange}
									disabled={authIsLoading || isSubmitting}
								/>
							</div>
						</CardContent>
						<CardFooter className="flex flex-col">
							<Button className="w-full bg-farm-green hover:bg-farm-green-dark" type="submit" disabled={authIsLoading || isSubmitting}>
								{(authIsLoading || isSubmitting) ? getTranslation("creatingAccount", language) : getTranslation("signUp", language)}
							</Button>
							<div className="mt-4 text-center text-sm">
								{getTranslation("alreadyHaveAccount", language)}{" "}
								<Link to="/auth/login" className="text-farm-green hover:underline">
									{getTranslation("login", language)}
								</Link>
							</div>
						</CardFooter>
					</form>
				</Card>
			</div>
		</div>
	);
}