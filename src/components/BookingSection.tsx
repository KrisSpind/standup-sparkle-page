import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display mb-4">
            Ready to fix your standups?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto font-body">
            Book a free 30-minute discovery call. We'll discuss your team's challenges and see if coaching is the right fit.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-background border border-border rounded-lg px-5 py-3.5 text-foreground placeholder:text-muted-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
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
