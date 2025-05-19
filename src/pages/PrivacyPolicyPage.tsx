
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicyPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<Shield className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">Privacy Policy</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
					</p>
				</div>

				<div className="max-w-3xl mx-auto space-y-6 prose prose-lg lg:prose-xl text-muted-foreground">
					<p>Last Updated: {new Date().toLocaleDateString()}</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark !mt-8">1. Information We Collect</h2>
					<p>We collect information you provide directly to us, such as when you create an account, place an order, or communicate with us. This may include your name, email address, phone number, delivery address, and payment information.</p>
					<p>We also collect information automatically when you use our services, such as your IP address, browser type, and browsing behavior on our site, through cookies and similar technologies.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">2. How We Use Your Information</h2>
					<p>We use your information to:</p>
					<ul className="list-disc list-inside">
						<li>Process your orders and manage your account.</li>
						<li>Communicate with you about your orders, our services, and promotions.</li>
						<li>Improve our website and services.</li>
						<li>Prevent fraud and ensure the security of our platform.</li>
						<li>Comply with legal obligations.</li>
					</ul>

					<h2 className="text-2xl font-semibold text-farm-green-dark">3. Information Sharing</h2>
					<p>We do not sell your personal information. We may share your information with third-party service providers who help us operate our business (e.g., payment processors, delivery partners), but only to the extent necessary for them to perform their services. We may also share information if required by law or to protect our rights.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">4. Data Security</h2>
					<p>We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">5. Your Choices</h2>
					<p>You can access and update your account information at any time. You may also opt-out of promotional communications. You can typically manage cookie preferences through your browser settings.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">6. Children's Privacy</h2>
					<p>Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">7. Changes to This Policy</h2>
					<p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last Updated" date.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">8. Contact Us</h2>
					<p>If you have any questions about this Privacy Policy, please contact us at privacy@localfoodconnector.com.</p>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default PrivacyPolicyPage;