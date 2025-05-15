
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    const { language } = useLanguage();

    if (products.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-2">
                    {getTranslation("noProductsFound", language)}
                </p>
                <p className="text-sm text-muted-foreground">
                    {getTranslation("tryDifferentFilters", language)}
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-4 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                    {getTranslation("showing", language)} <span className="font-medium">{products.length}</span> {getTranslation("products", language)}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}