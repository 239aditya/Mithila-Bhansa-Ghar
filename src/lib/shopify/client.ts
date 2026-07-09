import { Product, Collection } from "./types";
import { mockThekuaProduct, mockCollections } from "./mock-data";

// This client will eventually connect to the real Shopify Storefront API.
// For now, it returns the mock data to unblock frontend development.
export async function getProduct(handle: string): Promise<Product | null> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  if (handle === "traditional-khasta-thekua") {
    return mockThekuaProduct;
  }
  return null;
}

export async function getCollectionProducts(handle: string): Promise<Collection | null> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockCollections[handle] || null;
}

export async function getAllProducts(): Promise<Product[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [mockThekuaProduct];
}
