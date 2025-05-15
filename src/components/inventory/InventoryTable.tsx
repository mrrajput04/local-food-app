
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Switch } from "@/components/ui/switch";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { farms } from "@/data/mockData";
import { Product } from "@/types";

// For demo purposes, we'll use the first farm's products as the producer's inventory
const producerProducts = farms[0].products;

const InventoryTable = () => {
    const { language } = useLanguage();
    const [products, setProducts] = useState<Product[]>(producerProducts);

    const toggleAvailability = (productId: string) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId
                    ? { ...product, inStock: !product.inStock }
                    : product
            )
        );

        // Show toast notification
        const product = products.find(p => p.id === productId);
        if (product) {
            const status = !product.inStock ? "available" : "outOfStock";
            toast.success(
                `${product.name} ${getTranslation("isNow", language)} ${getTranslation(status, language)}`
            );
        }
    };

    return (
        <div>
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-xl font-semibold">
                    {getTranslation("productsInventory", language)}
                </h3>
                <div className="mt-2 sm:mt-0">
                    <span className="text-sm text-muted-foreground">
                        {products.filter(p => p.inStock).length} {getTranslation("itemsInStock", language)}
                    </span>
                </div>
            </div>

            <div className="border rounded-md overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{getTranslation("product", language)}</TableHead>
                            <TableHead className="hidden sm:table-cell">{getTranslation("category", language)}</TableHead>
                            <TableHead>{getTranslation("price", language)}</TableHead>
                            <TableHead className="text-right">{getTranslation("availability", language)}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                                            <img
                                                src={product.imageUrl}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div>{product.name}</div>
                                            <div className="text-sm text-muted-foreground sm:hidden">
                                                {getTranslation(product.category, language)}
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <Badge variant="outline">
                                        {getTranslation(product.category, language)}
                                    </Badge>
                                </TableCell>
                                <TableCell>${product.price.toFixed(2)}/{product.unit}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                                            {product.inStock
                                                ? getTranslation("available", language)
                                                : getTranslation("outOfStock", language)
                                            }
                                        </span>
                                        <Switch
                                            checked={product.inStock}
                                            onCheckedChange={() => toggleAvailability(product.id)}
                                        />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default InventoryTable;