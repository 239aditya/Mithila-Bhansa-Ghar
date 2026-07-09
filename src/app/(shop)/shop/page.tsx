import { Metadata } from "next";
import { getAllProducts } from "@/lib/shopify/client";
import { ProductCard } from "@/features/shop/components/product-card";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionDivider } from "@/components/cultural/section-divider";

export const metadata: Metadata = {
  title: "Shop | Mithila Bhansa Ghar",
  description: "Browse our authentic, handmade Mithila delicacies.",
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeIn>
            <h1 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-terracotta)] mb-4">All Offerings</h1>
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-text-primary)] mb-6">
              Our <span className="italic">Kitchen</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg">
              Everything here is handmade in small batches. We take our time, so you can taste the patience in every bite.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 0.1} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-secondary)]">
            Our kitchen is currently preparing the next batch. Check back soon.
          </div>
        )}

      </div>
      
      <SectionDivider className="mt-32" />
    </div>
  );
}
