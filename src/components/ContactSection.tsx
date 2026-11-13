import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL, sendContactMessage } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

const ContactSection = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (key: string) => String(data.get(key) ?? "").trim();

    setStatus("sending");
    try {
      await sendContactMessage({
        firstName: field("firstName"),
        lastName: field("lastName"),
        email: field("email"),
        message: field("message"),
        botcheck: data.has("botcheck"),
      });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
            {/* Honeypot: hidden from humans, bots that tick it are rejected by the form service */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-wait"
            >
              {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
            </button>
            <div aria-live="polite" className="text-center font-body">
              {status === "sent" && (
                <p className="text-primary">Danke für deine Nachricht! Ich melde mich so bald wie möglich bei dir.</p>
              )}
              {status === "error" && (
                <p className="text-destructive">
                  Das hat leider nicht geklappt. Schreib mir gern direkt an{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
