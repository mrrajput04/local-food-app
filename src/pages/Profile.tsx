import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Package } from "lucide-react";

type UserRole = "consumer" | "producer";

// Mock user data - in a real app, this would come from an API or state management
const mockUserData = {
    id: "user-123",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    location: "Bangalore, Karnataka",
    role: "consumer" as UserRole,
    imageUrl: "",
};

export default function Profile() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(mockUserData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRoleChange = (value: string) => {
        setFormData((prev) => ({ ...prev, role: value as UserRole }));
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Mock API call to update profile
            console.log("Updating profile with:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            toast({
                title: getTranslation("success", language),
                description: getTranslation("profileUpdated", language),
            });
        } catch (error) {
            console.error("Profile update error:", error);
            toast({
                title: getTranslation("error", language),
                description: getTranslation("updateFailed", language),
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        // Mock logout - in a real app, this would clear authentication state
        toast({
            title: getTranslation("success", language),
            description: getTranslation("logoutSuccessful", language),
        });
        navigate("/");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 py-10">
                <div className="container max-w-4xl">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold">{getTranslation("myProfile", language)}</h1>
                        <Button variant="outline" onClick={handleLogout}>
                            {getTranslation("logout", language)}
                        </Button>
                    </div>

                    <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                        <div className="space-y-4">
                            <Card className="h-fit">
                                <CardContent className="pt-6 flex flex-col items-center">
                                    <Avatar className="w-32 h-32 mb-4">
                                        {formData.imageUrl ? (
                                            <AvatarImage src={formData.imageUrl} alt={formData.name} />
                                        ) : (
                                            <AvatarFallback className="text-3xl bg-farm-green/20 text-farm-green">
                                                {formData.name.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        )}
                                    </Avatar>
                                    <div className="text-center">
                                        <h2 className="text-xl font-semibold">{formData.name}</h2>
                                        <p className="text-muted-foreground">{formData.role === "consumer" ?
                                            getTranslation("consumer", language) : getTranslation("producer", language)}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{formData.location}</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="pb-3">
                                    <CardTitle>{getTranslation("account", language)}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <Link
                                        to="/orders"
                                        className="flex items-center gap-3 p-2 hover:bg-muted rounded-md transition-colors cursor-pointer"
                                    >
                                        <Package size={18} />
                                        <span>{getTranslation("myOrders", language)}</span>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>{getTranslation("personalInformation", language)}</CardTitle>
                                <CardDescription>{getTranslation("updateProfileInfo", language)}</CardDescription>
                            </CardHeader>
                            <form onSubmit={handleSave}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{getTranslation("fullName", language)}</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{getTranslation("email", language)}</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">{getTranslation("phone", language)}</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location">{getTranslation("location", language)}</Label>
                                        <Input
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <Separator />
                                    <div className="space-y-2">
                                        <Label>{getTranslation("role", language)}</Label>
                                        <RadioGroup value={formData.role} onValueChange={handleRoleChange}>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="consumer" id="profile-consumer" />
                                                <Label htmlFor="profile-consumer">{getTranslation("consumer", language)}</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="producer" id="profile-producer" />
                                                <Label htmlFor="profile-producer">{getTranslation("producer", language)}</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="bg-farm-green hover:bg-farm-green-dark" type="submit" disabled={isLoading}>
                                        {isLoading ? getTranslation("saving", language) : getTranslation("saveChanges", language)}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}