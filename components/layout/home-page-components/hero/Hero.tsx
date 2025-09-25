import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RoofingContactForm } from "@/components/forms/ContactForm";

interface Hero47Props {
  heading?: string;
  subheading?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero = ({
  heading = "Toptier Roofs",
  subheading = " built with skill",
  description = "Premium roofing solutions built with quality materials, expert craftsmanship and decades of experience. Homeowners can trust our proven methods to protect their most valuable investment.",
  buttons = {
    primary: {
      text: "Services",
      url: "/services",
    },
    secondary: {
      text: "FAQs",
      url: "/faqs",
    },
  },
}: Hero47Props) => {
  return (
    <section className="bg-background">
      <div className="container flex flex-col items-start gap-10 lg:my-0 lg:flex-row lg:items-start">
        <div className="flex flex-col gap-4 lf:gap-7 lg:w-2/3">
          <h2 className="text-5xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            <span>{heading}</span>
            <span className="text-muted-foreground">{subheading}</span>
          </h2>
          <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-start gap-5 lg:gap-7">
            <Button asChild>
              <a href={buttons.primary?.url}>
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  {buttons.primary?.text}
                </span>
              </a>
            </Button>
            <Button asChild variant="link" className="underline">
              <a href={buttons.secondary?.url}>{buttons.secondary?.text}</a>
            </Button>
          </div>
        </div>
        <div className="relative z-10">
          {/* Form */}
          <RoofingContactForm />
        </div>
      </div>
    </section>
  );
};

export { Hero };
