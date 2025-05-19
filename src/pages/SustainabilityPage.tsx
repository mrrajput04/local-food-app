
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SustainabilityPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-8">
				<h1 className="text-3xl font-bold mb-4">Sustainability</h1>
				<p className="text-lg text-muted-foreground">
					Learn about our commitment to sustainable practices. Information on sustainability will go here.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default SustainabilityPage;