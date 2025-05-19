
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutUs = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<h1 className="text-4xl font-bold mb-6 text-center text-farm-green-dark">About Local Food Connector</h1>
				<div className="max-w-3xl mx-auto">
					<img
						src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
						alt="Community gathering"
						className="rounded-lg shadow-lg mb-8 w-full h-64 object-cover"
					/>
					<p className="text-lg text-muted-foreground mb-4">
						Welcome to Local Food Connector! We are a passionate team dedicated to bridging the gap between local farmers and their communities. Our mission is to make fresh, nutritious, and locally sourced food readily accessible to everyone. We believe in the power of local food systems to nourish our bodies, support our farmers, and foster sustainable agricultural practices.
					</p>
					<p className="text-lg text-muted-foreground mb-4">
						Founded on the principle that everyone deserves access to high-quality food, Local Food Connector empowers consumers to make informed choices about where their food comes from. By connecting directly with local producers, you not only get the freshest ingredients but also contribute to a more resilient and transparent food supply chain.
					</p>
					<h2 className="text-2xl font-semibold mt-8 mb-4 text-farm-green">Our Vision</h2>
					<p className="text-lg text-muted-foreground mb-4">
						We envision a world where local farms thrive, communities are healthier, and the environment is respected. Through our platform, we aim to cultivate a deeper appreciation for local agriculture and the hard work of the people who grow our food.
					</p>
					<h2 className="text-2xl font-semibold mt-8 mb-4 text-farm-green">Our Values</h2>
					<ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
						<li><span className="font-medium">Community:</span> Fostering strong relationships between producers and consumers.</li>
						<li><span className="font-medium">Sustainability:</span> Promoting eco-friendly farming and reducing food miles.</li>
						<li><span className="font-medium">Transparency:</span> Providing clear information about food origins and practices.</li>
						<li><span className="font-medium">Quality:</span> Ensuring access to the freshest, highest-quality local produce.</li>
						<li><span className="font-medium">Support:</span> Championing local farmers and their livelihoods.</li>
					</ul>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default AboutUs;