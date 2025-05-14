
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
// import { getTranslation } from "@/utils/translations";

type UserRole = "consumer" | "producer";

export default function SignUp() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
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

        // Simple validation
        if (formData.password !== formData.confirmPassword) {
            toast({
                // title: getTranslation("error", language),
                // description: getTranslation("passwordsDoNotMatch", language),
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        try {
            // Mock signup - In a real app, this would call an API
            console.log("Signing up with:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            toast({
                // title: getTranslation("success", language),
                // description: getTranslation("accountCreated", language),
            });

            navigate("/auth/login");
        } catch (error) {
            console.error("Signup error:", error);
            toast({
                // title: getTranslation("error", language),
                // description: getTranslation("signupFailed", language),
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container max-w-md py-10">
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        {/* {getTranslation("createAccount", language)} */}
                    </CardTitle>
                    <CardDescription className="text-center">
                        {/* {getTranslation("enterDetailsBelow", language)} */}
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            {/* <Label htmlFor="name">{getTranslation("fullName", language)}</Label> */}
                            <Input
                                id="name"
                                name="name"
                                // placeholder={getTranslation("enterName", language)}
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            {/* <Label htmlFor="email">{getTranslation("email", language)}</Label> */}
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="email@example.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            {/* <Label htmlFor="phone">{getTranslation("phone", language)}</Label> */}
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="+1234567890"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            {/* <Label htmlFor="location">{getTranslation("location", language)}</Label> */}
                            <Input
                                id="location"
                                name="location"
                                // placeholder={getTranslation("enterLocation", language)}
                                required
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            {/* <Label>{getTranslation("role", language)}</Label> */}
                            <RadioGroup value={formData.role} onValueChange={handleRoleChange}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="consumer" id="consumer" />
                                    {/* <Label htmlFor="consumer">{getTranslation("consumer", language)}</Label> */}
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="producer" id="producer" />
                                    {/* <Label htmlFor="producer">{getTranslation("producer", language)}</Label> */}
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="space-y-2">
                            {/* <Label htmlFor="password">{getTranslation("password", language)}</Label> */}
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            {/* <Label htmlFor="confirmPassword">{getTranslation("confirmPassword", language)}</Label> */}
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-full bg-farm-green hover:bg-farm-green-dark" type="submit" disabled={isLoading}>
                            {/* {isLoading ? getTranslation("creatingAccount", language) : getTranslation("signUp", language)} */}
                        </Button>
                        <div className="mt-4 text-center text-sm">
                            {/* {getTranslation("alreadyHaveAccount", language)}{" "} */}
                            <Link to="/auth/login" className="text-farm-green hover:underline">
                                {/* {getTranslation("login", language)} */}
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}