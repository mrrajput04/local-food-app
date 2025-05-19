
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const FarmsPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-8">
				<h1 className="text-3xl font-bold mb-4">Local Farms</h1>
				<p className="text-lg text-muted-foreground">
					Discover local farms in your area. Content about farms will go here.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default FarmsPage;