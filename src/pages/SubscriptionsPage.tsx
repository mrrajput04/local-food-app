
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Package } from "lucide-react";

const SubscriptionsPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<Package className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">Our Subscription Boxes</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Enjoy a regular supply of fresh, local produce delivered conveniently. Choose a box that suits your needs and discover seasonal delights from our partner farms.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<div className="border p-6 rounded-lg shadow-lg bg-white">
						<h2 className="text-2xl font-semibold mb-3 text-farm-green">The Harvest Box (Small)</h2>
						<p className="text-lg font-medium text-gray-800 mb-2">$25 / week</p>
						<p className="text-muted-foreground mb-4">Perfect for individuals or couples. A curated selection of seasonal vegetables and fruits.</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
							<li>Typically 5-7 varieties of produce</li>
							<li>Freshly harvested</li>
							<li>Supports local farmers</li>
						</ul>
						<button className="w-full bg-farm-orange text-white py-2 px-4 rounded hover:bg-farm-orange-dark transition-colors">Sign Up Now</button>
					</div>
					<div className="border p-6 rounded-lg shadow-lg bg-white">
						<h2 className="text-2xl font-semibold mb-3 text-farm-green">The Family Bounty (Large)</h2>
						<p className="text-lg font-medium text-gray-800 mb-2">$45 / week</p>
						<p className="text-muted-foreground mb-4">Ideal for families or those who love to cook. A generous assortment of seasonal produce, often including specialty items.</p>
						<ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
							<li>Typically 8-12 varieties of produce</li>
							<li>Includes fruits, vegetables, and occasional extras</li>
							<li>Best value for variety and quantity</li>
						</ul>
						<button className="w-full bg-farm-orange text-white py-2 px-4 rounded hover:bg-farm-orange-dark transition-colors">Sign Up Now</button>
					</div>
				</div>
				<div className="text-center mt-12">
					<h3 className="text-2xl font-semibold mb-3 text-farm-green-dark">How It Works</h3>
					<ol className="list-decimal list-inside text-lg text-muted-foreground space-y-2 max-w-xl mx-auto text-left">
						<li><span className="font-medium">Choose Your Box:</span> Select the subscription size that fits your household.</li>
						<li><span className="font-medium">Customize (Optional):</span> Some plans may offer preference settings.</li>
						<li><span className="font-medium">Select Pickup/Delivery:</span> Choose a convenient pickup location or home delivery if available.</li>
						<li><span className="font-medium">Enjoy Fresh Food:</span> Receive your box filled with seasonal goodness and recipes!</li>
					</ol>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default SubscriptionsPage;