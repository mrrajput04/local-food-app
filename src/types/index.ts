export interface Farm {
	id: string;
	name: string;
	description: string;
	location: string;
	distance: string;
	imageUrl: string;
	rating: number; // This will be used as averageRating for farms
	reviewCount?: number; // Added reviewCount
	tags: string[];
	products: Product[];
}

export interface Product {
	id: string;
	farmId: string;
	name: string;
	description: string;
	price: number;
	unit: string; // e.g., "lb", "bunch", "dozen"
	imageUrl: string;
	inStock: boolean;
	isOrganic: boolean;
	isLocal: boolean;
	isSeasonal: boolean;
	category: "vegetables" | "fruits" | "dairy" | "meat" | "bakery" | "other";
	averageRating?: number; // Added averageRating
	reviewCount?: number; // Added reviewCount
}

export interface SubscriptionBox {
	id: string;
	name: string;
	description: string;
	price: number;
	frequency: "weekly" | "biweekly" | "monthly";
	contents: {
		productId: string;
		quantity: number;
	}[];
	imageUrl: string;
}

export interface PickupLocation {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
	availableDays: string[]; // e.g., ["Monday", "Thursday"]
	availableTimeSlots: {
		day: string;
		slots: string[]; // e.g., ["9:00 AM - 11:00 AM", "3:00 PM - 6:00 PM"]
	}[];
}

export interface Order {
	id: string;
	userId: string;
	status: "pending" | "processing" | "ready" | "delivered" | "cancelled";
	createdAt: string;
	updatedAt: string;
	total: number;
	items: OrderItem[];
	pickupLocationId: string | null;
	deliveryAddress: string | null;
	pickupTime: string | null;
	farmId: string;
}

export interface OrderItem {
	id: string;
	orderId: string;
	productId: string;
	product: Product;
	quantity: number;
	price: number;
}