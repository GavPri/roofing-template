"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

interface ServiceHeroProps {
  badge: {
    text: string;
    subtitle: string;
  };
  headline: string;
  description: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  images: string[];
  altText?: string;
}

const ServiceHero = ({
  badge,
  headline,
  description,
  buttons,
  images,
  altText = "Service showcase",
}: ServiceHeroProps) => {
  return (
    <section className="min-h-screen flex justify-center items-center mx-4 lg:mx-auto max-w-6xl my-32 lg:my-12">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="mx-auto">
            <div className="flex w-fit items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs font-medium text-secondary">
              <Badge>{badge.text}</Badge>
              {badge.subtitle}
            </div>
            <h1 className="mt-10 mb-4 text-3xl font-semibold lg:text-5xl text-foreground">
              {headline}
            </h1>
            <p className="mx-auto text-muted-foreground lg:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-col gap-2 sm:flex-row">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                {buttons.primary}
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full gap-2 sm:w-auto"
              >
                <Link href={"/services"}>{buttons.secondary}</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:hidden">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                }),
              ]}
              className="-mx-7"
            >
              <CarouselContent className="max-h-[350px]">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="relative max-w-96 aspect-square"
                  >
                    <Image src={image} alt={`${altText} ${index + 1}`} fill />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                  direction: "backward",
                }),
              ]}
              className="-mx-7"
            >
              <CarouselContent className="max-h-[350px]">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className=" max-w-96 "
                  >
                    <img src={image} alt={`${altText} ${index + 1}`} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="hidden grid-cols-2 gap-8 lg:grid">
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                }),
              ]}
              orientation="vertical"
            >
              <CarouselContent className="max-h-[600px]">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="max-w-96"
                  >
                    <img src={image} alt={`${altText} ${index + 1}`} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel
              opts={{
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 0.8,
                  direction: "backward",
                }),
              ]}
              orientation="vertical"
            >
              <CarouselContent className="max-h-[600px]">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="max-w-96 "
                  >
                    <img src={image} alt={`${altText} ${index + 1}`} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServiceHero };
