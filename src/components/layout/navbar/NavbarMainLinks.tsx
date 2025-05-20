
import { Link } from "react-router-dom";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

export function NavbarMainLinks() {
	const { language } = useLanguage();

	return (
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
					<NavigationMenuTrigger>{getTranslation("products", language)}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-farm-green p-6 no-underline outline-none focus:shadow-md"
										href="/products/featured"
									>
										<div className="mt-4 mb-2 text-lg font-medium text-white">
											{getTranslation("featuredProducts", language)}
										</div>
										<p className="text-sm leading-tight text-white/90">
											{getTranslation("discoverSeasonalSelections", language)}
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
										<div className="text-sm font-medium leading-none">{getTranslation("vegetables", language)}</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											{getTranslation("freshOrganicVeg", language)}
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
										<div className="text-sm font-medium leading-none">{getTranslation("fruits", language)}</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											{getTranslation("seasonalFruitsBerries", language)}
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
										<div className="text-sm font-medium leading-none">{getTranslation("dairyEggs", language)}</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											{getTranslation("freshMilkCheeseEggs", language)}
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
										<div className="text-sm font-medium leading-none">{getTranslation("meat", language)}</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											{getTranslation("pastureRaisedMeats", language)}
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
	);
}