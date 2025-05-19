
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tractor } from "lucide-react";

const FarmsPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<Tractor className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">Discover Our Partner Farms</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Get to know the dedicated local farmers who bring you fresh, quality produce and goods. We partner with a diverse range of farms committed to sustainable and ethical practices.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Example Farm Card - In a real app, this would be dynamic */}
					<div className="border p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
						<h2 className="text-2xl font-semibold mb-2 text-farm-green">Green Valley Organics</h2>
						<p className="text-sm text-muted-foreground mb-1">Location: Boulder, CO</p>
						<p className="text-sm text-muted-foreground mb-3">Specialties: Organic vegetables, herbs, free-range eggs</p>
						<p className="text-gray-700">
							Green Valley Organics has been farming sustainably for over 20 years. They are passionate about soil health and providing the community with nutrient-dense food.
						</p>
					</div>
					<div className="border p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
						<h2 className="text-2xl font-semibold mb-2 text-farm-green">Sunrise Dairy Farm</h2>
						<p className="text-sm text-muted-foreground mb-1">Location: Longmont, CO</p>
						<p className="text-sm text-muted-foreground mb-3">Specialties: Artisan cheeses, fresh milk, yogurt</p>
						<p className="text-gray-700">
							A family-run dairy, Sunrise Dairy Farm is known for its happy cows and delicious, high-quality dairy products made with traditional methods.
						</p>
					</div>
					<div className="border p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
						<h2 className="text-2xl font-semibold mb-2 text-farm-green">Orchard Hill Fruits</h2>
						<p className="text-sm text-muted-foreground mb-1">Location: Palisade, CO</p>
						<p className="text-sm text-muted-foreground mb-3">Specialties: Peaches, apples, cherries, jams</p>
						<p className="text-gray-700">
							Nestled in the fruit basket of Colorado, Orchard Hill Fruits grows a variety of delicious stone fruits and apples, perfect for eating fresh or preserving.
						</p>
					</div>
				</div>
				<p className="text-center mt-12 text-lg text-muted-foreground">
					More farms coming soon! We are continuously expanding our network to bring you the best local products.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default FarmsPage;
