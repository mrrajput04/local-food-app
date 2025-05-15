import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { LanguageSelector } from "@/components/language/LanguageSelector";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

export default function Navbar() {
    const [searchVisible, setSearchVisible] = useState(false);
    const { language } = useLanguage();

    // Mock authentication state - in a real app, this would come from auth context
    const isLoggedIn = false;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-farm-green flex items-center justify-center">
                            <span className="text-white font-bold">FC</span>
                        </div>
                        <span className="font-bold text-xl text-farm-green-dark">Local Food Connector</span>
                    </Link>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link to="/farms">
                                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                    {getTranslation("farms", language)}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-farm-green p-6 no-underline outline-none focus:shadow-md"
                                                href="/products/featured"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-medium text-white">
                                                    Featured Products
                                                </div>
                                                <p className="text-sm leading-tight text-white/90">
                                                    Discover our seasonal selections and local favorites
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                href="/products/category/vegetables"
                                            >
                                                <div className="text-sm font-medium leading-none">Vegetables</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Fresh, organic, locally grown vegetables
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                href="/products/category/fruits"
                                            >
                                                <div className="text-sm font-medium leading-none">Fruits</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Seasonal fruits and berries
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                href="/products/category/dairy"
                                            >
                                                <div className="text-sm font-medium leading-none">Dairy & Eggs</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Fresh milk, cheese, and free-range eggs
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                href="/products/category/meat"
                                            >
                                                <div className="text-sm font-medium leading-none">Meat</div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Pasture-raised, ethically sourced meats
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link to="/subscriptions">
                                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                    {getTranslation("subscriptionBoxes", language)}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link to="/pickup">
                                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                    {getTranslation("pickupLocations", language)}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

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

                    {searchVisible ? (
                        <div className="relative w-full md:w-auto">
                            <Input
                                type="search"
                                placeholder={getTranslation("searchPlaceholder", language)}
                                className="w-full md:w-[200px] pr-8"
                                autoFocus
                                onBlur={() => setSearchVisible(false)}
                            />
                            <Search className="absolute right-2 top-2 h-4 w-4 text-muted-foreground" />
                        </div>
                    ) : (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSearchVisible(true)}
                        >
                            <Search className="h-5 w-5" />
                            <span className="sr-only">
                                {getTranslation("search", language)}
                            </span>
                        </Button>
                    )}

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <User className="h-5 w-5" />
                                <span className="sr-only">
                                    {getTranslation("account", language)}
                                </span>
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
                                    <Link to="/">
                                        <DropdownMenuItem>
                                            {getTranslation("logout", language)}
                                        </DropdownMenuItem>
                                    </Link>
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

                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="sr-only">
                            {getTranslation("cart", language)}
                        </span>
                    </Button>

                    {!isLoggedIn && (
                        <Link to="/auth/login">
                            <Button className="hidden md:flex bg-farm-green hover:bg-farm-green-dark">
                                {getTranslation("signIn", language)}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}