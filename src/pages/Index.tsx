
import { useState } from "react";
import { farms, products, subscriptionBoxes, pickupLocations } from "@/data/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedFarms from "@/components/home/FeaturedFarms";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SubscriptionAndPickup from "@/components/home/SubscriptionAndPickup";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import EducationalWidget from "@/components/home/EducationalWidget";
import LanguageSelector from "@/components/language/LanguageSelector";

const Index = () => {
	// Display only featured items on homepage
	const featuredFarms = farms.slice(0, 3);
	const featuredProducts = products.slice(0, 4);
	const featuredSubscriptions = subscriptionBoxes.slice(0, 2);

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			<main className="flex-1">
				<Hero />
				<HowItWorks />
				<FeaturedFarms farms={featuredFarms} />
				<EducationalWidget />
				<FeaturedProducts products={featuredProducts} />
				<SubscriptionAndPickup
					subscriptions={featuredSubscriptions}
					pickupLocations={pickupLocations}
				/>
				<Testimonials />
				<CallToAction />
			</main>

			<Footer />
		</div>
	);
};

export default Index;