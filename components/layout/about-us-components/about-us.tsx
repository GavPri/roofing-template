import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import Image from "next/image";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Roofs Installed", value: "500+" },
  { label: "Years in Business", value: "15+" },
  { label: "Customer Satisfaction", value: "99%" },
  { label: "Licensed Professionals", value: "8+" },
];

const About3 = ({
  title = "About Us",
  description = "Top Tier Roofing is a passionate team dedicated to creating reliable roofing solutions that empower homeowners to protect their investment with confidence.",
  mainImage = {
    src: "/about-us-first.jpg",
    alt: "placeholder",
  },
  secondaryImage = {
    src: "/roofing-team.png",
    alt: "placeholder",
  },
  breakout = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "logo",
    title: "Premium roofing services at TopTierRoofing.com",
    description:
      "Providing homeowners with reliable solutions to protect their property, and maintain long-term value.",
    buttonText: "Contact Us",
    buttonUrl: "https://shadcnblocks.com",
  },
  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing homeowners with reliable roofing solutions to protect their investment, ensure lasting quality, and maintain property value.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold text-primary">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          {/* Main image - using fill with relative container */}
          <div className="relative h-[400px] w-full max-h-[620px] rounded-xl lg:col-span-2 lg:h-[620px]">
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <Logo size="lg" />
              <div>
                <p className="mb-2 text-lg font-semibold text-primary">
                  {breakout.title}
                </p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="default" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            {/* Secondary image - using fill with relative container */}
            <div className="relative h-[250px] grow rounded-xl md:h-[200px] md:w-1/2 lg:h-auto lg:min-h-[200px] lg:w-auto">
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
        <div className="py-32">
          <p className="text-center text-2xl text-foreground">
            {companiesTitle}{" "}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                {/* Company logos - using explicit dimensions since they're small and consistent */}
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={120}
                  height={32}
                  className="h-6 w-auto md:h-8 brightness-0 saturate-100 filter"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-primary">
              {achievementsTitle}
            </h2>
            <p className="max-w-xl text-muted-foreground">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p className="text-muted-foreground">{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl text-primary">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] bg-[size:80px_80px] opacity-15 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export { About3 };
