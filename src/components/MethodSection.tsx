import { motion } from "framer-motion";
import { Lightbulb, Target, Flame } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discover Your Comedy DNA",
    description: "We dig into what makes you genuinely funny — your perspective, timing, and natural voice. No cookie-cutter formulas.",
  },
  {
    icon: Target,
    title: "Craft & Sharpen Material",
    description: "Turn raw ideas into tight, punchline-driven sets. We workshop every bit until it lands consistently.",
  },
  {
    icon: Flame,
    title: "Stage-Ready Performance",
    description: "Master delivery, crowd work, and stage presence through simulated sets and real open-mic prep.",
  },
];

const MethodSection = () => {
  return (
    <section id="method" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-800 mb-4">
            The <span className="text-primary">Method</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A proven three-phase approach to getting you from blank page to standing ovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
