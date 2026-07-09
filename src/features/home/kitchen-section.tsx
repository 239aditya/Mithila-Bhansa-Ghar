import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";

export function KitchenSection() {
  return (
    <section className="pt-10 pb-20 md:pt-20 md:pb-28 bg-[var(--color-warm-white)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Title */}
        <div className="max-w-3xl mb-12 md:mb-24">
          <FadeIn duration={1.6}>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4 block font-semibold">
              The Process
            </span>
            <h2 className="font-serif text-[40px] md:text-[56px] text-[var(--color-text-primary)] leading-[1.0] tracking-tight">
              Slowly made. <br />
              <span className="italic font-light text-[var(--color-terracotta)]">Every single one.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Content Overlap Grid */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Editorial Timeline Process */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1 relative">
            {/* Elegant vertical progress divider */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--color-terracotta)]/20" />

            <div className="space-y-12 pl-8 relative">
              <FadeIn delay={0.1} duration={1.6}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-terracotta)] border-4 border-[var(--color-warm-white)]" />
                  <h4 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-3">01 / The Kneading</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm md:text-base font-light leading-relaxed max-w-md">
                    We reject industrial machinery. Our dough is mixed and kneaded by hand, sensing the exact moment the ghee, jaggery, and stone-ground wheat reach harmony.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.3} duration={1.6}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-terracotta)] border-4 border-[var(--color-warm-white)]" />
                  <h4 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-3">02 / The Shaping</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm md:text-base font-light leading-relaxed max-w-md">
                    Using traditional wooden sanchas (hand-carved moulds), every single piece is hand-pressed, embedding our geometric heritage motifs onto the crust.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.5} duration={1.6}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-terracotta)] border-4 border-[var(--color-warm-white)]" />
                  <h4 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] mb-3">03 / The Frying</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm md:text-base font-light leading-relaxed max-w-md">
                    Slow-fried in small batches on a gentle, low flame. It takes time, patience, and visual expertise to achieve that golden-brown crunch.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Side: Floating Editorial Image */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2 flex justify-center relative py-8">
            <FadeIn delay={0.2} duration={1.8} className="relative w-full max-w-lg aspect-[4/3] shadow-[10px_20px_50px_rgba(61,43,31,0.08)] group">
              <Image 
                src="/images/product/thekua-plate-overhead.jpg"
                alt="Overhead view of freshly made Thekua on a colorful plate"
                fill
                className="object-cover rounded-sm transition-transform duration-700 group-hover:scale-[1.01]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlapping note */}
              <div className="absolute -bottom-6 -right-4 bg-white/90 backdrop-blur-sm p-4 border border-[var(--color-terracotta)]/15 shadow-md rounded-sm rotate-[1.5deg] max-w-[180px] pointer-events-none group-hover:rotate-0 transition-transform duration-500">
                <span className="font-handwritten text-2xl text-[var(--color-deep-brown)] block leading-none mb-1">
                  100% Woodfired Heat
                </span>
                <span className="font-sans text-[8px] tracking-widest uppercase text-[var(--color-text-secondary)] font-semibold">
                  Mithila Hearth Cooking
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
