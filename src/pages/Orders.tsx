
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsumerOrderView from "@/components/orders/ConsumerOrderView";
import ProducerOrderView from "@/components/orders/ProducerOrderView";

export default function Orders() {
    const { language } = useLanguage();
    // In a real app, user role would come from auth context
    // This is a mock for demonstration purposes
    const [userRole, setUserRole] = useState<"consumer" | "producer">("consumer");

    const toggleRole = () => {
        setUserRole(prev => prev === "consumer" ? "producer" : "consumer");
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 py-10">
                <div className="container max-w-6xl px-4 mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold">{getTranslation("myOrders", language)}</h1>

                        {/* Toggle for demo purposes - in a real app, this would be determined by auth */}
                        <div className="mt-4 md:mt-0">
                            <button
                                onClick={toggleRole}
                                className="text-sm bg-farm-green text-white px-4 py-2 rounded-md hover:bg-farm-green-dark"
                            >
                                {getTranslation(userRole === "consumer" ? "switchToProducer" : "switchToConsumer", language)}
                            </button>
                        </div>
                    </div>

                    {userRole === "consumer" ? (
                        <ConsumerOrderView language={language} />
                    ) : (
                        <ProducerOrderView language={language} />
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
