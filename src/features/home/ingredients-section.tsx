import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const ingredients = [
  {
    num: "01",
    name: "Pure Hand-churned Ghee",
    description: "The soul of our Thekua. It brings the rich aroma and the soft, biscuit-like crumbly texture that melts in your mouth."
  },
  {
    num: "02",
    name: "Unrefined Jaggery (Gur)",
    description: "Unprocessed and raw. It provides a deep, earthy sweetness with notes of caramel that white sugar can never replicate."
  },
  {
    num: "03",
    name: "Stone-Ground Wheat",
    description: "Stone-ground wheat flour (Atta) forms the robust, hearty base of this traditional delicacy, retaining its organic texture."
  },
  {
    num: "04",
    name: "Aromatic Fennel Seeds",
    description: "Hand-sorted Saunf adds a subtle, refreshing licorice note that cuts through the richness of the ghee."
  },
  {
    num: "05",
    name: "Shredded Dry Coconut",
    description: "Grated by hand in our kitchen, it offers a beautiful textural contrast and a hint of nuttiness in every bite."
  },
  {
    num: "06",
    name: "Warming Cardamom",
    description: "A gentle dusting of freshly ground green cardamom pods to elevate the aroma to something heavenly."
  }
];

export function IngredientsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Editorial Philosophy */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-32 h-fit">
            <FadeIn duration={1.6}>
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4 block font-semibold">
                Pure Ingredients
              </span>
              <h3 className="font-serif text-[40px] md:text-[56px] text-[var(--color-text-primary)] leading-[1.0] tracking-tight mb-8">
                Nothing you can’t <span className="italic font-light text-[var(--color-terracotta)]">pronounce.</span>
              </h3>
              
              <div className="h-px w-20 bg-[var(--color-terracotta)]/40 mb-8" />
              
              <p className="text-[var(--color-text-secondary)] text-base md:text-lg font-light leading-relaxed mb-6">
                Our recipe relies on the purity of nature. White sugar belongs to factories; our kitchen uses unrefined jaggery and pure hand-churned ghee.
              </p>
              
              <p className="text-[var(--color-text-secondary)]/85 text-sm italic font-light">
                * No preservatives. No artificial flavors. No palm oil. Ever.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: High-End Botanical List */}
          <div className="w-full lg:w-[65%]">
            <StaggerChildren staggerDelay={0.12} className="divide-y divide-[var(--color-terracotta)]/15 border-t border-b border-[var(--color-terracotta)]/15">
              {ingredients.map((ing) => (
                <StaggerItem key={ing.num} className="py-10 flex flex-col sm:flex-row gap-6 sm:gap-12 group transition-all duration-300">
                  {/* Big Serif Number */}
                  <span className="font-serif text-3xl md:text-4xl text-[var(--color-terracotta)]/40 group-hover:text-[var(--color-terracotta)] transition-colors duration-300 w-12 flex-shrink-0">
                    {ing.num}
                  </span>
                  
                  {/* Name and Description */}
                  <div className="flex-grow space-y-3">
                    <h4 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] group-hover:text-[var(--color-terracotta)] transition-colors duration-300">
                      {ing.name}
                    </h4>
                    <p className="text-[var(--color-text-secondary)] text-sm md:text-base font-light leading-relaxed max-w-xl">
                      {ing.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

        </div>
      </div>
    </section>
  );
}
