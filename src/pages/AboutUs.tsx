
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutUs = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-8">
				<h1 className="text-3xl font-bold mb-4">About Us</h1>
				<p className="text-lg text-muted-foreground">
					Welcome to Local Food Connector! We are passionate about connecting local farms with communities.
					Our mission is to make fresh, locally sourced food accessible to everyone while supporting
					our local farmers and promoting sustainable agriculture.
				</p>
				<p className="mt-4 text-lg text-muted-foreground">
					More content about our story, team, and values will go here.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default AboutUs;
