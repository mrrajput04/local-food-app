
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SeasonalEatingCalendar = () => {
	const { language } = useLanguage();
	const [currentSeason, setCurrentSeason] = useState<'spring' | 'summer' | 'fall' | 'winter'>('spring');

	const seasons = [
		{ id: 'spring', name: getTranslation("spring", language) },
		{ id: 'summer', name: getTranslation("summer", language) },
		{ id: 'fall', name: getTranslation("fall", language) },
		{ id: 'winter', name: getTranslation("winter", language) }
	];

	// Placeholder data - would be dynamic in a real application
	const seasonalProduce = {
		spring: [
			{ name: getTranslation("asparagus", language), icon: "🥬" },
			{ name: getTranslation("peas", language), icon: "🌿" },
			{ name: getTranslation("radishes", language), icon: "🍅" },
			{ name: getTranslation("spinach", language), icon: "🍃" },
			{ name: getTranslation("strawberries", language), icon: "🍓" },
			{ name: getTranslation("artichokes", language), icon: "🌱" }
		],
		summer: [
			{ name: getTranslation("tomatoes", language), icon: "🍅" },
			{ name: getTranslation("cucumbers", language), icon: "🥒" },
			{ name: getTranslation("zucchini", language), icon: "🍆" },
			{ name: getTranslation("peaches", language), icon: "🍑" },
			{ name: getTranslation("berries", language), icon: "🫐" },
			{ name: getTranslation("corn", language), icon: "🌽" }
		],
		fall: [
			{ name: getTranslation("apples", language), icon: "🍎" },
			{ name: getTranslation("pumpkins", language), icon: "🎃" },
			{ name: getTranslation("squash", language), icon: "🥗" },
			{ name: getTranslation("pears", language), icon: "🍐" },
			{ name: getTranslation("beets", language), icon: "🫒" },
			{ name: getTranslation("brusselsSprouts", language), icon: "🥦" }
		],
		winter: [
			{ name: getTranslation("kale", language), icon: "🥬" },
			{ name: getTranslation("citrus", language), icon: "🍊" },
			{ name: getTranslation("potatoes", language), icon: "🥔" },
			{ name: getTranslation("onions", language), icon: "🧅" },
			{ name: getTranslation("carrots", language), icon: "🥕" },
			{ name: getTranslation("cabbage", language), icon: "🥬" }
		]
	};

	const seasonColors = {
		spring: "bg-farm-green/20 border-farm-green",
		summer: "bg-farm-yellow/20 border-farm-yellow",
		fall: "bg-farm-earth-light/20 border-farm-earth",
		winter: "bg-farm-softBlue/30 border-farm-softBlue"
	};

	return (
		<div className="space-y-8 animate-fade-in">
			<Card className="shadow-md overflow-hidden">
				<CardHeader className={`${seasonColors[currentSeason]}`}>
					<CardTitle>{getTranslation("seasonalEatingGuide", language)}</CardTitle>
					<CardDescription className="text-foreground/80">
						{getTranslation("seasonalEatingDescription", language)}
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-6">
					<div className="flex flex-wrap gap-2 mb-6">
						{seasons.map((season) => (
							<Button
								key={season.id}
								variant={currentSeason === season.id ? "default" : "outline"}
								onClick={() => setCurrentSeason(season.id as 'spring' | 'summer' | 'fall' | 'winter')}
								className="min-w-20"
							>
								{season.name}
							</Button>
						))}
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
						{seasonalProduce[currentSeason].map((produce, idx) => (
							<div
								key={idx}
								className={`rounded-lg ${seasonColors[currentSeason]} flex flex-col items-center p-4 text-center transition-all`}
							>
								<div className="text-4xl mb-2">{produce.icon}</div>
								<span className="font-medium">{produce.name}</span>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card className="shadow-md h-full">
					<CardHeader>
						<CardTitle>{getTranslation("whyEatSeasonally", language)}</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2 list-disc pl-5">
							<li>{getTranslation("seasonalBenefit1", language)}</li>
							<li>{getTranslation("seasonalBenefit2", language)}</li>
							<li>{getTranslation("seasonalBenefit3", language)}</li>
							<li>{getTranslation("seasonalBenefit4", language)}</li>
						</ul>
					</CardContent>
				</Card>

				<Card className="shadow-md h-full overflow-hidden">
					<div className="w-full">
						<AspectRatio ratio={16 / 9}>
							<div className="bg-[url('/placeholder.svg')] bg-cover bg-center w-full h-full opacity-90"></div>
						</AspectRatio>
					</div>
					<CardContent className="py-4">
						<h3 className="font-semibold text-lg mb-2">{getTranslation("seasonalRecipe", language)}</h3>
						<p className="text-sm text-muted-foreground">{getTranslation("seasonalRecipeDescription", language)}</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default SeasonalEatingCalendar;