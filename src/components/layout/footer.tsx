import Link from "next/link";
import { MadhubaniBorder } from "@/components/cultural/madhubani-border";

export function Footer() {
  return (
    <footer className="bg-[var(--color-cream)] pt-16 pb-8 text-[var(--color-text-secondary)] mt-auto relative overflow-hidden">
      <MadhubaniBorder className="absolute top-0 left-0" />
      
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl text-[var(--color-text-primary)] mb-4">Bhansa Ghar</h2>
            <p className="max-w-md italic mb-6">
              "Some recipes deserve to stay exactly as they were. We preserve memories, traditions, and the taste of home."
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase text-[var(--color-text-primary)] mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="hover:text-[var(--color-terracotta)] transition-colors">All Products</Link></li>
              <li><Link href="/reviews" className="hover:text-[var(--color-terracotta)] transition-colors">Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--color-terracotta)] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm tracking-widest uppercase text-[var(--color-text-primary)] mb-4">Brand</h3>
            <ul className="space-y-3">
              <li><Link href="/our-story" className="hover:text-[var(--color-terracotta)] transition-colors">Our Story</Link></li>
              <li><Link href="/mithila-culture" className="hover:text-[var(--color-terracotta)] transition-colors">Mithila Culture</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-terracotta)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-terracotta)]/20 text-sm">
          <p>&copy; {new Date().getFullYear()} Mithila Bhansa Ghar. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[var(--color-terracotta)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-terracotta)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
