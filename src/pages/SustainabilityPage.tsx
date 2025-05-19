
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Leaf } from "lucide-react";

const SustainabilityPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<Leaf className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">Our Commitment to Sustainability</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						At Local Food Connector, sustainability is at the heart of everything we do. We believe in fostering a food system that is environmentally sound, socially equitable, and economically viable.
					</p>
				</div>

				<div className="max-w-3xl mx-auto space-y-8">
					<div>
						<h2 className="text-2xl font-semibold mb-3 text-farm-green">Environmental Stewardship</h2>
						<p className="text-lg text-muted-foreground mb-3">
							We partner with farms that prioritize sustainable land management, water conservation, and biodiversity. By supporting local, we help reduce food miles and the carbon footprint associated with long-distance transportation.
						</p>
						<ul className="list-disc list-inside text-lg text-muted-foreground space-y-1">
							<li>Promoting organic and regenerative farming practices.</li>
							<li>Minimizing packaging waste through reusable or compostable options.</li>
							<li>Encouraging seasonal eating to reduce reliance on out-of-season imports.</li>
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-semibold mb-3 text-farm-green">Supporting Local Economies</h2>
						<p className="text-lg text-muted-foreground mb-3">
							A strong local food system means a stronger local economy. We ensure fair prices for farmers, helping them thrive and continue their vital work. Your purchases directly benefit families and businesses in your community.
						</p>
						<ul className="list-disc list-inside text-lg text-muted-foreground space-y-1">
							<li>Providing a reliable market for small and medium-sized farms.</li>
							<li>Creating local job opportunities.</li>
							<li>Keeping money circulating within the local community.</li>
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-semibold mb-3 text-farm-green">Community Well-being</h2>
						<p className="text-lg text-muted-foreground mb-3">
							Access to fresh, nutritious food is fundamental to community health. We work to make local food more accessible and educate consumers about the benefits of eating locally and seasonally.
						</p>
						<ul className="list-disc list-inside text-lg text-muted-foreground space-y-1">
							<li>Partnering with community organizations to address food access.</li>
							<li>Providing educational resources on sustainable food choices.</li>
							<li>Fostering connections between consumers and the people who grow their food.</li>
						</ul>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default SustainabilityPage;