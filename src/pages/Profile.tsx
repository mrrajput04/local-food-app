import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImpactTracker from "@/components/profile/ImpactTracker";

const Profile = () => {
	const { language } = useLanguage();

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			<main className="flex-1 py-10">
				<div className="container">
					<h1 className="text-3xl font-bold mb-6">
						{getTrans("myProfile", language)}
					</h1>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* User Info Section */}
						<div className="lg:col-span-2">
							<Tabs defaultValue="account">
								<TabsList>
									<TabsTrigger value="account">{getTrans("accountDetails", language)}</TabsTrigger>
									<TabsTrigger value="orders">{getTrans("myOrders", language)}</TabsTrigger>
									<TabsTrigger value="subscriptions">{getTrans("mySubscriptions", language)}</TabsTrigger>
								</TabsList>
								<TabsContent value="account" className="mt-6">
									<div className="space-y-6">
										<div className="bg-card rounded-lg p-6 shadow">
											<h3 className="text-xl font-medium mb-4">{getTrans("personalInformation", language)}</h3>
											{/* Personal information content here */}
										</div>

										<div className="bg-card rounded-lg p-6 shadow">
											<h3 className="text-xl font-medium mb-4">{getTrans("preferences", language)}</h3>
											{/* Preferences content here */}
										</div>
									</div>
								</TabsContent>
								<TabsContent value="orders" className="mt-6">
									<div className="bg-card rounded-lg p-6 shadow">
										<h3 className="text-xl font-medium mb-4">{getTrans("recentOrders", language)}</h3>
										{/* Orders content here */}
									</div>
								</TabsContent>
								<TabsContent value="subscriptions" className="mt-6">
									<div className="bg-card rounded-lg p-6 shadow">
										<h3 className="text-xl font-medium mb-4">{getTrans("activeSubscriptions", language)}</h3>
										{/* Subscriptions content here */}
									</div>
								</TabsContent>
							</Tabs>
						</div>

						{/* Impact Tracker Section */}
						<div>
							<ImpactTracker />
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

// Helper function to avoid undefined keys
function getTrans(key: string, lang: string): string {
	return getTranslation(key, lang);
}

export default Profile;