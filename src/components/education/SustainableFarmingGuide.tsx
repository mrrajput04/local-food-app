
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

const SustainableFarmingGuide = () => {
	const { language } = useLanguage();

	const farmingPractices = [
		{
			id: "organic",
			title: getTranslation("organicFarming", language),
			content: getTranslation("organicFarmingDescription", language)
		},
		{
			id: "regenerative",
			title: getTranslation("regenerativeFarming", language),
			content: getTranslation("regenerativeFarmingDescription", language)
		},
		{
			id: "permaculture",
			title: getTranslation("permaculture", language),
			content: getTranslation("permacultureDescription", language)
		},
		{
			id: "biodynamic",
			title: getTranslation("biodynamicFarming", language),
			content: getTranslation("biodynamicFarmingDescription", language)
		},
		{
			id: "conservation",
			title: getTranslation("conservationAgriculture", language),
			content: getTranslation("conservationAgricultureDescription", language)
		}
	];

	return (
		<div className="grid grid-cols-1 gap-8 animate-fade-in">
			<Card className="shadow-md">
				<CardHeader className="bg-farm-green/10">
					<CardTitle>{getTranslation("sustainableFarmingPractices", language)}</CardTitle>
					<CardDescription>
						{getTranslation("sustainableFarmingPracticesDescription", language)}
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-6">
					<Accordion type="single" collapsible className="w-full">
						{farmingPractices.map((practice) => (
							<AccordionItem value={practice.id} key={practice.id}>
								<AccordionTrigger className="text-left font-medium">
									{practice.title}
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground">
									<p className="mb-4">{practice.content}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card className="shadow-md h-full">
					<CardHeader className="bg-farm-yellow/10">
						<CardTitle>{getTranslation("benefitsOfSustainableFarming", language)}</CardTitle>
					</CardHeader>
					<CardContent className="pt-6">
						<ul className="space-y-2 list-disc pl-5">
							<li>{getTranslation("sustainabilityBenefit1", language)}</li>
							<li>{getTranslation("sustainabilityBenefit2", language)}</li>
							<li>{getTranslation("sustainabilityBenefit3", language)}</li>
							<li>{getTranslation("sustainabilityBenefit4", language)}</li>
							<li>{getTranslation("sustainabilityBenefit5", language)}</li>
						</ul>
					</CardContent>
				</Card>

				<Card className="shadow-md h-full">
					<CardHeader className="bg-farm-softBlue">
						<CardTitle className="text-foreground">{getTranslation("howToSupport", language)}</CardTitle>
					</CardHeader>
					<CardContent className="pt-6">
						<ul className="space-y-2 list-disc pl-5">
							<li>{getTranslation("supportTip1", language)}</li>
							<li>{getTranslation("supportTip2", language)}</li>
							<li>{getTranslation("supportTip3", language)}</li>
							<li>{getTranslation("supportTip4", language)}</li>
							<li>{getTranslation("supportTip5", language)}</li>
						</ul>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default SustainableFarmingGuide;