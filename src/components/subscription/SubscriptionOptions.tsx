
import { SubscriptionBox, Product } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { products } from "@/data/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

interface SubscriptionOptionsProps {
    subscriptions: SubscriptionBox[];
}

export default function SubscriptionOptions({ subscriptions }: SubscriptionOptionsProps) {
    const { language } = useLanguage();

    const getFrequencyText = (frequency: string) => {
        switch (frequency) {
            case 'weekly': return getTranslation("weeklyDelivery", language);
            case 'biweekly': return getTranslation("biweeklyDelivery", language);
            case 'monthly': return getTranslation("monthlyDelivery", language);
            default: return frequency;
        }
    };

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptions.map((subscription) => (
                <Card key={subscription.id} className="flex flex-col">
                    <CardHeader className="pb-2">
                        <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
                            <img
                                src={subscription.imageUrl}
                                alt={subscription.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <CardTitle className="text-xl">{subscription.name}</CardTitle>
                        <div className="mt-1 text-sm text-muted-foreground">{getFrequencyText(subscription.frequency)}</div>
                    </CardHeader>

                    <CardContent className="flex-grow">
                        <div className="text-2xl font-bold mb-4">
                            ${subscription.price.toFixed(2)}
                            <span className="text-sm font-normal text-muted-foreground">/{subscription.frequency === 'biweekly' ? '2 weeks' : subscription.frequency.replace('ly', '')}</span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-6">{subscription.description}</p>

                        <div className="space-y-2">
                            {subscription.contents.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <Check className="h-4 w-4 mr-2 text-farm-green" />
                                    <span className="text-sm">
                                        {item.quantity > 1 && `${item.quantity}x `}
                                        {products.find(p => p.id === item.productId)?.name || 'Product'}
                                    </span>
                                </div>
                            ))}
                            <div className="flex items-center">
                                <Check className="h-4 w-4 mr-2 text-farm-green" />
                                <span className="text-sm">{getTranslation("freeDelivery", language)}</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="h-4 w-4 mr-2 text-farm-green" />
                                <span className="text-sm">{getTranslation("customizableContents", language)}</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="h-4 w-4 mr-2 text-farm-green" />
                                <span className="text-sm">{getTranslation("skipPause", language)}</span>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <Button className="w-full bg-farm-green hover:bg-farm-green-dark">
                            {getTranslation("subscribeNow", language)}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
