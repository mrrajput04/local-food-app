import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SubscriptionOptions from "@/components/subscription/SubscriptionOptions";
import PickupScheduler from "@/components/scheduling/PickupScheduler";
import { SubscriptionBox, PickupLocation } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

interface SubscriptionAndPickupProps {
    subscriptions: SubscriptionBox[];
    pickupLocations: PickupLocation[];
}

export default function SubscriptionAndPickup({ subscriptions, pickupLocations }: SubscriptionAndPickupProps) {
    const { language } = useLanguage();

    return (
        <section className="py-16">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-4">Subscribe & Pickup</h2>
                <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Choose a subscription box for regular deliveries or schedule individual pickups at convenient locations
                </p>

                <Tabs defaultValue="subscriptions" className="max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="subscriptions">Subscription Boxes</TabsTrigger>
                        <TabsTrigger value="pickups">Pickup Scheduler</TabsTrigger>
                    </TabsList>
                    <TabsContent value="subscriptions">
                        <SubscriptionOptions subscriptions={subscriptions} />
                    </TabsContent>
                    <TabsContent value="pickups">
                        <PickupScheduler locations={pickupLocations} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}