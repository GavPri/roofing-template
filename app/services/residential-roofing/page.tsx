import { ServiceHero } from "@/components/layout/service-page-components/solo-service-component";
import React from "react";

export default function Page() {
  return (
    <div className="mx-4">
      <ServiceHero
        badge={{
          text: "Licensed & Insured",
          subtitle: "Residential roofing specialists in your area",
        }}
        headline="Expert Residential Roofing Installation & Roof Replacement"
        description="Professional residential roofing contractors specializing in home roof installation, residential roof replacement, and residential roof repair. Quality asphalt shingle roofing, metal roofing, and tile roofing for homeowners with 25+ years experience."
        buttons={{
          primary: "Get Free Estimate",
          secondary: "Services",
        }}
        images={[
          "/residential-roofing-2.png",
          "/residential-roofing-1.png",
          "/residential-roofing-3.png",
          "/residential-roofing-4.png",
        ]}
        altText="Residential roofing projects"
      />
    </div>
  );
}
