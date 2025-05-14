import { Farm, Product, SubscriptionBox, PickupLocation } from "../types";

export const farms: Farm[] = [
    {
        id: "farm1",
        name: "Green Valley Organic Farm",
        description: "Family-owned farm specializing in organic vegetables, fruits, and free-range eggs.",
        location: "Boulder, CO",
        distance: "5 miles",
        imageUrl: "/placeholder.svg",
        rating: 4.8,
        tags: ["organic", "family-owned", "vegetables", "fruits"],
        products: []
    },
    {
        id: "farm2",
        name: "Sunrise Dairy",
        description: "Local dairy farm offering fresh milk, cheese, yogurt, and butter from grass-fed cows.",
        location: "Lafayette, CO",
        distance: "8 miles",
        imageUrl: "/placeholder.svg",
        rating: 4.7,
        tags: ["dairy", "grass-fed", "local"],
        products: []
    },
    {
        id: "farm3",
        name: "Mountain View Orchards",
        description: "Specializing in seasonal fruits, berries, and fresh-pressed ciders.",
        location: "Longmont, CO",
        distance: "12 miles",
        imageUrl: "/placeholder.svg",
        rating: 4.9,
        tags: ["fruits", "cider", "seasonal"],
        products: []
    },
    {
        id: "farm4",
        name: "Heritage Ranch",
        description: "Ethically raised, grass-fed beef, pork, and free-range poultry.",
        location: "Louisville, CO",
        distance: "10 miles",
        imageUrl: "/placeholder.svg",
        rating: 4.6,
        tags: ["meat", "grass-fed", "ethical"],
        products: []
    },
];

export const products: Product[] = [
    {
        id: "prod1",
        farmId: "farm1",
        name: "Fresh Tomatoes",
        description: "Vine-ripened, organic tomatoes picked at peak freshness.",
        price: 3.99,
        unit: "lb",
        imageUrl: "/placeholder.svg",
        inStock: true,
        isOrganic: true,
        isLocal: true,
        isSeasonal: true,
        category: "vegetables"
    },
    {
        id: "prod2",
        farmId: "farm1",
        name: "Organic Lettuce",
        description: "Crisp, fresh lettuce grown without pesticides.",
        price: 2.49,
        unit: "head",
        imageUrl: "/placeholder.svg",
        inStock: true,
        isOrganic: true,
        isLocal: true,
        isSeasonal: true,
        category: "vegetables"
    },
    {
        id: "prod3",
        farmId: "farm2",
        name: "Farm Fresh Milk",
        description: "Pasteurized whole milk from grass-fed cows.",
        price: 4.99,
        unit: "half gallon",
        imageUrl: "/placeholder.svg",
        inStock: true,
        isOrganic: false,
        isLocal: true,
        isSeasonal: false,
        category: "dairy"
    },
    {
        id: "prod4",
        farmId: "farm2",
        name: "Artisan Cheese",
        description: "Small-batch, aged cheddar cheese.",
        price: 6.99,
        unit: "8 oz",
        imageUrl: "/placeholder.svg",
        inStock: true,
        isOrganic: false,
        isLocal: true,
        isSeasonal: false,
        category: "dairy"
    },
    {
        id: "prod5",
        farmId: "farm3",
        name: "Fresh Apples",
        description: "Crisp, sweet apples picked from our orchard.",
        price: 2.99,
        unit: "lb",
        imageUrl: "/placeholder.svg",
        inStock: true,
        isOrganic: false,
        isLocal: true,
        isSeasonal: true,
        category: "fruits"
    },
    {
        id: "prod6",
        farmId: "farm4",
        name: "Grass-Fed Ground Beef",
        description: "Lean ground beef from pasture-raised cattle.",
        price: 7.99,
        unit: "lb",
        imageUrl: "/placeholder.svg",
        inStock: true,
        isOrganic: false,
        isLocal: true,
        isSeasonal: false,
        category: "meat"
    },
];

// Add products to farms
farms.forEach(farm => {
    farm.products = products.filter(product => product.farmId === farm.id);
});

export const subscriptionBoxes: SubscriptionBox[] = [
    {
        id: "box1",
        name: "Vegetable Box",
        description: "Weekly assortment of seasonal vegetables from local farms.",
        price: 25.99,
        frequency: "weekly",
        contents: [
            { productId: "prod1", quantity: 2 },
            { productId: "prod2", quantity: 1 }
        ],
        imageUrl: "/placeholder.svg"
    },
    {
        id: "box2",
        name: "Mixed Farm Box",
        description: "Combination of fresh vegetables, fruits, and dairy products.",
        price: 35.99,
        frequency: "weekly",
        contents: [
            { productId: "prod1", quantity: 1 },
            { productId: "prod3", quantity: 1 },
            { productId: "prod5", quantity: 2 }
        ],
        imageUrl: "/placeholder.svg"
    },
    {
        id: "box3",
        name: "Family Essentials",
        description: "Complete package with vegetables, fruits, dairy, and meat for a family.",
        price: 59.99,
        frequency: "biweekly",
        contents: [
            { productId: "prod1", quantity: 2 },
            { productId: "prod3", quantity: 1 },
            { productId: "prod5", quantity: 3 },
            { productId: "prod6", quantity: 1 }
        ],
        imageUrl: "/placeholder.svg"
    }
];

export const pickupLocations: PickupLocation[] = [
    {
        id: "loc1",
        name: "Downtown Farmers Market",
        address: "1234 Main St, Boulder, CO 80302",
        latitude: 40.0150,
        longitude: -105.2705,
        availableDays: ["Saturday", "Wednesday"],
        availableTimeSlots: [
            {
                day: "Saturday",
                slots: ["8:00 AM - 12:00 PM"]
            },
            {
                day: "Wednesday",
                slots: ["3:00 PM - 7:00 PM"]
            }
        ]
    },
    {
        id: "loc2",
        name: "Community Center",
        address: "5678 Oak Ave, Boulder, CO 80303",
        latitude: 40.0176,
        longitude: -105.2797,
        availableDays: ["Monday", "Thursday"],
        availableTimeSlots: [
            {
                day: "Monday",
                slots: ["4:00 PM - 7:00 PM"]
            },
            {
                day: "Thursday",
                slots: ["4:00 PM - 7:00 PM"]
            }
        ]
    },
    {
        id: "loc3",
        name: "Green Valley Farm Store",
        address: "9012 County Rd, Lafayette, CO 80026",
        latitude: 39.9935,
        longitude: -105.0897,
        availableDays: ["Tuesday", "Friday", "Saturday"],
        availableTimeSlots: [
            {
                day: "Tuesday",
                slots: ["10:00 AM - 6:00 PM"]
            },
            {
                day: "Friday",
                slots: ["10:00 AM - 6:00 PM"]
            },
            {
                day: "Saturday",
                slots: ["9:00 AM - 3:00 PM"]
            }
        ]
    }
];
