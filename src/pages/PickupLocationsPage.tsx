
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin } from "lucide-react";

const PickupLocationsPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<MapPin className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">Find a Pickup Location</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Collect your fresh orders from convenient locations in your neighborhood. We partner with local businesses to make pickup easy and accessible.
					</p>
				</div>

				{/* Placeholder for map integration or list of locations */}
				<div className="bg-gray-100 p-8 rounded-lg shadow-md text-center mb-8">
					<h2 className="text-2xl font-semibold mb-3 text-farm-green">Interactive Map Coming Soon!</h2>
					<p className="text-muted-foreground">
						We are working on an interactive map to help you easily find the nearest pickup spot.
						For now, please see our current list of locations below.
					</p>
				</div>

				<div className="space-y-6">
					<div>
						<h3 className="text-2xl font-semibold mb-2 text-farm-green-dark">Downtown Boulder Hub</h3>
						<p className="text-muted-foreground">123 Main Street, Boulder, CO 80302</p>
						<p className="text-sm text-gray-600">Pickup Hours: Wednesdays 4 PM - 6 PM, Saturdays 10 AM - 12 PM</p>
					</div>
					<div>
						<h3 className="text-2xl font-semibold mb-2 text-farm-green-dark">North Longmont Collective</h3>
						<p className="text-muted-foreground">456 Community Ave, Longmont, CO 80501</p>
						<p className="text-sm text-gray-600">Pickup Hours: Thursdays 3 PM - 5 PM</p>
					</div>
					<div>
						<h3 className="text-2xl font-semibold mb-2 text-farm-green-dark">South Denver Market</h3>
						<p className="text-muted-foreground">789 Farmer's Lane, Denver, CO 80210</p>
						<p className="text-sm text-gray-600">Pickup Hours: Fridays 1 PM - 4 PM</p>
					</div>
				</div>
				<p className="text-center mt-12 text-lg text-muted-foreground">
					New pickup locations are added regularly. Check back for updates or contact us to suggest a location!
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default PickupLocationsPage;