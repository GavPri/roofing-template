import { CircleCheckBig } from "lucide-react";

const Features = () => {
  return (
    <section className="">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-5 text-5xl font-medium text-foreground lg:text-7xl">
              Why Choose Us?
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Don't trust your biggest investment to just anyone. Our licensed,
              insured team brings decades of expertise to every project. From
              emergency repairs to complete installations, we deliver quality
              workmanship that protects your property and your peace of mind.
            </p>
            <ul className="grid max-w-xl gap-5 sm:grid-cols-2">
              <li className="flex items-center gap-1.5 text-primary">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Licensed & Insured</p>
              </li>
              <li className="flex items-center gap-1.5 text-primary">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Free Estimates</p>
              </li>
              <li className="flex items-center gap-1.5 text-primary">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">24/7 Emergency Service</p>
              </li>
              <li className="flex items-center gap-1.5 text-primary">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">
                  Lifetime Workmanship Warranty
                </p>
              </li>
              <li className="flex items-center gap-1.5 text-primary">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Local Family Owned</p>
              </li>
              <li className="flex items-center gap-1.5 text-primary">
                <CircleCheckBig className="size-5 shrink-0" />
                <p className="text-sm font-medium">Storm Damage Specialists</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-t from-background to-transparent to-30%" />
            <div className="absolute inset-0 bg-linear-to-l from-background to-transparent to-30%" />
            <img
              src="/roofing-template-two.png"
              alt="placeholder"
              className="max-h-[500px] w-full rounded-2xl border border-border object-cover lg:max-h-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
