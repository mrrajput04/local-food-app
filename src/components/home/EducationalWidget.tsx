
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EducationalWidget = () => {
	const { language } = useLanguage();

	// Rotating tips - would typically be pulled from a database
	const tips = [
		getTranslation("sustainabilityTip1", language),
		getTranslation("sustainabilityTip2", language),
		getTranslation("sustainabilityTip3", language),
	];

	// Simplified version - in a real app, these would be calculated from actual user data
	const communityImpact = {
		carbonSaved: "12.4k",
		waterSaved: "8.2M",
		localBusinessesSupported: "124"
	};

	return (
		<section className="py-16 bg-farm-softBlue/20">
			<div className="container">
				<div className="flex flex-col md:flex-row gap-8">
					{/* Educational Tip */}
					<Card className="flex-1 shadow-md border-farm-green animate-fade-in">
						<CardHeader className="bg-farm-green/10 border-b border-farm-green/20">
							<div className="flex items-center gap-2">
								<div className="p-1.5 bg-farm-green rounded-full">
									<Leaf className="h-4 w-4 text-white" />
								</div>
								<CardTitle className="text-lg">{getTranslation("didYouKnow", language)}</CardTitle>
							</div>
						</CardHeader>
						<CardContent className="pt-6">
							<p className="text-muted-foreground">{tips[0]}</p>
						</CardContent>
						<CardFooter>
							<Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
								<Link to="/education">{getTranslation("learnMore", language)} →</Link>
							</Button>
						</CardFooter>
					</Card>

					{/* Community Impact Stats */}
					<Card className="flex-1 shadow-md border-farm-vividPurple/20 animate-fade-in [animation-delay:0.2s]">
						<CardHeader className="bg-farm-vividPurple/10 border-b border-farm-vividPurple/20">
							<CardTitle className="text-lg">{getTranslation("communityImpact", language)}</CardTitle>
						</CardHeader>
						<CardContent className="pt-6">
							<div className="grid grid-cols-3 gap-2 text-center">
								<div>
									<div className="text-2xl font-bold text-farm-green">{communityImpact.carbonSaved}</div>
									<div className="text-xs text-muted-foreground">{getTranslation("kgCO2Saved", language)}</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-secondary">{communityImpact.waterSaved}</div>
									<div className="text-xs text-muted-foreground">{getTranslation("litersWaterSaved", language)}</div>
								</div>
								<div>
									<div className="text-2xl font-bold text-farm-vividPurple">{communityImpact.localBusinessesSupported}</div>
									<div className="text-xs text-muted-foreground">{getTranslation("localFarmsSupported", language)}</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="justify-center">
							<Button variant="outline" size="sm" asChild>
								<Link to="/impact">{getTranslation("trackYourImpact", language)}</Link>
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default EducationalWidget;