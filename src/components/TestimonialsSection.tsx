import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Chen",
    role: "Engineering Manager, Fintech Startup",
    quote: "Our standups went from 35 minutes of rambling to 12 minutes of clarity. The team actually looks forward to them now.",
  },
  {
    name: "David Park",
    role: "VP of Product, SaaS Company",
    quote: "The coaching paid for itself in the first week. Blockers surface faster and cross-team alignment improved overnight.",
  },
  {
    name: "Rachel Foster",
    role: "Scrum Master, Enterprise",
    quote: "I thought I knew how to run standups. This coaching showed me how much I was leaving on the table. Genuinely transformative.",
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
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            Teams that <span className="text-primary">transformed</span>
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
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground font-body leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-body font-semibold">{t.name}</p>
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
