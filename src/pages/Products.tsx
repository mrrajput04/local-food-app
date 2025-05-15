
import { useState, useEffect } from "react";
import { products, farms } from "@/data/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductList from "@/components/products/ProductList";
import ProductFilters from "@/components/products/ProductFilters";
import { Product } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

const Products = () => {
    const { language } = useLanguage();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedFarm, setSelectedFarm] = useState<string | null>(null);
    const [showOrganic, setShowOrganic] = useState<boolean>(false);
    const [showInStock, setShowInStock] = useState<boolean>(false);

    useEffect(() => {
        let filtered = [...products];

        // Apply category filter
        if (selectedCategory) {
            filtered = filtered.filter(product => product.category === selectedCategory);
        }

        // Apply farm filter
        if (selectedFarm) {
            filtered = filtered.filter(product => product.farmId === selectedFarm);
        }

        // Apply organic filter
        if (showOrganic) {
            filtered = filtered.filter(product => product.isOrganic);
        }

        // Apply in-stock filter
        if (showInStock) {
            filtered = filtered.filter(product => product.inStock);
        }

        setFilteredProducts(filtered);
    }, [selectedCategory, selectedFarm, showOrganic, showInStock]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 bg-gray-50">
                <div className="container py-8">
                    <h1 className="text-3xl font-bold mb-2">
                        {getTranslation("allProducts", language)}
                    </h1>
                    <p className="text-muted-foreground mb-6">
                        {getTranslation("freshFromLocalFarms", language)}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-1">
                            <ProductFilters
                                farms={farms}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                selectedFarm={selectedFarm}
                                setSelectedFarm={setSelectedFarm}
                                showOrganic={showOrganic}
                                setShowOrganic={setShowOrganic}
                                showInStock={showInStock}
                                setShowInStock={setShowInStock}
                            />
                        </div>
                        <div className="lg:col-span-3">
                            <ProductList products={filteredProducts} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Products;