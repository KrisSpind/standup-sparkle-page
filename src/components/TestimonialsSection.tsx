import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jamie R.",
    quote: "I went from freezing up at open mics to headlining a 200-seat club in six months. This coaching changed my life.",
    role: "Now performing weekly",
  },
  {
    name: "Alex T.",
    quote: "The material workshops alone are worth it. My jokes went from getting polite chuckles to genuine belly laughs.",
    role: "Won local comedy competition",
  },
  {
    name: "Sam K.",
    quote: "I thought I wasn't funny enough. Turns out I just needed someone to help me find my angle. Absolutely transformative.",
    role: "First Netflix set in progress",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-800 mb-4">
            What Comics <span className="text-primary">Say</span>
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
              className="bg-background border border-border rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
