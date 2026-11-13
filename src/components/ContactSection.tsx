import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { buildContactMailto } from "@/lib/contact";

const ContactSection = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();

    window.location.href = buildContactMailto({
      firstName: field("firstName"),
      lastName: field("lastName"),
      email: field("email"),
      message: field("message"),
    });
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-full bg-terracotta-soft flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Lass uns sprechen
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light mb-10 leading-relaxed">
            Der erste Schritt ist oft der wichtigste. Melde dich für ein unverbindliches Kennenlerngespräch — ganz in deinem Tempo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                required
                placeholder="Vorname"
                className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                required
                placeholder="Nachname"
                className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="E-Mail"
              className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              required
              placeholder="Was beschäftigt dich gerade?"
              rows={4}
              className="w-full bg-background border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Nachricht senden
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
