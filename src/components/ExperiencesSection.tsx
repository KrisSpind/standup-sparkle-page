import { motion } from "framer-motion";
import { Heart, Lightbulb, Users } from "lucide-react";

const experiences = [
  {
    icon: Lightbulb,
    title: "Einzelcoaching",
    description:
      "In geschütztem Rahmen arbeiten wir gemeinsam an deinen persönlichen Themen. Du gewinnst Klarheit, löst innere Blockaden und findest zurück zu deiner inneren Kraft.",
  },
  {
    icon: Users,
    title: "Workshops & Bühne",
    description:
      "In Gruppen und auf der Bühne entstehen besondere Momente: ehrliche Begegnung, neue Perspektiven und die Erfahrung, dass Veränderung gemeinsam leichter gelingt.",
  },
  {
    icon: Heart,
    title: "Persönlichkeitsentwicklung",
    description:
      "Nachhaltige Veränderung beginnt im Inneren. Ich begleite dich dabei, neue Wege zu gehen — mit Mut, Klarheit und einem tiefen Vertrauen in dich selbst.",
  },
];

const ExperiencesSection = () => {
  return (
    <section id="erfahrungen" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Neue <em className="text-primary">Erfahrungen</em>
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-md mx-auto">
            Wege, die ich mit dir gehen kann.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {experiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-terracotta-soft flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
