
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Settings } from "lucide-react"; // Using Settings icon to represent process

const HowItWorksPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<Settings className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">How Local Food Connector Works</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Connecting you with fresh, local food is simple. Here’s a step-by-step guide to our process, from farm to your table.
					</p>
				</div>

				<img
					src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
					alt="Process flow"
					className="rounded-lg shadow-lg mb-10 w-full h-64 object-cover"
				/>

				<div className="space-y-10 max-w-3xl mx-auto">
					<div className="flex items-start space-x-4">
						<div className="flex-shrink-0 w-12 h-12 bg-farm-green text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
						<div>
							<h2 className="text-2xl font-semibold mb-2 text-farm-green-dark">Browse & Discover</h2>
							<p className="text-lg text-muted-foreground">
								Explore our platform to find a wide variety of products from local farms. Read about the farms, their practices, and the seasonal items they offer. You can filter by product type, farm, or location.
							</p>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<div className="flex-shrink-0 w-12 h-12 bg-farm-green text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
						<div>
							<h2 className="text-2xl font-semibold mb-2 text-farm-green-dark">Place Your Order</h2>
							<p className="text-lg text-muted-foreground">
								Add your chosen items to your cart or sign up for a subscription box. Our secure checkout process makes ordering easy. You’ll receive a confirmation once your order is placed.
							</p>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<div className="flex-shrink-0 w-12 h-12 bg-farm-green text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
						<div>
							<h2 className="text-2xl font-semibold mb-2 text-farm-green-dark">Farmers Prepare Your Order</h2>
							<p className="text-lg text-muted-foreground">
								Once your order is confirmed, our partner farmers get to work! They harvest and prepare your items, ensuring maximum freshness and quality. This direct model means less time in transit and storage.
							</p>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<div className="flex-shrink-0 w-12 h-12 bg-farm-green text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
						<div>
							<h2 className="text-2xl font-semibold mb-2 text-farm-green-dark">Collect or Receive</h2>
							<p className="text-lg text-muted-foreground">
								Choose a convenient pickup location or opt for home delivery if available in your area. We’ll notify you when your order is ready.
							</p>
						</div>
					</div>

					<div className="flex items-start space-x-4">
						<div className="flex-shrink-0 w-12 h-12 bg-farm-green text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
						<div>
							<h2 className="text-2xl font-semibold mb-2 text-farm-green-dark">Enjoy Fresh, Local Food!</h2>
							<p className="text-lg text-muted-foreground">
								Bring home your delicious, locally sourced food and enjoy the taste of freshness. By choosing Local Food Connector, you're supporting local agriculture and a healthier food system.
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default HowItWorksPage;