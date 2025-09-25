import { Mail, Phone } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { RoofingContactForm } from "@/components/forms/ContactForm";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description:
      "Have a question or need help? Drop us an email, and we&aposll respond within 24 hours.",
    contact: "hello@relative.io",
  },
  {
    icon: Phone,
    title: "Phone",
    description:
      "Prefer to chat? Give us a call Monday–Friday, 9 AM–5 PM (PST).",
    contact: "+1 (123) 456-7890",
  },
];

const ContactUs = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-6 py-4 lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm text-primary"
          >
            <Mail className="size-4" />
            <span>Reach Out</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl text-foreground">
            Get in Touch
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            We are here to help—reach out with any questions or feedback.
          </p>
        </div>

        <div className="flex justify-between gap-10 py-12 max-md:flex-col">
          <RoofingContactForm />

          <div className="grid flex-1 gap-6 self-start lg:grid-cols-2">
            {contactMethods.map((method, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <method.icon className="size-5 text-primary" />
                  <h3 className="text-2xl tracking-[-0.96px] text-primary">
                    {method.title}
                  </h3>
                </div>
                <div className="space-y-2 tracking-[-0.32px]">
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    {method.contact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactUs };
