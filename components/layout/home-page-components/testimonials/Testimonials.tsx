import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Testimonial4 = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 items-stretch gap-x-0 gap-y-4 lg:grid-cols-3 lg:gap-4">
            <div className="relative h-72 w-full rounded-md lg:h-auto">
              <Image
                src="/roofing-template-one.png"
                alt="placeholder"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <Card className="col-span-2 flex items-center justify-center p-6">
              <div className="flex flex-col gap-4">
                <q className="text-xl font-medium lg:text-3xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  eveniet suscipit corporis sequi usdam alias fugiat iusto
                  perspiciatis.
                </q>
                <div className="flex flex-col items-start">
                  <p>John Doe</p>
                  <p className="text-muted-foreground">CEO, Company Name</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card>
              <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                <q>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsa, eveniet inventore! Omnis incidunt vel iste.
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground">CEO, Company Name</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                <q>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsa, eveniet inventore! Omnis incidunt vel iste.
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground">CEO, Company Name</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="px-6 pt-6 leading-7 text-foreground/70">
                <q>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ipsa, eveniet inventore! Omnis incidunt vel iste.
                </q>
              </CardContent>
              <CardFooter>
                <div className="flex gap-4 leading-5">
                  <Avatar className="size-9 rounded-full ring-1 ring-input">
                    <AvatarImage
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                      alt="placeholder"
                    />
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground">CEO, Company Name</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial4 };
