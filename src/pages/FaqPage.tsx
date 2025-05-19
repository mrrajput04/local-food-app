
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FaqPage = () => {
	const faqs = [
		{
			question: "How do I place an order?",
			answer: "You can browse products on our website, add items to your cart, and proceed to checkout. For subscription boxes, simply choose your preferred box size and frequency.",
		},
		{
			question: "Where do you source your products from?",
			answer: "All our products are sourced directly from local farms and producers in the region. We prioritize partnerships with those who use sustainable and ethical practices.",
		},
		{
			question: "What are the benefits of a subscription box?",
			answer: "Subscription boxes offer a convenient way to receive a regular supply of fresh, seasonal produce. They often provide better value and introduce you to new items you might not typically buy.",
		},
		{
			question: "Can I customize my subscription box?",
			answer: "Some subscription plans may offer customization options or allow you to set preferences for items you'd like to receive or avoid. Please check the details of specific subscription plans.",
		},
		{
			question: "What if I'm not home for a delivery or pickup?",
			answer: "For home deliveries, if you're not home, our driver will leave the box in a designated safe spot (please specify this in your delivery instructions). For pickup locations, items not collected during the designated window may be forfeited or donated, depending on the location's policy. Please check your specific pickup location details.",
		},
		{
			question: "How do you ensure food quality and freshness?",
			answer: "We work closely with our partner farms to ensure that all produce is harvested at its peak freshness. Orders are typically packed shortly before pickup or delivery to maintain quality.",
		}
	];

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<HelpCircle className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">Frequently Asked Questions</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Find answers to common questions about our service, products, and how we operate.
					</p>
				</div>

				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem value={`item-${index}`} key={index}>
								<AccordionTrigger className="text-lg text-left hover:no-underline">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="text-base text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default FaqPage;