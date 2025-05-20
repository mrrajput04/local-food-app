
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sooner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import InventoryManagement from "./pages/InventoryManagement";
import Products from "./pages/Products";
import Education from "./pages/Education";
import AboutUs from "./pages/AboutUs";
import FarmsPage from "./pages/FarmsPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import PickupLocationsPage from "./pages/PickupLocationsPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import FaqPage from "./pages/FaqPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<LanguageProvider>
			<BrowserRouter> {/* BrowserRouter now wraps AuthProvider */}
				<AuthProvider> {/* AuthProvider is now a child of BrowserRouter */}
					<TooltipProvider>
						<Toaster />
						<Sonner />
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/auth/login" element={<Login />} />
							<Route path="/auth/signup" element={<SignUp />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/orders" element={<Orders />} />
							<Route path="/inventory" element={<InventoryManagement />} />
							<Route path="/products" element={<Products />} />
							<Route path="/education" element={<Education />} />
							<Route path="/about" element={<AboutUs />} />
							<Route path="/farms" element={<FarmsPage />} />
							<Route path="/subscriptions" element={<SubscriptionsPage />} />
							<Route path="/pickup" element={<PickupLocationsPage />} />
							<Route path="/how-it-works" element={<HowItWorksPage />} />
							<Route path="/sustainability" element={<SustainabilityPage />} />
							<Route path="/faq" element={<FaqPage />} />
							<Route path="/privacy" element={<PrivacyPolicyPage />} />
							<Route path="/terms" element={<TermsOfServicePage />} />
							{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
							<Route path="*" element={<NotFound />} />
						</Routes>
					</TooltipProvider>
				</AuthProvider>
			</BrowserRouter>
		</LanguageProvider>
	</QueryClientProvider>
);

export default App;