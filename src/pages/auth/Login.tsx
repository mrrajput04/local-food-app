
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
// import { getTranslation } from "@/utils/translations";

export default function Login() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Mock login - In a real app, this would call an API
            console.log("Logging in with:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            toast({
                // title: getTranslation("success", language),
                // description: getTranslation("loginSuccessful", language),
            });

            navigate("/profile");
        } catch (error) {
            console.error("Login error:", error);
            toast({
                // title: getTranslation("error", language),
                // description: getTranslation("loginFailed", language),
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
                        {/* {getTranslation("login", language)} */}
                    </CardTitle>
                    <CardDescription className="text-center">
                        {/* {getTranslation("enterCredentials", language)} */}
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">
                                {/* {getTranslation("email", language)} */}
                            </Label>
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
                            <Label htmlFor="password">
                                {/* {getTranslation("password", language)} */}
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="text-right">
                            <Link to="/auth/forgot-password" className="text-sm text-farm-green hover:underline">
                                {/* {getTranslation("forgotPassword", language)} */}
                            </Link>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-full bg-farm-green hover:bg-farm-green-dark" type="submit" disabled={isLoading}>
                            {/* {isLoading ? getTranslation("loggingIn", language) : getTranslation("login", language)} */}
                        </Button>
                        <div className="mt-4 text-center text-sm">
                            {/* {getTranslation("noAccount", language)}{" "} */}
                            <Link to="/auth/signup" className="text-farm-green hover:underline">
                                {/* {getTranslation("signUp", language)} */}
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}