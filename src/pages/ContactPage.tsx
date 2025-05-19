import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
	const { language } = useLanguage();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted:", formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 container py-12 md:py-16">
				<div className="text-center mb-12">
					<MessageSquare className="w-16 h-16 mx-auto mb-4 text-farm-green" />
					<h1 className="text-4xl font-bold mb-4 text-farm-green-dark">Contact Us</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Have questions or feedback? We'd love to hear from you. Get in touch with our team.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{/* Contact Form */}
					<Card className="shadow-md">
						<CardHeader>
							<CardTitle>Send us a Message</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-4">
								<div>
									<Input
										placeholder="Your Name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										type="email"
										placeholder="Your Email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Input
										placeholder="Subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
									/>
								</div>
								<div>
									<Textarea
										placeholder="Your Message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										className="min-h-[150px]"
									/>
								</div>
								<Button type="submit" className="w-full bg-farm-green hover:bg-farm-green-dark">
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>

					{/* Contact Information */}
					<div className="space-y-6">
						<Card className="shadow-md">
							<CardHeader>
								<CardTitle>Contact Information</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center gap-3">
									<div className="p-2 rounded-full bg-farm-green/10">
										<Mail className="h-5 w-5 text-farm-green" />
									</div>
									<div>
										<h3 className="font-medium">Email</h3>
										<p className="text-muted-foreground">support@localfoodconnector.com</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="p-2 rounded-full bg-farm-yellow/10">
										<Phone className="h-5 w-5 text-farm-yellow-dark" />
									</div>
									<div>
										<h3 className="font-medium">Phone</h3>
										<p className="text-muted-foreground">+1 (555) 123-4567</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="p-2 rounded-full bg-farm-earth/10">
										<MapPin className="h-5 w-5 text-farm-earth" />
									</div>
									<div>
										<h3 className="font-medium">Office</h3>
										<p className="text-muted-foreground">123 Local Farm Street<br />Farmington, ST 12345</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="shadow-md bg-farm-softBlue/20">
							<CardContent className="p-6">
								<h3 className="font-semibold mb-2">Business Hours</h3>
								<div className="space-y-2 text-muted-foreground">
									<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
									<p>Saturday: 10:00 AM - 4:00 PM</p>
									<p>Sunday: Closed</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default ContactPage;