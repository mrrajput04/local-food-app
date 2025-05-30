import { Farm, Product, SubscriptionBox, PickupLocation, Order, Review } from "@/types";

// Farms Data
export const farms: Farm[] = [
	{
		id: "farm1",
		name: "Green Valley Organics",
		description: "Certified organic farm specializing in heirloom vegetables and free-range eggs. We believe in sustainable agriculture and biodiversity.",
		location: "Boulder, CO",
		distance: "5 miles",
		imageUrl: "/placeholder.svg",
		rating: 4.8,
		reviewCount: 132, // Added reviewCount
		tags: ["Organic", "Heirloom", "Family Owned"],
		products: [] // Filled later
	},
	{
		id: "farm2",
		name: "Happy Pastures Dairy",
		description: "Family-owned dairy farm producing fresh milk, cheese, and yogurt from grass-fed cows. Our animals are treated with care and respect.",
		location: "Longmont, CO",
		distance: "12 miles",
		imageUrl: "/placeholder.svg",
		rating: 4.5,
		reviewCount: 89, // Added reviewCount
		tags: ["Dairy", "Grass-fed", "Local"],
		products: [] // Filled later
	},
	{
		id: "farm3",
		name: "Sunrise Orchards",
		description: "Orchard growing a variety of seasonal fruits like apples, peaches, and berries. We use integrated pest management techniques.",
		location: "Lafayette, CO",
		distance: "8 miles",
		imageUrl: "/placeholder.svg",
		rating: 4.2,
		// reviewCount: undefined, // Example of a farm without reviewCount
		tags: ["Fruits", "Seasonal", "U-Pick"],
		products: []
	},
];

// Products Data
export const products: Product[] = [
	{
		id: "prod1",
		farmId: "farm1",
		name: "Organic Rainbow Carrots",
		description: "A colorful mix of fresh, crunchy organic carrots. Perfect for roasting or snacking.",
		price: 3.99,
		unit: "bunch",
		imageUrl: "/placeholder.svg",
		inStock: true,
		isOrganic: true,
		isLocal: true,
		isSeasonal: false,
		category: "vegetables",
		averageRating: 4.7, // Added averageRating
		reviewCount: 45, // Added reviewCount
	},
	{
		id: "prod2",
		farmId: "farm1",
		name: "Free-Range Eggs",
		description: "Farm-fresh eggs from happy, free-range chickens. Rich yolks and excellent flavor.",
		price: 5.50,
		unit: "dozen",
		imageUrl: "/placeholder.svg",
		inStock: true,
		isOrganic: true,
		isLocal: true,
		isSeasonal: false,
		category: "other", // Could be dairy or other
		averageRating: 4.9, // Added averageRating
		reviewCount: 78, // Added reviewCount
	},
	{
		id: "prod3",
		farmId: "farm2",
		name: "Grass-Fed Whole Milk",
		description: "Creamy and delicious whole milk from grass-fed cows. Pasteurized but not homogenized.",
		price: 4.25,
		unit: "gallon",
		imageUrl: "/placeholder.svg",
		inStock: true,
		isOrganic: false, // Assuming not explicitly certified organic but grass-fed
		isLocal: true,
		isSeasonal: false,
		category: "dairy",
		averageRating: 4.6, // Added averageRating
		reviewCount: 62, // Added reviewCount
	},
	{
		id: "prod4",
		farmId: "farm2",
		name: "Artisanal Cheddar Cheese",
		description: "Sharp and flavorful cheddar cheese, aged for 6 months. Made with milk from our grass-fed cows.",
		price: 8.00,
		unit: "lb",
		imageUrl: "/placeholder.svg",
		inStock: false,
		isOrganic: false,
		isLocal: true,
		isSeasonal: false,
		category: "dairy",
		averageRating: 4.3,
		reviewCount: 30,
	},
	{
		id: "prod5",
		farmId: "farm3",
		name: "Honeycrisp Apples",
		description: "Sweet and crisp Honeycrisp apples, perfect for eating fresh or baking.",
		price: 3.00,
		unit: "lb",
		imageUrl: "/placeholder.svg",
		inStock: true,
		isOrganic: false,
		isLocal: true,
		isSeasonal: true,
		category: "fruits",
		// averageRating: undefined, // Example of product without rating
		// reviewCount: undefined, 
	},
];

// Assign products to farms
farms.forEach(farm => {
	farm.products = products.filter(p => p.farmId === farm.id);
});

// Subscription Boxes Data
export const subscriptionBoxes: SubscriptionBox[] = [
	{
		id: "sub1",
		name: "Weekly Veggie Box",
		description: "A curated selection of the freshest seasonal vegetables from our local farms.",
		price: 25.00,
		frequency: "weekly",
		contents: [
			{ productId: "prod1", quantity: 2 },
			{ productId: "prod5", quantity: 1 }
		],
		imageUrl: "/placeholder.svg"
	},
	{
		id: "sub2",
		name: "Monthly Fruit Basket",
		description: "A delightful assortment of seasonal fruits, perfect for snacking or adding to your favorite recipes.",
		price: 30.00,
		frequency: "monthly",
		contents: [
			{ productId: "prod5", quantity: 3 }
		],
		imageUrl: "/placeholder.svg"
	}
];

// Pickup Locations Data
export const pickupLocations: PickupLocation[] = [
	{
		id: "loc1",
		name: "Boulder Farmers Market",
		address: "13th Street, Boulder, CO",
		latitude: 40.0175,
		longitude: -105.2797,
		availableDays: ["Saturday"],
		availableTimeSlots: [
			{ day: "Saturday", slots: ["8:00 AM - 2:00 PM"] }
		]
	},
	{
		id: "loc2",
		name: "Longmont Farm Stand",
		address: "Main Street, Longmont, CO",
		latitude: 40.1672,
		longitude: -105.1019,
		availableDays: ["Tuesday", "Friday"],
		availableTimeSlots: [
			{ day: "Tuesday", slots: ["10:00 AM - 4:00 PM"] },
			{ day: "Friday", slots: ["10:00 AM - 4:00 PM"] }
		]
	}
];

// Orders Data
export const orders: Order[] = [
	{
		id: "order1",
		userId: "user1",
		status: "pending",
		createdAt: "2024-07-01T10:00:00.000Z",
		updatedAt: "2024-07-01T10:00:00.000Z",
		total: 25.00,
		items: [
			{
				id: "item1",
				orderId: "order1",
				productId: "prod1",
				product: products.find(p => p.id === "prod1")!,
				quantity: 2,
				price: 3.99
			}
		],
		pickupLocationId: "loc1",
		deliveryAddress: null,
		pickupTime: "2024-07-06T10:00:00.000Z",
		farmId: "farm1"
	},
	{
		id: "order2",
		userId: "user2",
		status: "processing",
		createdAt: "2024-07-03T14:00:00.000Z",
		updatedAt: "2024-07-03T15:00:00.000Z",
		total: 30.00,
		items: [
			{
				id: "item2",
				orderId: "order2",
				productId: "prod5",
				product: products.find(p => p.id === "prod5")!,
				quantity: 3,
				price: 3.00
			}
		],
		pickupLocationId: null,
		deliveryAddress: "123 Main Street, Anytown, USA",
		pickupTime: null,
		farmId: "farm3"
	}
];

// Reviews Data
export const reviews: Review[] = [
	{
		id: "review1",
		userId: "userTest1",
		userName: "Alice Wonderland",
		entityId: "prod1",
		entityType: "product",
		rating: 5,
		comment: "Absolutely delicious carrots! So fresh and crunchy.",
		createdAt: "2025-05-10T10:00:00.000Z",
	},
	{
		id: "review2",
		userId: "userTest2",
		userName: "Bob The Builder",
		entityId: "prod1",
		entityType: "product",
		rating: 4,
		comment: "Great quality, a bit pricey but worth it for organic.",
		createdAt: "2025-05-11T14:30:00.000Z",
	},
	{
		id: "review3",
		userId: "userTest1",
		userName: "Alice Wonderland",
		entityId: "farm1",
		entityType: "farm",
		rating: 5,
		comment: "Green Valley Organics is my go-to for fresh produce. Amazing quality and friendly staff!",
		createdAt: "2025-05-12T09:15:00.000Z",
	},
];

// Function to add a review and update related entity's average rating and review count
export function addReview(reviewData: {
	entityId: string;
	entityType: "product" | "farm";
	rating: number;
	comment: string;
	userName?: string; // Optional, defaults if not provided
	userId?: string; // Optional, defaults if not provided
}): Review {
	const newReview: Review = {
		id: `review-${Date.now()}-${Math.random().toString(16).slice(2)}`,
		userId: reviewData.userId || "mockUserCurrent", // Placeholder for current user
		userName: reviewData.userName || "Anonymous User", // Placeholder
		createdAt: new Date().toISOString(),
		entityId: reviewData.entityId,
		entityType: reviewData.entityType,
		rating: reviewData.rating,
		comment: reviewData.comment,
	};
	reviews.unshift(newReview); // Add to the beginning of the array

	// Update average rating and review count for the entity
	if (newReview.entityType === "product") {
		const product = products.find(p => p.id === newReview.entityId);
		if (product) {
			const productReviews = reviews.filter(r => r.entityId === product.id && r.entityType === "product");
			const totalRating = productReviews.reduce((sum, r) => sum + r.rating, 0);
			product.averageRating = productReviews.length > 0 ? parseFloat((totalRating / productReviews.length).toFixed(1)) : 0;
			product.reviewCount = productReviews.length;
		}
	} else if (newReview.entityType === "farm") {
		const farm = farms.find(f => f.id === newReview.entityId);
		if (farm) {
			const farmReviews = reviews.filter(r => r.entityId === farm.id && r.entityType === "farm");
			const totalRating = farmReviews.reduce((sum, r) => sum + r.rating, 0);
			farm.rating = farmReviews.length > 0 ? parseFloat((totalRating / farmReviews.length).toFixed(1)) : 0;
			farm.reviewCount = farmReviews.length;
		}
	}
	// console.log('Added review:', newReview);
	// console.log('Updated reviews array:', reviews);
	// if (newReview.entityType === "product") console.log('Updated product:', products.find(p=>p.id === newReview.entityId));
	// if (newReview.entityType === "farm") console.log('Updated farm:', farms.find(f=>f.id === newReview.entityId));
	return newReview;
}
