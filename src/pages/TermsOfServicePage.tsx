
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TermsOfServicePage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-8">
				<h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
				<p className="text-lg text-muted-foreground">
					Review our terms of service. Detailed terms will go here.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default TermsOfServicePage;