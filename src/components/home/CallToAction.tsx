import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

export default function CallToAction() {
	const { language } = useLanguage();

	return (
		<section className="py-16">
			<div className="container">
				<div className="bg-accent/20 border border-accent rounded-lg p-8 text-center max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold mb-4">{getTranslation("readyToTaste", language)}</h2>
					<p className="text-muted-foreground mb-6 max-w-xl mx-auto">
						{getTranslation("signUpDescription", language)}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
							<Link to="/auth/signup">{getTranslation("createAccount", language)}</Link>
						</Button>
						<Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
							<Link to="/farms">{getTranslation("browseFarms", language)}</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}