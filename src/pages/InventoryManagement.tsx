
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InventoryTable from "@/components/inventory/InventoryTable";
import AddProductForm from "@/components/inventory/AddProductForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const InventoryManagement = () => {
    const { language } = useLanguage();
    const [showAddProductForm, setShowAddProductForm] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-1 bg-gray-50 py-8">
                <div className="container">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            {getTranslation("manageInventory", language)}
                        </h1>
                        <p className="text-muted-foreground">
                            {getTranslation("trackAndManageProducts", language)}
                        </p>
                    </div>

                    {!showAddProductForm ? (
                        <div className="mb-6">
                            <Button
                                onClick={() => setShowAddProductForm(true)}
                                className="bg-farm-green hover:bg-farm-green-dark"
                            >
                                <Plus className="mr-2 h-4 w-4" />
                                {getTranslation("addProduct", language)}
                            </Button>
                        </div>
                    ) : (
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold">{getTranslation("addNewProduct", language)}</h2>
                                <Button
                                    variant="outline"
                                    onClick={() => setShowAddProductForm(false)}
                                >
                                    {getTranslation("cancel", language)}
                                </Button>
                            </div>
                            <AddProductForm />
                        </div>
                    )}

                    {/* Only show inventory table when not adding a product on mobile */}
                    <div className={showAddProductForm ? "hidden md:block" : "block"}>
                        <InventoryTable />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default InventoryManagement;
