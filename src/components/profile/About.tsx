import Image from "next/image";
import { Download, Mars, Image as ImageIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ABOUT_INFO, SOCIALS } from "@/data/about";
import { USER } from "@/data/user";
const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex-col-reverse gap-y-2 sm:flex-row flex mt-8 sm:mt-10 px-2 lg:px-0"
    >
      {/* left part */}
      <div className="w-full space-y-3">
        <h1
          id="about-heading"
          className="font-monomaniac text-3xl max-sm:text-center"
        >
          {`${USER.firstName} ${USER.lastName}`}
        </h1>
        <p className="font-mono  text-md  text-muted-foreground text-balance">
          A Product-focused frontend developer passionate about crafting
          intuitive, high-performance user interfaces that drive real impact.
        </p>

        <address className="not-italic space-y-3">
          {ABOUT_INFO?.map((item) => {
            return (
              <div key={item.id} className="flex gap-4">
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    className="underline-offset-4 hover:underline font-mono text-sm"
                  >
                    {item.title}
                  </a>
                ) : (
                  <p className="font-mono text-sm">{item.title}</p>
                )}
              </div>
            );
          })}
        </address>

        <div className="flex gap-4">
          <div
            className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
            aria-hidden="true"
          >
            <Mars className="text-muted-foreground size-4" />
          </div>

          <p className="font-mono text-sm">he/him</p>
        </div>

        <div className="space-x-4 mt-6">
          {/* RESUME */}
          <Button asChild className="font-mono" size={"sm"}>
            <a href="/Resume.pdf" download={true}>
              <Download className="size-4" />
              Resume
            </a>
          </Button>
          {/* SOCIALS */}
          {SOCIALS?.map((item) => {
            return (
              <Button
                key={item.id}
                asChild
                variant={item.variant}
                className="font-mono"
                size={item.size}
              >
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                  <span className="sr-only">{item.title}</span>
                </a>
              </Button>
            );
          })}
        </div>
      </div>
      {/* right part */}
      <div className="flex h-fit justify-center">
        <div className="relative w-32 h-32 rounded-full sm:size-36 md:size-40 lg:size-48 xl:size-52 shadow-md">
          {USER.avatar ? (
            <Image
              src={USER.avatar}
              alt="profile picture"
              fill
              sizes="
                  (max-width: 640px) 8rem,
                  (max-width: 768px) 9rem,
                  (max-width: 1024px) 10rem,
                  (max-width: 1280px) 12rem,
                  13rem"
              className="rounded-full object-cover"
              priority
            />
          ) : (
            <ImageIcon className="size-8 sm:size-12 absolute top-1/2 left-1/2 -translate-1/2 text-muted-foreground" />
          )}
          <div className="w-4 h-4 rounded-full absolute sm:top-5 right-5 bg-green-500 animate-ping"></div>
          <div className="w-4 h-4 rounded-full absolute sm:top-5 right-5 bg-green-500"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
