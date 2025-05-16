
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Droplet, Truck, Earth } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

const ImpactTracker = () => {
	const { language } = useLanguage();

	// This would connect to real data in a production environment
	const userImpact = {
		carbonSaved: 87,
		waterSaved: 1240,
		foodMilesSaved: 430,
		localFarmsSupported: 6
	};

	return (
		<Card className="shadow-md border border-farm-green/20 animate-fade-in">
			<CardHeader className="bg-farm-green/10">
				<CardTitle>{getTranslation("yourImpact", language)}</CardTitle>
				<CardDescription>{getTranslation("impactDescription", language)}</CardDescription>
			</CardHeader>
			<CardContent className="pt-6">
				<div className="space-y-8">
					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="p-2 rounded-full bg-farm-green/20">
									<Leaf className="h-5 w-5 text-farm-green" />
								</div>
								<span className="font-medium">{getTranslation("carbonFootprint", language)}</span>
							</div>
							<span className="font-bold">{userImpact.carbonSaved} kg CO<sub>2</sub></span>
						</div>
						<Progress value={65} className="h-2" />
						<p className="text-sm text-muted-foreground">{getTranslation("carbonFootprintDescription", language)}</p>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="p-2 rounded-full bg-secondary/20">
									<Droplet className="h-5 w-5 text-secondary" />
								</div>
								<span className="font-medium">{getTranslation("waterSaved", language)}</span>
							</div>
							<span className="font-bold">{userImpact.waterSaved} L</span>
						</div>
						<Progress value={78} className="h-2" />
						<p className="text-sm text-muted-foreground">{getTranslation("waterSavedDescription", language)}</p>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="p-2 rounded-full bg-farm-yellow/20">
									<Truck className="h-5 w-5 text-farm-yellow-dark" />
								</div>
								<span className="font-medium">{getTranslation("foodMilesSaved", language)}</span>
							</div>
							<span className="font-bold">{userImpact.foodMilesSaved} km</span>
						</div>
						<Progress value={52} className="h-2" />
						<p className="text-sm text-muted-foreground">{getTranslation("foodMilesSavedDescription", language)}</p>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="p-2 rounded-full bg-farm-vividPurple/20">
									<Earth className="h-5 w-5 text-farm-vividPurple" />
								</div>
								<span className="font-medium">{getTranslation("localFarmsSupported", language)}</span>
							</div>
							<span className="font-bold">{userImpact.localFarmsSupported} {getTranslation("farms", language)}</span>
						</div>
						<Progress value={40} className="h-2" />
						<p className="text-sm text-muted-foreground">{getTranslation("localFarmsSupportedDescription", language)}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ImpactTracker;