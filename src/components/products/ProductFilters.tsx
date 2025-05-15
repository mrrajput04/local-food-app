
import { Farm } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ProductFiltersProps {
    farms: Farm[];
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
    selectedFarm: string | null;
    setSelectedFarm: (farmId: string | null) => void;
    showOrganic: boolean;
    setShowOrganic: (show: boolean) => void;
    showInStock: boolean;
    setShowInStock: (show: boolean) => void;
}

export default function ProductFilters({
    farms,
    selectedCategory,
    setSelectedCategory,
    selectedFarm,
    setSelectedFarm,
    showOrganic,
    setShowOrganic,
    showInStock,
    setShowInStock
}: ProductFiltersProps) {
    const { language } = useLanguage();

    const categories = [
        { value: "vegetables", label: getTranslation("vegetables", language) },
        { value: "fruits", label: getTranslation("fruits", language) },
        { value: "dairy", label: getTranslation("dairy", language) },
        { value: "meat", label: getTranslation("meat", language) },
        { value: "bakery", label: getTranslation("bakery", language) },
        { value: "other", label: getTranslation("other", language) }
    ];

    const resetFilters = () => {
        setSelectedCategory(null);
        setSelectedFarm(null);
        setShowOrganic(false);
        setShowInStock(false);
    };

    const hasActiveFilters = selectedCategory !== null || selectedFarm !== null || showOrganic || showInStock;

    return (
        <Card className="sticky top-8">
            <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-lg">{getTranslation("filters", language)}</h3>
                    {hasActiveFilters && (
                        <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8">
                            <X className="h-4 w-4 mr-1" />
                            {getTranslation("reset", language)}
                        </Button>
                    )}
                </div>

                <div className="space-y-6">
                    {/* Category filter */}
                    <div>
                        <h4 className="font-medium mb-3">{getTranslation("category", language)}</h4>
                        <RadioGroup value={selectedCategory || ""} onValueChange={(value) => setSelectedCategory(value || null)}>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <div key={category.value} className="flex items-center space-x-2">
                                        <RadioGroupItem value={category.value} id={`category-${category.value}`} />
                                        <Label htmlFor={`category-${category.value}`} className="cursor-pointer">
                                            {category.label}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Farm filter */}
                    <div>
                        <h4 className="font-medium mb-3">{getTranslation("farm", language)}</h4>
                        <RadioGroup value={selectedFarm || ""} onValueChange={(value) => setSelectedFarm(value || null)}>
                            <div className="space-y-2">
                                {farms.map((farm) => (
                                    <div key={farm.id} className="flex items-center space-x-2">
                                        <RadioGroupItem value={farm.id} id={`farm-${farm.id}`} />
                                        <Label htmlFor={`farm-${farm.id}`} className="cursor-pointer">
                                            {farm.name}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Additional filters */}
                    <div>
                        <h4 className="font-medium mb-3">{getTranslation("otherFilters", language)}</h4>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="organic"
                                    checked={showOrganic}
                                    onCheckedChange={(checked) => setShowOrganic(checked === true)}
                                />
                                <Label htmlFor="organic" className="cursor-pointer">
                                    {getTranslation("organic", language)}
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="inStock"
                                    checked={showInStock}
                                    onCheckedChange={(checked) => setShowInStock(checked === true)}
                                />
                                <Label htmlFor="inStock" className="cursor-pointer">
                                    {getTranslation("inStockOnly", language)}
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
