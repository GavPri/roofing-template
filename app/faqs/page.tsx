import { Faq7 } from "@/app/faqs/Faq7";
import React from "react";

export default function page() {
  return (
    <main className="bg-background max-w-6xl mx-auto h-screen w-screen flex flex-col lg:flex-row justify-start lg:justify-center lg:items-center items-start px-12 mt-24 lg:mt-0">
      <h2 className="sr-only">FAQs</h2>
      <Faq7 />
    </main>
  );
}
