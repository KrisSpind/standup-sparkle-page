import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Die Arbeit mit Regina hat mir geholfen, endlich zu verstehen, was mich wirklich zurückgehalten hat. Ich fühle mich freier als je zuvor.",
    name: "Sabine M.",
    context: "Einzelcoaching",
  },
  {
    quote: "Regina schafft einen Raum, in dem man sich sicher fühlt, ehrlich zu sein — auch zu sich selbst. Das ist selten und kostbar.",
    name: "Thomas K.",
    context: "Workshop-Teilnehmer",
  },
  {
    quote: "Nach unserem Coaching bin ich ruhiger, klarer und viel präsenter im Alltag. Meine Familie merkt den Unterschied.",
    name: "Julia W.",
    context: "Einzelcoaching",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium">
            Stimmen von <em className="text-primary">Klient:innen</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <p className="text-foreground font-body font-light leading-relaxed mb-6 italic">
                „{t.quote}"
              </p>
              <div>
                <p className="font-body font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm font-body">{t.context}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
