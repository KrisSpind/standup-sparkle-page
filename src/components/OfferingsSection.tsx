import { motion } from "framer-motion";
import { Eye, Unlock, Sparkles } from "lucide-react";

const offerings = [
  {
    icon: Eye,
    title: "Klarheit finden",
    description: "Sich selbst klarer sehen — jenseits von alten Mustern und fremden Erwartungen. Wer bin ich wirklich? Was will ich?",
  },
  {
    icon: Unlock,
    title: "Blockaden lösen",
    description: "Innere Widerstände erkennen und sanft auflösen. Altes loslassen, um Raum für Neues zu schaffen.",
  },
  {
    icon: Sparkles,
    title: "Präsenz leben",
    description: "Mit neuer innerer Stärke und Lebendigkeit durch den Alltag gehen. Echt, klar und verbunden.",
  },
];

const OfferingsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Wobei ich dich <em className="text-primary">begleite</em>
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-md mx-auto">
            Drei Schwerpunkte, die ineinandergreifen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-terracotta-soft flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
