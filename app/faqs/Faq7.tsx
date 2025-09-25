import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How much does a new roof cost?",
    answer:
      "Roof replacement costs vary based on size, materials, and complexity, typically ranging from $8,000-$25,000. We provide FREE detailed estimates with no hidden fees. Financing options available, and we work directly with your insurance company to maximize your coverage.",
  },
  {
    question: "Do you offer emergency roofing services?",
    answer:
      "Yes! We provide 24/7 emergency roofing services for storm damage, leaks, and urgent repairs. Our emergency team can be at your property within 2 hours to prevent further damage and provide temporary solutions until permanent repairs are completed.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements take 1-3 days depending on size and weather conditions. We work efficiently to minimize disruption to your daily routine while never compromising on quality. Commercial projects vary based on scope and building requirements.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely! We're fully licensed, bonded, and carry comprehensive liability insurance plus workers' compensation. We provide proof of insurance before starting any work and offer a lifetime workmanship warranty on all installations for your complete peace of mind.",
  },
  {
    question: "Will you work with my insurance company?",
    answer:
      "Yes, we're experienced insurance claim specialists. We'll meet with your adjuster, provide detailed damage assessments, and handle all paperwork to ensure you receive maximum coverage. Many customers pay only their deductible when we manage their insurance claim.",
  },
];

const Faq7 = () => {
  return (
    <section className="mt-10 bg-background">
      <div className="container">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold text-primary">
              Need Help?
              <br />
              <span className="text-secondary">We&apos;re here to assist.</span>
            </h2>
            <p className="text-lg text-foreground md:text-xl">
              Still have questions? Feel free to contact our friendly team by
              hitting the button below!
            </p>
            <Button
              size="lg"
              variant="default"
              className="w-fit hover:cursor-pointer"
            >
              Contact Us
            </Button>
          </div>
          <Accordion type="single">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground bg-muted p-2 rounded-b-md">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq7 };
