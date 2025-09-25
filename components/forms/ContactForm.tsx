"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {  Phone, Mail, MessageSquare,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const roofingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().optional(),
  message: z.string().optional(),
});

type RoofingFormData = z.infer<typeof roofingFormSchema>;



const RoofingContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoofingFormData>({
    resolver: zodResolver(roofingFormSchema),
  });

  const onSubmit = (data: RoofingFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  return (
    <section className="bg-background  ">

        {/* Right side - Contact Form */}
        <div className="w-full">
          <Card className="bg-card border-2 shadow-xl">
            <CardContent className="p-4 lg:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-card-foreground mb-2">
                  Get Your Free Estimate
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div>
                    
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-card-foreground mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>


                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your roofing project, any specific concerns, or questions you have..."
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <MessageSquare className="size-5 mr-2" />
                  Get Free Estimate
                </Button>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="size-4" />
                    <span>(555) ROOFING</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="size-4" />
                    <span>info@roofingpro.com</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
    </section>
  );
};

export { RoofingContactForm };
