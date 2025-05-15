
import { useState } from "react";
import { getTranslation } from "@/utils/translations";
import { Order } from "@/types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

// Mock data for demonstration
const mockOrders: Order[] = [
    {
        id: "order-1",
        userId: "user-123",
        status: "delivered",
        createdAt: "2025-04-10T10:30:00Z",
        updatedAt: "2025-04-10T15:45:00Z",
        total: 58.75,
        items: [
            {
                id: "item-1",
                orderId: "order-1",
                productId: "product-1",
                product: {
                    id: "product-1",
                    farmId: "farm-1",
                    name: "Organic Tomatoes",
                    description: "Fresh locally grown tomatoes",
                    price: 3.99,
                    unit: "lb",
                    imageUrl: "/placeholder.svg",
                    inStock: true,
                    isOrganic: true,
                    isLocal: true,
                    isSeasonal: true,
                    category: "vegetables"
                },
                quantity: 2,
                price: 7.98
            },
            {
                id: "item-2",
                orderId: "order-1",
                productId: "product-2",
                product: {
                    id: "product-2",
                    farmId: "farm-1",
                    name: "Free-range Eggs",
                    description: "Farm fresh eggs",
                    price: 5.99,
                    unit: "dozen",
                    imageUrl: "/placeholder.svg",
                    inStock: true,
                    isOrganic: true,
                    isLocal: true,
                    isSeasonal: true,
                    category: "dairy"
                },
                quantity: 1,
                price: 5.99
            }
        ],
        pickupLocationId: "location-1",
        deliveryAddress: null,
        pickupTime: "2025-04-12T14:00:00Z",
        farmId: "farm-1"
    },
    {
        id: "order-2",
        userId: "user-123",
        status: "processing",
        createdAt: "2025-05-05T11:20:00Z",
        updatedAt: "2025-05-05T12:15:00Z",
        total: 43.25,
        items: [
            {
                id: "item-3",
                orderId: "order-2",
                productId: "product-3",
                product: {
                    id: "product-3",
                    farmId: "farm-2",
                    name: "Organic Carrots",
                    description: "Sweet and crunchy carrots",
                    price: 2.49,
                    unit: "bunch",
                    imageUrl: "/placeholder.svg",
                    inStock: true,
                    isOrganic: true,
                    isLocal: true,
                    isSeasonal: true,
                    category: "vegetables"
                },
                quantity: 3,
                price: 7.47
            }
        ],
        pickupLocationId: null,
        deliveryAddress: "123 Main St, Farmville, CA 95432",
        pickupTime: null,
        farmId: "farm-2"
    }
];

interface ConsumerOrderViewProps {
    language: string;
}

export default function ConsumerOrderView({ language }: ConsumerOrderViewProps) {
    const [orders, setOrders] = useState<Order[]>(mockOrders);
    const [activeTab, setActiveTab] = useState<"current" | "past">("current");

    // Filter orders by status - current: pending, processing, ready; past: delivered, cancelled
    const currentOrders = orders.filter(order =>
        ["pending", "processing", "ready"].includes(order.status)
    );

    const pastOrders = orders.filter(order =>
        ["delivered", "cancelled"].includes(order.status)
    );

    const displayOrders = activeTab === "current" ? currentOrders : pastOrders;

    // Status badge color mapping
    const getStatusColor = (status: Order["status"]) => {
        switch (status) {
            case "pending": return "bg-yellow-500";
            case "processing": return "bg-blue-500";
            case "ready": return "bg-green-500";
            case "delivered": return "bg-green-700";
            case "cancelled": return "bg-red-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <div>
            <div className="mb-6 border-b">
                <div className="flex space-x-4">
                    <button
                        className={`px-4 py-2 ${activeTab === "current"
                            ? "border-b-2 border-farm-green text-farm-green font-medium"
                            : "text-gray-500"}`}
                        onClick={() => setActiveTab("current")}
                    >
                        {getTranslation("currentOrders", language)}
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === "past"
                            ? "border-b-2 border-farm-green text-farm-green font-medium"
                            : "text-gray-500"}`}
                        onClick={() => setActiveTab("past")}
                    >
                        {getTranslation("pastOrders", language)}
                    </button>
                </div>
            </div>

            {displayOrders.length === 0 ? (
                <Card className="p-8 text-center">
                    <p className="text-lg text-gray-500">
                        {getTranslation(activeTab === "current" ? "noCurrentOrders" : "noPastOrders", language)}
                    </p>
                </Card>
            ) : (
                <div className="space-y-6">
                    {displayOrders.map(order => (
                        <Card key={order.id} className="overflow-hidden">
                            <div className="p-4 border-b bg-muted/30">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div>
                                        <p className="font-medium">
                                            {getTranslation("orderId", language)}: {order.id}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {getTranslation("ordered", language)}: {formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge className={getStatusColor(order.status)}>
                                            {getTranslation(order.status, language)}
                                        </Badge>
                                        <span className="font-semibold">${order.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>{getTranslation("product", language)}</TableHead>
                                            <TableHead className="text-right">{getTranslation("quantity", language)}</TableHead>
                                            <TableHead className="text-right">{getTranslation("price", language)}</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {order.items.map(item => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100">
                                                            <img
                                                                src={item.product.imageUrl}
                                                                alt={item.product.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-medium">{item.product.name}</p>
                                                            <p className="text-xs text-muted-foreground">{item.product.unit}</p>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-right">{item.quantity}</TableCell>
                                                <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                                <div className="mt-4 pt-4 border-t">
                                    <div className="flex flex-col sm:flex-row justify-between">
                                        <div>
                                            {order.pickupLocationId ? (
                                                <p><span className="font-medium">{getTranslation("pickup", language)}:</span> {getTranslation("pickupDetails", language)}</p>
                                            ) : (
                                                <p><span className="font-medium">{getTranslation("delivery", language)}:</span> {order.deliveryAddress}</p>
                                            )}
                                        </div>
                                        <div className="mt-2 sm:mt-0">
                                            <button className="text-farm-green hover:text-farm-green-dark">
                                                {getTranslation("viewDetails", language)}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}