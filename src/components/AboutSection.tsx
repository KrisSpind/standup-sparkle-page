import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="ueber" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-8">
              Über <em className="text-primary">Regina</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6 text-center"
          >
            <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
              Lehrerin, Mutter von drei Kindern und Coach mit Leidenschaft. Nach vielen Jahren im Schulalltag suchte Regina nach mehr Tiefe, echter Begegnung und innerer Bewegung — und fand ihren Weg im Coaching und in der Persönlichkeitsentwicklung.
            </p>
            <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
              In ihrer Arbeit verbindet sie <strong className="font-semibold text-foreground">Erfahrung, Empathie und eine klare Haltung</strong>. Ob im Einzelcoaching oder auf der Bühne — sie öffnet Räume für echte Aha-Momente, die nachhaltige Veränderung möglich machen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-16 h-px bg-primary/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
