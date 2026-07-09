import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { MadhubaniBorder } from "@/components/cultural/madhubani-border";

export function CultureSection() {
  return (
    <section className="py-20 md:py-24 bg-[var(--color-terracotta)] text-[var(--color-cream)] relative overflow-hidden">
      <MadhubaniBorder variant="horizontal" className="absolute top-0 left-0 w-full opacity-30 stroke-current text-white" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-sans text-sm tracking-[0.2em] uppercase text-[var(--color-beige)] mb-4">Mithila Heritage</h2>
            <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              "Paga Paga Pokhari, Macha Makhan"<br />
              <span className="italic font-light text-[var(--color-beige)]">The soul of Mithilanchal.</span>
            </h3>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--color-cream)]/90 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
              Our food is intertwined with our faith. The Thekua we bake isn't just a sweet; it is the quintessential offering of Chhath Puja, a prayer to the Sun God for health and prosperity. Every bite carries the devotion of a thousand festivals.
            </p>
            
            <Link 
              href="/mithila-culture"
              className="inline-flex items-center gap-3 text-[var(--color-cream)] hover:text-white transition-colors group pb-1 border-b border-[var(--color-cream)]/50 hover:border-white"
            >
              <span className="tracking-widest uppercase text-sm">Discover our culture</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>
      </div>
      
      <MadhubaniBorder variant="horizontal" className="absolute bottom-0 left-0 w-full opacity-30 stroke-current text-white transform rotate-180" />
    </section>
  );
}
