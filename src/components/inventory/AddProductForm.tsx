
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
// import { getTranslation } from "@/utils/translations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Create product schema for form validation
const productSchema = z.object({
    name: z.string().min(2, { message: "Product name is required" }),
    description: z.string().min(10, { message: "Description must be at least 10 characters" }),
    price: z.string().refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
        message: "Price must be a positive number",
    }),
    unit: z.string().min(1, { message: "Unit is required" }),
    category: z.enum(["vegetables", "fruits", "dairy", "meat", "bakery", "other"]),
    imageUrl: z.string().url({ message: "Valid image URL is required" }).or(z.literal("")),
    isOrganic: z.boolean().default(false),
    isSeasonal: z.boolean().default(false),
    isLocal: z.boolean().default(true),
    inStock: z.boolean().default(true),
});

type ProductFormValues = z.infer<typeof productSchema>;

const defaultValues: ProductFormValues = {
    name: "",
    description: "",
    price: "",
    unit: "kg",
    category: "vegetables",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9", // Default placeholder image
    isOrganic: false,
    isSeasonal: false,
    isLocal: true,
    inStock: true,
};

export default function AddProductForm() {
    const { language } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Initialize the form with react-hook-form and zod validation
    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productSchema),
        defaultValues,
    });

    // Handle form submission
    const onSubmit = async (data: ProductFormValues) => {
        setIsSubmitting(true);

        try {
            // In a real app, this would make an API call to create the product
            console.log("Creating new product:", data);

            // Simulate API call delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Show success message
            // toast.success(getTranslation("productAddedSuccess", language));

            // Reset form
            form.reset(defaultValues);
        } catch (error) {
            console.error("Error adding product:", error);
            // toast.error(getTranslation("productAddedError", language));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-6 border rounded-lg bg-white">
            {/* <h2 className="text-xl font-semibold mb-4">{getTranslation("addNewProduct", language)}</h2> */}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>{getTranslation("productName", language)}</FormLabel> */}
                                    <FormControl>
                                        {/* <Input placeholder={getTranslation("productNamePlaceholder", language)} {...field} /> */}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Price and Unit */}
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>{getTranslation("price", language)}</FormLabel> */}
                                        <FormControl>
                                            <Input type="number" step="0.01" placeholder="0.00" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="unit"
                                render={({ field }) => (
                                    <FormItem>
                                        {/* <FormLabel>{getTranslation("unit", language)}</FormLabel> */}
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    {/* <SelectValue placeholder={getTranslation("selectUnit", language)} /> */}
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="kg">kg</SelectItem>
                                                <SelectItem value="lb">lb</SelectItem>
                                                <SelectItem value="unit">unit</SelectItem>
                                                <SelectItem value="dozen">dozen</SelectItem>
                                                <SelectItem value="bunch">bunch</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Category */}
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>{getTranslation("category", language)}</FormLabel> */}
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                {/* <SelectValue placeholder={getTranslation("selectCategory", language)} /> */}
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {/* <SelectItem value="vegetables">{getTranslation("vegetables", language)}</SelectItem>
                                            <SelectItem value="fruits">{getTranslation("fruits", language)}</SelectItem>
                                            <SelectItem value="dairy">{getTranslation("dairy", language)}</SelectItem>
                                            <SelectItem value="meat">{getTranslation("meat", language)}</SelectItem>
                                            <SelectItem value="bakery">{getTranslation("bakery", language)}</SelectItem>
                                            <SelectItem value="other">{getTranslation("other", language)}</SelectItem> */}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Image URL */}
                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>{getTranslation("imageUrl", language)}</FormLabel> */}
                                    <FormControl>
                                        <Input placeholder="https://..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>{getTranslation("description", language)}</FormLabel> */}
                                <FormControl>
                                    <Textarea
                                        // placeholder={getTranslation("productDescriptionPlaceholder", language)}
                                        {...field}
                                        className="min-h-[120px]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Product Properties */}
                    <div className="space-y-4 pt-4">
                        {/* <h3 className="text-md font-medium">{getTranslation("productProperties", language)}</h3> */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="isOrganic"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                                        <div className="space-y-0.5">
                                            {/* <FormLabel>{getTranslation("organic", language)}</FormLabel> */}
                                        </div>
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="isSeasonal"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                                        <div className="space-y-0.5">
                                            {/* <FormLabel>{getTranslation("seasonal", language)}</FormLabel> */}
                                        </div>
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="isLocal"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                                        <div className="space-y-0.5">
                                            {/* <FormLabel>{getTranslation("locallyGrown", language)}</FormLabel> */}
                                        </div>
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="inStock"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                                        <div className="space-y-0.5">
                                            {/* <FormLabel>{getTranslation("inStock", language)}</FormLabel> */}
                                        </div>
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="pt-4">
                        {/* <p className="text-sm text-muted-foreground mb-2">{getTranslation("imagePreview", language)}</p> */}
                        <div className="aspect-square w-full max-w-[200px] overflow-hidden rounded-lg border">
                            <img
                                src={form.watch("imageUrl") || defaultValues.imageUrl}
                                // alt={getTranslation("productPreview", language)}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full md:w-auto bg-farm-green hover:bg-farm-green-dark"
                        disabled={isSubmitting}
                    >
                        {/* {isSubmitting ? getTranslation("addingProduct", language) : getTranslation("addProduct", language)} */}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
