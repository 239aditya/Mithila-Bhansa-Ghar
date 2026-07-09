import Link from "next/link";
import { getAllProducts } from "@/lib/shopify/client";
import { ProductCard } from "@/features/shop/components/product-card";
import { FadeIn } from "@/components/motion/fade-in";

export async function FeaturedProducts() {
  const products = await getAllProducts();
  
  // For the homepage, we'll duplicate the single product variant in mock data 
  // or layout products in a staggered, curated offset grid.
  // Since we currently have 1 product in mock, we'll display two cards to demonstrate
  // the layout (e.g. the standard product and a mock variant box).
  const primaryProduct = products[0];
  const secondaryProduct = products[1] || primaryProduct;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream)]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <FadeIn duration={1.6}>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4 block font-semibold">
              The Offerings
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] text-[var(--color-text-primary)] leading-[1.0] tracking-tight">
              Curated from our <span className="italic font-light text-[var(--color-terracotta)]">hearts</span> to yours, <br />
              every bite brings you <span className="italic font-light text-[var(--color-terracotta)]">home.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.3} duration={1.6}>
            <Link 
              href="/shop"
              className="group inline-flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-terracotta)] transition-colors duration-300 pb-1 border-b border-[var(--color-text-primary)] hover:border-[var(--color-terracotta)] cursor-pointer"
            >
              <span className="font-sans text-xs tracking-widest uppercase font-semibold">View All Delicacies</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300 stroke-current">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>

        {/* Asymmetrical Staggered Spreads */}
        {primaryProduct && secondaryProduct && (
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
            {/* Primary Product: Large, Dominant Card */}
            <div className="w-full md:w-[58%]">
              <ProductCard product={primaryProduct} delay={0.1} />
            </div>
            
            {/* Secondary Product: Staggered, Offset Card */}
            <div className="w-full md:w-[42%] md:pt-32 lg:pt-48">
              <ProductCard product={secondaryProduct} delay={0.4} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
