import Link from "next/link";
import { Logo } from "../ui/logo";

const sitemap = [
  {
    title: "Company",
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "About US",
        href: "/about-us",
      },
      {
        title: "Contact",
        href: "/contact",
      },
      { title: "Services", href: "/services" },
    ],
  },
];

const Footer6 = () => {
  return (
    <section className="max-w-6xl lg:mx-auto mx-4 pb-5">
      <div className="container">
        <footer>
          <div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0">
            <div className="max-w-96">
              <div className="mb-6 flex items-center gap-3">
                <div className="border-border bg-accent flex size-12 items-center justify-center rounded-lg border p-2">
                  <Logo size="lg" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Top Tier Roofing
                </h3>
              </div>
              <p className="text-muted-foreground text-base font-medium">
                Roofing made easy.
              </p>
            </div>
            <div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row">
              <div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2">
                {sitemap.map((section) => (
                  <div key={section.title} className="h-fit w-min">
                    <h4 className="mb-6 whitespace-nowrap text-base font-semibold text-secondary">
                      {section.title}
                    </h4>
                    <ul className="text-muted-foreground space-y-3 text-base font-medium">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            className="hover:text-accent-foreground whitespace-nowrap text-base"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-border flex flex-col items-baseline justify-between gap-8 border-t pt-8 md:flex-row md:gap-16">
            <div className="text-muted-foreground text-xs sm:text-sm">
              &copy; ToptierRoofing.com 2024
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer6 };
