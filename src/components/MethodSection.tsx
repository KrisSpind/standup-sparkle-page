import { motion } from "framer-motion";
import { Clock, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Clock,
    title: "Audit Your Current Standups",
    description: "I observe your team's standups and identify what's working, what's wasting time, and where alignment breaks down.",
  },
  {
    icon: Users,
    title: "Custom Framework Design",
    description: "Together we build a standup format tailored to your team's size, cadence, and goals — not a one-size-fits-all template.",
  },
  {
    icon: TrendingUp,
    title: "Coach & Iterate",
    description: "I facilitate sessions, coach facilitators, and refine the process until your team runs standups that stick — without me.",
  },
];

const MethodSection = () => {
  return (
    <section id="method" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            A proven approach to{" "}
            <span className="text-primary">better standups</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto font-body">
            Three phases to go from dreaded daily meetings to your team's favorite 15 minutes.
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
              className="bg-background border border-border rounded-xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-muted-foreground text-sm font-body font-semibold mb-2 block">Phase {i + 1}</span>
              <h3 className="text-xl font-display mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
