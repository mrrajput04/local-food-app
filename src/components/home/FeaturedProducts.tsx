
import { Link } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

interface FeaturedProductsProps {
	products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
	const { language } = useLanguage();

	return (
		<section className="py-16 bg-background"> {/* Changed to bg-background */}
			<div className="container">
				<div className="flex justify-between items-end mb-8">
					<div>
						<h2 className="text-3xl font-bold">{getTranslation("freshProducts", language)}</h2>
						<p className="text-muted-foreground mt-2">{getTranslation("seasonalFavorites", language)}</p>
					</div>
					<Link to="/products" className="text-primary hover:text-primary/80 font-medium animated-underline">
						{getTranslation("viewAllProducts", language)} →
					</Link>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}
