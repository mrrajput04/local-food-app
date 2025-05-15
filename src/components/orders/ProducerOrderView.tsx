
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

// Mock data for demonstration
const mockOrders: Order[] = [
    {
        id: "order-1",
        userId: "user-1",
        status: "processing",
        createdAt: "2025-05-11T09:30:00Z",
        updatedAt: "2025-05-11T10:45:00Z",
        total: 35.95,
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
                quantity: 3,
                price: 11.97
            }
        ],
        pickupLocationId: "location-1",
        deliveryAddress: null,
        pickupTime: "2025-05-13T15:00:00Z",
        farmId: "farm-1"
    },
    {
        id: "order-2",
        userId: "user-2",
        status: "pending",
        createdAt: "2025-05-11T14:20:00Z",
        updatedAt: "2025-05-11T14:20:00Z",
        total: 27.50,
        items: [
            {
                id: "item-2",
                orderId: "order-2",
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
                quantity: 2,
                price: 11.98
            }
        ],
        pickupLocationId: null,
        deliveryAddress: "456 Oak St, Farmville, CA 95432",
        pickupTime: null,
        farmId: "farm-1"
    },
    {
        id: "order-3",
        userId: "user-3",
        status: "ready",
        createdAt: "2025-05-10T16:45:00Z",
        updatedAt: "2025-05-11T11:30:00Z",
        total: 42.75,
        items: [
            {
                id: "item-3",
                orderId: "order-3",
                productId: "product-3",
                product: {
                    id: "product-3",
                    farmId: "farm-1",
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
                quantity: 4,
                price: 9.96
            }
        ],
        pickupLocationId: "location-2",
        deliveryAddress: null,
        pickupTime: "2025-05-12T16:00:00Z",
        farmId: "farm-1"
    }
];

interface ProducerOrderViewProps {
    language: string;
}

export default function ProducerOrderView({ language }: ProducerOrderViewProps) {
    const [orders, setOrders] = useState<Order[]>(mockOrders);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    // Function to update order status
    const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
        setOrders(prev =>
            prev.map(order =>
                order.id === orderId
                    ? {
                        ...order,
                        status: newStatus,
                        updatedAt: new Date().toISOString()
                    }
                    : order
            )
        );
    };

    // Filter orders by status
    const pendingOrders = orders.filter(order => order.status === "pending");
    const processingOrders = orders.filter(order => order.status === "processing");
    const readyOrders = orders.filter(order => order.status === "ready");

    // Filter orders by pickup date for the calendar view
    const pickupOrders = orders.filter(order => {
        if (!order.pickupTime || !selectedDate) return false;

        const pickupDate = new Date(order.pickupTime);
        return pickupDate.toDateString() === selectedDate.toDateString();
    });

    return (
        <Tabs defaultValue="pending" className="space-y-4">
            <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="pending">
                    {getTranslation("pending", language)} ({pendingOrders.length})
                </TabsTrigger>
                <TabsTrigger value="processing">
                    {getTranslation("processing", language)} ({processingOrders.length})
                </TabsTrigger>
                <TabsTrigger value="ready">
                    {getTranslation("ready", language)} ({readyOrders.length})
                </TabsTrigger>
                <TabsTrigger value="calendar">
                    {getTranslation("pickupCalendar", language)}
                </TabsTrigger>
            </TabsList>

            {/* Pending Orders Tab */}
            <TabsContent value="pending" className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">{getTranslation("pendingOrders", language)}</h2>
                {pendingOrders.length === 0 ? (
                    <Card className="p-8 text-center">
                        <p className="text-lg text-gray-500">{getTranslation("noPendingOrders", language)}</p>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {pendingOrders.map(order => (
                            <OrderCard
                                key={order.id}
                                order={order}
                                language={language}
                                onUpdateStatus={updateOrderStatus}
                                showActionButtons={true}
                            />
                        ))}
                    </div>
                )}
            </TabsContent>

            {/* Processing Orders Tab */}
            <TabsContent value="processing" className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">{getTranslation("processingOrders", language)}</h2>
                {processingOrders.length === 0 ? (
                    <Card className="p-8 text-center">
                        <p className="text-lg text-gray-500">{getTranslation("noProcessingOrders", language)}</p>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {processingOrders.map(order => (
                            <OrderCard
                                key={order.id}
                                order={order}
                                language={language}
                                onUpdateStatus={updateOrderStatus}
                                showActionButtons={true}
                            />
                        ))}
                    </div>
                )}
            </TabsContent>

            {/* Ready for Pickup Tab */}
            <TabsContent value="ready" className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">{getTranslation("readyOrders", language)}</h2>
                {readyOrders.length === 0 ? (
                    <Card className="p-8 text-center">
                        <p className="text-lg text-gray-500">{getTranslation("noReadyOrders", language)}</p>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        {readyOrders.map(order => (
                            <OrderCard
                                key={order.id}
                                order={order}
                                language={language}
                                onUpdateStatus={updateOrderStatus}
                                showActionButtons={true}
                            />
                        ))}
                    </div>
                )}
            </TabsContent>

            {/* Calendar View Tab */}
            <TabsContent value="calendar" className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4">{getTranslation("pickupSchedule", language)}</h2>

                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                    <div>
                        <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className="border rounded-md p-3"
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-4">
                            {selectedDate ? (
                                `${getTranslation("pickupsFor", language)} ${format(selectedDate, 'PPP')}`
                            ) : (
                                getTranslation("selectDate", language)
                            )}
                        </h3>

                        {pickupOrders.length === 0 ? (
                            <Card className="p-8 text-center">
                                <p className="text-lg text-gray-500">{getTranslation("noPickupsScheduled", language)}</p>
                            </Card>
                        ) : (
                            <div className="space-y-4">
                                {pickupOrders.map(order => (
                                    <OrderCard
                                        key={order.id}
                                        order={order}
                                        language={language}
                                        onUpdateStatus={updateOrderStatus}
                                        showActionButtons={false}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
}

interface OrderCardProps {
    order: Order;
    language: string;
    onUpdateStatus: (orderId: string, status: Order["status"]) => void;
    showActionButtons: boolean;
}

function OrderCard({ order, language, onUpdateStatus, showActionButtons }: OrderCardProps) {
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
        <Card className="overflow-hidden">
            <div className="p-4 border-b bg-muted/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                        <p className="font-medium">
                            {getTranslation("orderId", language)}: {order.id}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {getTranslation("ordered", language)}: {new Date(order.createdAt).toLocaleString()}
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
                                <p>
                                    <span className="font-medium">{getTranslation("pickup", language)}:</span>
                                    {order.pickupTime && new Date(order.pickupTime).toLocaleString()}
                                </p>
                            ) : (
                                <p>
                                    <span className="font-medium">{getTranslation("delivery", language)}:</span>
                                    {order.deliveryAddress}
                                </p>
                            )}
                            <p className="mt-1">
                                <span className="font-medium">{getTranslation("customer", language)}:</span>
                                User #{order.userId}
                            </p>
                        </div>

                        {showActionButtons && (
                            <div className="mt-4 sm:mt-0 flex flex-wrap gap-2">
                                {order.status === "pending" && (
                                    <>
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                            onClick={() => onUpdateStatus(order.id, "processing")}
                                        >
                                            {getTranslation("startProcessing", language)}
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => onUpdateStatus(order.id, "cancelled")}
                                        >
                                            {getTranslation("cancel", language)}
                                        </button>
                                    </>
                                )}
                                {order.status === "processing" && (
                                    <button
                                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                        onClick={() => onUpdateStatus(order.id, "ready")}
                                    >
                                        {getTranslation("markReady", language)}
                                    </button>
                                )}
                                {order.status === "ready" && (
                                    <button
                                        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                                        onClick={() => onUpdateStatus(order.id, "delivered")}
                                    >
                                        {getTranslation("markDelivered", language)}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}