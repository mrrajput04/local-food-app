
import { Product } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="farm-card overflow-hidden h-full">
            <div className="aspect-square w-full overflow-hidden relative">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                />
                {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-medium text-lg">Out of Stock</span>
                    </div>
                )}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isOrganic && <span className="organic-badge">Organic</span>}
                    {product.isLocal && <span className="local-badge">Local</span>}
                    {product.isSeasonal && <span className="seasonal-badge">Seasonal</span>}
                </div>
            </div>
            <CardContent className="p-4">
                <div className="mb-2">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold">
                        ${product.price.toFixed(2)} <span className="text-sm font-normal text-muted-foreground">/ {product.unit}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button
                    className="w-full bg-farm-green hover:bg-farm-green-dark"
                    disabled={!product.inStock}
                >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}
