import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children";

const reviews = [
  {
    quote: "Priyanka the thekuas are heavenly.. just like my mum's ❤️",
    author: "Ayushi",
    location: "Delhi",
    image: "/images/reviews/whatsapp-ayushi.jpg",
    rotate: "rotate-[-1.5deg]",
    tapeColor: "bg-[#D8C3A5]/40"
  },
  {
    quote: "Best theekua.. loved it. I'll be a loyal customer.",
    author: "Gargi",
    location: "Mumbai",
    image: "/images/reviews/whatsapp-gargi.jpg",
    rotate: "rotate-[2deg]",
    tapeColor: "bg-[var(--color-terracotta)]/20"
  },
  {
    quote: "Hi Ma'am, hope are you making it soon, let me have 400gm this time.",
    author: "Rahul",
    location: "Patna",
    image: "/images/reviews/whatsapp-rahul.jpg",
    rotate: "rotate-[-2.5deg]",
    tapeColor: "bg-[#8E9B90]/30"
  },
  {
    quote: "It was so good.. softer than what we used to make at home.",
    author: "Manu",
    location: "Bangalore",
    image: "/images/reviews/whatsapp-manu.jpg",
    rotate: "rotate-[1deg]",
    tapeColor: "bg-[var(--color-muted-gold)]/20"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-warm-white)] relative overflow-hidden">
      {/* Background organic noise layer */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3d2b1f_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-28">
          <FadeIn duration={1.6}>
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[var(--color-terracotta)] mb-4 block font-semibold">
              Client Praises
            </span>
            <h3 className="font-serif text-[40px] md:text-[56px] text-[var(--color-text-primary)] leading-[1.0] tracking-tight">
              Real messages.<br />
              <span className="italic font-light text-[var(--color-terracotta)]">Handwritten memories.</span>
            </h3>
          </FadeIn>
        </div>

        {/* Postcards Collage Grid */}
        <StaggerChildren staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <StaggerItem 
              key={index} 
              className={`bg-[#FCFAF2] p-8 pb-10 rounded-sm shadow-[2px_8px_30px_rgba(61,43,31,0.06)] border border-[var(--color-terracotta)]/5 flex flex-col h-full relative group transition-all duration-500 hover:shadow-[4px_16px_40px_rgba(61,43,31,0.12)] hover:-translate-y-2 cursor-pointer ${review.rotate}`}
            >
              {/* Masking Tape effect at top */}
              <div className={`w-16 h-5 ${review.tapeColor} absolute -top-2 left-1/2 -translate-x-1/2 rotate-[-3deg] shadow-sm group-hover:scale-105 transition-transform duration-300 pointer-events-none`} />
              
              {/* Elegant Quote */}
              <p className="font-serif text-2xl text-[var(--color-text-primary)] mb-8 flex-grow relative z-10 italic leading-snug tracking-tight text-center">
                "{review.quote}"
              </p>
              
              {/* Polaroid-like signature container */}
              <div className="mt-auto pt-6 border-t border-[var(--color-terracotta)]/10 flex items-center justify-between">
                {/* Micro avatar from the WhatsApp image */}
                <div className="w-10 h-10 rounded-full overflow-hidden relative border border-[var(--color-terracotta)]/20 shadow-inner flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src={review.image} 
                    alt={`WhatsApp screenshot by ${review.author}`}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                
                {/* Handwritten Sign-off */}
                <div className="text-right">
                  <span className="font-handwritten text-2xl text-[var(--color-deep-brown)] block leading-none">
                    — {review.author}
                  </span>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-[var(--color-text-secondary)] block mt-1 font-semibold">
                    {review.location}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
