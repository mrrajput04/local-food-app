
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { LanguageSelector } from "@/components/language/LanguageSelector";

export default function Hero() {
	const [searchLocation, setSearchLocation] = useState("");
	const { language } = useLanguage();

	return (
		<section className="relative bg-gradient-to-br from-primary via-farm-green to-farm-green-light text-primary-foreground overflow-hidden">
			<div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
			<div className="container relative z-10 py-20 md:py-32 flex flex-col items-center text-center">
				<div className="absolute top-4 right-4">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="sm" className="text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center gap-2">
								<Globe className="h-4 w-4" />
								<span className="capitalize">
									{language === "english" ? "English" : language}
								</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<LanguageSelector />
						</DropdownMenuContent>
					</DropdownMenu>
				</div>

				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl animate-fade-in">
					Fresh From Local Farms To Your Table
				</h1>
				<p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90 animate-fade-in [animation-delay:0.2s]">
					Connect directly with small local farms and enjoy fresh, seasonal produce, dairy, and more with convenient subscriptions and pickup options.
				</p>
				<div className="w-full max-w-md relative animate-fade-in [animation-delay:0.4s]">
					<Input
						type="text"
						placeholder="Enter your location"
						className="w-full pl-10 pr-32 py-6 text-foreground" // Input text should be foreground
						value={searchLocation}
						onChange={(e) => setSearchLocation(e.target.value)}
					/>
					<MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
					<Button className="absolute right-1 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-200 ease-in-out hover:scale-105">
						<Search className="mr-2 h-4 w-4" />
						Find Farms
					</Button>
				</div>
				<div className="flex flex-wrap gap-4 mt-8 justify-center animate-fade-in [animation-delay:0.6s]">
					<div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
						<div className="h-3 w-3 rounded-full bg-farm-green mr-2"></div>
						<span className="text-sm">100+ Local Farms</span>
					</div>
					<div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
						<div className="h-3 w-3 rounded-full bg-farm-yellow mr-2"></div>
						<span className="text-sm">Seasonal Produce</span>
					</div>
					<div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
						<div className="h-3 w-3 rounded-full bg-farm-earth mr-2"></div>
						<span className="text-sm">Sustainable Practices</span>
					</div>
				</div>
			</div>
		</section>
	);
}
