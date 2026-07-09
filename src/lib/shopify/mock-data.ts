import { Product, Collection } from "./types";

const mockImages = [
  { url: "/images/product/thekua-closeup.jpg", altText: "Thekua close up", width: 1200, height: 1500 },
  { url: "/images/product/thekua-plate-overhead.jpg", altText: "Thekua on plate", width: 1200, height: 1200 },
  { url: "/images/packaging/kraft-pouches-front.jpg", altText: "Thekua packaging front", width: 1200, height: 1500 },
  { url: "/images/packaging/kraft-pouches-back.jpg", altText: "Thekua packaging back", width: 1200, height: 1500 },
];

export const mockThekuaProduct: Product = {
  id: "gid://shopify/Product/1",
  handle: "traditional-khasta-thekua",
  title: "Traditional Khasta Thekua",
  description: "Handcrafted with patience, reverence, and the warmth of a mother's touch. Our Thekua is the quintessential taste of Mithila, made with pure ghee, unrefined jaggery, and stone-ground wheat.",
  descriptionHtml: "<p>Handcrafted with patience, reverence, and the warmth of a mother's touch. Our Thekua is the quintessential taste of Mithila, made with pure ghee, unrefined jaggery, and stone-ground wheat.</p>",
  availableForSale: true,
  images: {
    edges: mockImages.map(img => ({ node: img }))
  },
  priceRange: {
    minVariantPrice: { amount: "399.00", currencyCode: "INR" },
    maxVariantPrice: { amount: "749.00", currencyCode: "INR" }
  },
  variants: {
    edges: [
      {
        node: {
          id: "gid://shopify/ProductVariant/1",
          title: "400g Pouch",
          availableForSale: true,
          selectedOptions: [{ name: "Size", value: "400g" }],
          price: { amount: "399.00", currencyCode: "INR" },
          compareAtPrice: null
        }
      },
      {
        node: {
          id: "gid://shopify/ProductVariant/2",
          title: "Festive Gift Box (2x 400g)",
          availableForSale: true,
          selectedOptions: [{ name: "Size", value: "800g" }],
          price: { amount: "749.00", currencyCode: "INR" },
          compareAtPrice: { amount: "798.00", currencyCode: "INR" }
        }
      }
    ]
  },
  ingredients: {
    key: "ingredients",
    type: "multi_line_text_field",
    value: "Whole Wheat Flour (Atta), Refined Wheat Flour (Maida), Semolina (Sooji), Pure Ghee, Unrefined Jaggery (Gur), Dry Coconut, Fennel Seeds (Saunf), Cinnamon Powder, Fresh Cream (Malai), Sugar."
  },
  preparation: {
    key: "preparation",
    type: "multi_line_text_field",
    value: "Dough is kneaded by hand until the perfect texture is reached. Shaped in traditional wooden sanchas, then slow-fried in small batches on a low flame."
  },
  storage: {
    key: "storage",
    type: "multi_line_text_field",
    value: "Store in an airtight container in a cool, dry place. Do not refrigerate. Keep away from direct sunlight."
  },
  shelfLife: {
    key: "shelf_life",
    type: "single_line_text_field",
    value: "20 Days"
  }
};

export const mockCollections: Record<string, Collection> = {
  "all-offerings": {
    id: "gid://shopify/Collection/1",
    handle: "all-offerings",
    title: "All Offerings",
    description: "Discover our handmade delicacies, preserving the true taste of Mithilanchal.",
    products: {
      pageInfo: { hasNextPage: false, endCursor: "" },
      edges: [{ node: mockThekuaProduct }]
    }
  }
};
