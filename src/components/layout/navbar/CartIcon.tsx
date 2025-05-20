
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

export function CartIcon() {
	const { language } = useLanguage();
	return (
		<Button variant="ghost" size="icon">
			<ShoppingCart className="h-5 w-5" />
			<span className="sr-only">{getTranslation("cart", language)}</span>
		</Button>
	);
}