
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Button } from "@/components/ui/button";

const FarmImpactStories = () => {
	const { language } = useLanguage();

	const impactStories = [
		{
			id: 1,
			farmName: "Green Valley Organics",
			title: getTranslation("impactStory1Title", language),
			description: getTranslation("impactStory1Description", language),
			imageUrl: "/placeholder.svg",
			stats: [
				{ label: getTranslation("landRestored", language), value: "45 ha" },
				{ label: getTranslation("speciesReintroduced", language), value: "18" }
			]
		},
		{
			id: 2,
			farmName: "Riverside Dairy",
			title: getTranslation("impactStory2Title", language),
			description: getTranslation("impactStory2Description", language),
			imageUrl: "/placeholder.svg",
			stats: [
				{ label: getTranslation("localJobsCreated", language), value: "12" },
				{ label: getTranslation("communityMembersFed", language), value: "450+" }
			]
		},
		{
			id: 3,
			farmName: "Sunshine Orchards",
			title: getTranslation("impactStory3Title", language),
			description: getTranslation("impactStory3Description", language),
			imageUrl: "/placeholder.svg",
			stats: [
				{ label: getTranslation("waterConserved", language), value: "8.2M L" },
				{ label: getTranslation("carbonSequestered", language), value: "120 t" }
			]
		}
	];

	return (
		<div className="space-y-10 animate-fade-in">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-2xl font-bold mb-4">{getTranslation("realImpactTitle", language)}</h2>
				<p className="text-muted-foreground">
					{getTranslation("realImpactDescription", language)}
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{impactStories.map((story) => (
					<Card key={story.id} className="shadow-md overflow-hidden h-full flex flex-col">
						<div className="w-full">
							<AspectRatio ratio={16 / 9}>
								<div
									className="bg-cover bg-center w-full h-full"
									style={{ backgroundImage: `url(${story.imageUrl})` }}
								></div>
							</AspectRatio>
						</div>
						<CardHeader>
							<div className="text-sm text-primary font-semibold mb-1">{story.farmName}</div>
							<CardTitle className="text-xl">{story.title}</CardTitle>
						</CardHeader>
						<CardContent className="flex-grow">
							<p className="text-sm text-muted-foreground">{story.description}</p>

							<div className="grid grid-cols-2 gap-4 mt-6">
								{story.stats.map((stat, idx) => (
									<div key={idx} className="bg-muted/50 p-3 rounded-md text-center">
										<div className="text-2xl font-bold">{stat.value}</div>
										<div className="text-xs text-muted-foreground">{stat.label}</div>
									</div>
								))}
							</div>
						</CardContent>
						<CardFooter>
							<Button variant="outline" className="w-full">{getTranslation("readFullStory", language)}</Button>
						</CardFooter>
					</Card>
				))}
			</div>

			<div className="bg-farm-green/10 p-6 rounded-lg text-center">
				<h3 className="font-semibold mb-2">{getTranslation("shareYourStory", language)}</h3>
				<p className="text-sm text-muted-foreground mb-4">{getTranslation("shareYourStoryDescription", language)}</p>
				<Button variant="default">{getTranslation("contactUs", language)}</Button>
			</div>
		</div>
	);
};

export default FarmImpactStories;