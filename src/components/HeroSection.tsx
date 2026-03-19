import { motion } from "framer-motion";
import heroImage from "@/assets/hero-coaching.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-6">
              Coaching · Persönlichkeitsentwicklung · Präsenz
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-medium leading-[1.15] mb-6">
              Sich selbst klarer sehen.{" "}
              <em className="text-primary">Innerlich frei werden.</em>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-10 font-body font-light">
              Regina Huber begleitet Menschen dabei, innere Blockaden zu lösen und mit neuer Klarheit und Präsenz durchs Leben zu gehen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Erstgespräch vereinbaren
              </a>
              <a
                href="#ueber"
                className="inline-flex items-center justify-center border border-border text-foreground font-body font-medium px-8 py-4 rounded-lg hover:bg-secondary transition-colors"
              >
                Mehr erfahren
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Einladender Raum mit warmem Licht – ein Ort für innere Begegnung"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
