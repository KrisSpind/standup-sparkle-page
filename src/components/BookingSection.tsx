import { motion } from "framer-motion";
import { ArrowRight, Mic2 } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Mic2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-800 mb-4">
            Ready to <span className="text-primary">Kill It</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Book a free 30-minute discovery call. No pressure — just an honest conversation about your comedy goals.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-secondary border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-bold px-6 py-3.5 rounded-lg hover:bg-gold-glow transition-colors whitespace-nowrap"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
