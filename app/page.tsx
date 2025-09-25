import { Footer6 } from "@/components/layout/Footer";
import { Features } from "@/components/layout/home-page-components/features/features-display";
import { Hero } from "@/components/layout/home-page-components/hero/Hero";
import TestimonialSection from "@/components/layout/home-page-components/testimonials/testimonial-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 py-20 gap-16 sm:p-20 max-w-6xl mx-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center mx-auto">
        <Hero />
        <TestimonialSection />
        <Features />
      </main>
    </div>
  );
}
