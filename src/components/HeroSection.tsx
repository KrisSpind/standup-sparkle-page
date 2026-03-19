import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-standup.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-primary-soft text-primary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
              Agile Coaching for Teams
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] mb-6">
              Run standups that actually{" "}
              <span className="text-primary">move the needle.</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 font-body leading-relaxed">
              Expert coaching to transform your daily standups from status reports into focused, energizing alignment sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#method"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-body font-medium px-7 py-3.5 rounded-lg text-base hover:bg-secondary transition-colors"
              >
                See the Approach
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={heroImage} alt="Team during a standup meeting" className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
