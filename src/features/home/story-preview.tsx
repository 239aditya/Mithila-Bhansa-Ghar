import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionDivider } from "@/components/cultural/section-divider";

export function StoryPreview() {
  return (
    <section className="pt-20 pb-0 md:pt-28 md:pb-0 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Storytelling */}
          <div className="w-full lg:w-1/2 space-y-8 z-10">
            <FadeIn duration={1.6}>
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4 block font-semibold">
                Our Hearth
              </span>
              <h3 className="font-serif text-[40px] md:text-[56px] text-[var(--color-text-primary)] leading-[1.0] tracking-tight mb-8">
                We didn’t start a company.<br />
                <span className="italic font-light text-[var(--color-terracotta)]">We started remembering.</span>
              </h3>
            </FadeIn>

            <FadeIn delay={0.2} duration={1.6} className="space-y-6 text-[var(--color-text-secondary)] text-base md:text-lg font-light leading-relaxed max-w-xl">
              <p>
                The *Bhansa Ghar* is the most sacred room in a Mithila home. It is where faith, family, and food converge. For generations, the rhythmic sound of grinding spices and the warmth of the wood-fired chulha have been the heartbeat of our heritage.
              </p>
              <p>
                When we realized these slow, mindful ways of cooking were fading, we decided to preserve them. Every batch we make is an homage to the grandmothers who taught us that food is not just sustenance—it is a language of love.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} duration={1.6} className="pt-4">
              <Link 
                href="/our-story"
                className="group inline-flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-terracotta)] transition-colors duration-300 pb-1 border-b border-[var(--color-text-primary)] hover:border-[var(--color-terracotta)] cursor-pointer"
              >
                <span className="font-sans text-xs tracking-widest uppercase font-semibold">Read Our Story</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1.5 transition-transform duration-300 stroke-current">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </FadeIn>
          </div>

          {/* Right Column: Premium Overlapping Images & Details */}
          <div className="w-full lg:w-1/2 flex justify-center relative py-12">
            {/* Background Decorative Frame Offset */}
            <div className="absolute top-0 right-10 w-[70%] h-[90%] border border-[var(--color-terracotta)]/15 rounded-sm -z-10 pointer-events-none hidden sm:block" />

            <FadeIn delay={0.3} duration={1.8} className="relative w-full max-w-md aspect-[3/4] shadow-[10px_20px_50px_rgba(61,43,31,0.08)] group">
              <Image 
                src="/images/packaging/kraft-pouches-front.jpg"
                alt="Mithila Bhansa Ghar kraft packaging by a sunlit window"
                fill
                className="object-cover rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlapping floating paper annotation */}
              <div className="absolute bottom-6 -left-6 md:-left-12 bg-white px-5 py-4 border border-[var(--color-terracotta)]/15 shadow-md rounded-sm rotate-[-2deg] max-w-[200px] pointer-events-none group-hover:rotate-0 transition-transform duration-500">
                <span className="font-handwritten text-2xl text-[var(--color-terracotta)] block leading-none mb-1">
                  Pure Jaggery Sweetness
                </span>
                <span className="font-sans text-[8px] tracking-widest uppercase text-[var(--color-text-secondary)] font-semibold">
                  Hand-roasted daily
                </span>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
      
      <SectionDivider className="mt-8 md:mt-12" />
    </section>
  );
}
