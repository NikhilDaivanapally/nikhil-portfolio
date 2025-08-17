import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mt-14 sm:mt-24 my-10 font-mono"
    >
      <h2
        id="contact-heading"
        className="font-mono font-semibold mb-8 text-2xl"
      >
        Contact
      </h2>

      <div className="grid sm:grid-cols-2">
        <div className="min-h-50 my-auto space-y-4 pl-2">
          <address className="not-italic space-y-4">
            <div className="flex gap-4">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
                aria-hidden="true"
              >
                <Mail className="text-muted-foreground size-4" />
              </div>
              <a
                href="mailto:nikhildaivanapally@gmail.com"
                target="_blank"
                className="underline-offset-4 hover:underline font-mono text-sm"
              >
                nikhildaivanapally@gamil.com
              </a>
            </div>

            <div className="flex gap-4">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
                aria-hidden="true"
              >
                <Phone className="text-muted-foreground size-4" />
              </div>
              <a
                href="tel:+919398808794"
                target="_blank"
                className="underline-offset-4 hover:underline font-mono text-sm"
              >
                +91 9398808794
              </a>
            </div>

            <div className="flex gap-4">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
                aria-hidden="true"
              >
                <MapPin className="text-muted-foreground size-4" />
              </div>
              <p className="font-mono text-sm">Hyderabad, India</p>
            </div>
          </address>

          <nav aria-label="social media links" className="space-y-4">
            <div className="flex gap-4">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
                aria-hidden="true"
              >
                <Linkedin
                  aria-hidden="true"
                  className="text-muted-foreground size-4"
                />
              </div>
              <a
                href="https://www.linkedin.com/in/nikhil-daivanapally/"
                target="_blank"
                className="underline-offset-4 hover:underline font-mono text-sm"
              >
                linkedin.com/in/nikhil-daivanapally
              </a>
            </div>
            <div className="flex gap-4">
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
                aria-hidden="true"
              >
                <Github
                  aria-hidden="true"
                  className="text-muted-foreground size-4"
                />
              </div>
              <a
                href="https://github.com/NikhilDaivanapally"
                target="_blank"
                className="underline-offset-4 hover:underline font-mono text-sm"
              >
                github.com/NikhilDaivanapally
              </a>
            </div>
          </nav>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
