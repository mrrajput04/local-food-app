
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SustainableFarmingGuide from "@/components/education/SustainableFarmingGuide";
import SeasonalEatingCalendar from "@/components/education/SeasonalEatingCalendar";
import FarmImpactStories from "@/components/education/FarmImpactStories";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Education = () => {
	const { language } = useLanguage();

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			<main className="flex-1 bg-background">
				<section className="py-10 bg-farm-softBlue/30">
					<div className="container">
						<h1 className="text-4xl font-bold mb-6 text-center">
							{getTranslation("educationTitle", language)}
						</h1>
						<p className="text-lg text-center max-w-3xl mx-auto mb-8">
							{getTranslation("educationDescription", language)}
						</p>
					</div>
				</section>

				<section className="py-12">
					<div className="container">
						<Tabs defaultValue="sustainable" className="w-full">
							<TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
								<TabsTrigger value="sustainable" className="text-base">{getTranslation("sustainableFarming", language)}</TabsTrigger>
								<TabsTrigger value="seasonal" className="text-base">{getTranslation("seasonalEating", language)}</TabsTrigger>
								<TabsTrigger value="impact" className="text-base">{getTranslation("farmImpactStories", language)}</TabsTrigger>
							</TabsList>
							<TabsContent value="sustainable" className="mt-6">
								<SustainableFarmingGuide />
							</TabsContent>
							<TabsContent value="seasonal" className="mt-6">
								<SeasonalEatingCalendar />
							</TabsContent>
							<TabsContent value="impact" className="mt-6">
								<FarmImpactStories />
							</TabsContent>
						</Tabs>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Education;