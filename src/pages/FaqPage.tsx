
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const FaqPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-8">
				<h1 className="text-3xl font-bold mb-4">FAQs</h1>
				<p className="text-lg text-muted-foreground">
					Find answers to frequently asked questions. Q&A content will go here.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default FaqPage;