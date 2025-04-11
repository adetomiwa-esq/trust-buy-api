import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: String, // Product name
    slug: String, // URL-friendly name (e.g., nike-air-force)
    description: String, // Full product description
    shortDescription: String, // Brief overview for listings
    price: { type: Number, required: true }, // Regular price
    salePrice: Number, // Discounted price if any
    inStock: Boolean, // Availability
    quantity: Number, // Inventory count
    sku: String, // Unique product code
    brand: String, // Brand name
    category: String, // Main category (e.g., "shoes")
    subcategories: [String], // e.g., ["men", "sports"]
    tags: [String], // For filtering/searching
    images: [
      // Array of product image URLs
      {
        url: String,
        alt: String,
      },
    ],
    thumbnail: String, // Main image for listings
    colors: [String], // Available colors
    sizes: [String], // e.g., ["S", "M", "L"] or shoe sizes
    rating: Number, // Average customer rating
    reviewsCount: Number, // Number of reviews
    isFeatured: Boolean, // For homepage or promo display
  },
  { timestamps: true }
);

const productModel = mongoose.model("good", productSchema);

export default productModel;
