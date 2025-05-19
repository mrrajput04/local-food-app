
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText } from "lucide-react";

const TermsOfServicePage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<FileText className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">Terms of Service</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Please read these Terms of Service carefully before using our platform.
					</p>
				</div>

				<div className="max-w-3xl mx-auto space-y-6 prose prose-lg lg:prose-xl text-muted-foreground">
					<p>Last Updated: {new Date().toLocaleDateString()}</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark !mt-8">1. Acceptance of Terms</h2>
					<p>By accessing or using the Local Food Connector website and services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use the Service.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">2. Use of the Service</h2>
					<p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
					<ul className="list-disc list-inside">
						<li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
						<li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Local Food Connector or users of the Service.</li>
						<li>To impersonate or attempt to impersonate Local Food Connector, a Local Food Connector employee, another user, or any other person or entity.</li>
					</ul>

					<h2 className="text-2xl font-semibold text-farm-green-dark">3. Accounts</h2>
					<p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">4. Orders and Payments</h2>
					<p>All orders placed through the Service are subject to availability and acceptance. We reserve the right to refuse or cancel any order for any reason. Prices for products are subject to change without notice. Payment must be made at the time of ordering through our accepted payment methods.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">5. Intellectual Property</h2>
					<p>The Service and its original content, features, and functionality are and will remain the exclusive property of Local Food Connector and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">6. Limitation of Liability</h2>
					<p>In no event shall Local Food Connector, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">7. Governing Law</h2>
					<p>These Terms shall be governed and construed in accordance with the laws of the State of Colorado, United States, without regard to its conflict of law provisions.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">8. Changes to Terms</h2>
					<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

					<h2 className="text-2xl font-semibold text-farm-green-dark">9. Contact Us</h2>
					<p>If you have any questions about these Terms, please contact us at legal@localfoodconnector.com.</p>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default TermsOfServicePage;