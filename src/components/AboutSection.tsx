import { motion } from "framer-motion";
import reginaPortrait from "@/assets/regina-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="ueber" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
              Über <em className="text-primary">mich</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={reginaPortrait}
                  alt="Regina Huber"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
                Ich bin Regina – Lehrerin, Mutter von drei Kindern und Coach mit Leidenschaft. Nach vielen Jahren im Schulalltag suchte ich nach mehr Tiefe, echter Begegnung und innerer Bewegung — und fand meinen Weg im Coaching und in der Persönlichkeitsentwicklung.
              </p>
              <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
                Heute unterstütze ich Menschen dabei, sich selbst klarer zu sehen, innere Blockaden zu lösen und mit neuer Präsenz durchs Leben zu gehen.
              </p>
              <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
                In meiner Arbeit verbinde ich <strong className="font-semibold text-foreground">Erfahrung, Empathie und eine klare Haltung</strong>. Ob im Einzelcoaching oder auf der Bühne — ich öffne Räume für echte Aha-Momente, die nachhaltige Veränderung möglich machen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
