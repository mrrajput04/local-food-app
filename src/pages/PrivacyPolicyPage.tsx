
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const PrivacyPolicyPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-8">
				<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
				<p className="text-lg text-muted-foreground">
					Read our privacy policy. Detailed policy information will go here.
				</p>
			</main>
			<Footer />
		</div>
	);
};

export default PrivacyPolicyPage;