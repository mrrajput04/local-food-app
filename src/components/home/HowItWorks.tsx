import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Box, CalendarClock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

export default function HowItWorks() {
	const { language } = useLanguage();

	return (
		<section className="py-16 bg-background"> {/* Changed to bg-background */}
			<div className="container">
				<h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
						<div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 animate-bounce-subtle">
							<Search className="h-8 w-8" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Browse Local Farms</h3>
						<p className="text-muted-foreground">Discover local farms and their fresh, seasonal offerings in your area.</p>
					</div>

					<div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
						<div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mb-4 animate-bounce-subtle [animation-delay:0.1s]">
							<Box className="h-8 w-8" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Choose Your Products</h3>
						<p className="text-muted-foreground">Select individual items or subscribe to regular farm boxes for consistent fresh produce.</p>
					</div>

					<div className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
						<div className="w-16 h-16 rounded-full bg-farm-vividPurple text-white flex items-center justify-center mb-4 animate-bounce-subtle [animation-delay:0.2s]">
							<CalendarClock className="h-8 w-8" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Schedule Pickup</h3>
						<p className="text-muted-foreground">Choose a convenient location and time to collect your farm-fresh products.</p>
					</div>
				</div>

				<div className="mt-12 text-center">
					<Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
						<Link to="/how-it-works">Learn More</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}