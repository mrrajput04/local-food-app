
import { Link } from "react-router-dom";
import FarmCard from "@/components/farms/FarmCard";
import { Farm } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

interface FeaturedFarmsProps {
	farms: Farm[];
}

export default function FeaturedFarms({ farms }: FeaturedFarmsProps) {
	const { language } = useLanguage();

	return (
		<section className="py-16">
			<div className="container">
				<div className="flex justify-between items-end mb-8">
					<div>
						<h2 className="text-3xl font-bold">{getTranslation("featuredFarms", language)}</h2>
						<p className="text-muted-foreground mt-2">{getTranslation("discoverLocalFarms", language)}</p>
					</div>
					<Link to="/farms" className="text-primary hover:text-primary/80 font-medium animated-underline">
						{getTranslation("viewAllFarms", language)} →
					</Link>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{farms.map((farm) => (
						<FarmCard key={farm.id} farm={farm} />
					))}
				</div>
			</div>
		</section>
	);
}
