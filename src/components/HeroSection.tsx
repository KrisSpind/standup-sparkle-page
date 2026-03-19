import { motion } from "framer-motion";
import { Mic, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-stage.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Comedy stage with spotlight" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Mic className="w-5 h-5 text-primary" />
          <span className="text-primary font-body text-sm tracking-widest uppercase">Standup Comedy Coaching</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-900 leading-[0.95] mb-6 max-w-4xl mx-auto"
        >
          Find Your Voice.
          <br />
          <span className="text-primary">Own The Stage.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 font-body"
        >
          1-on-1 coaching that transforms nervous newcomers into confident, stage-ready comedians.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-bold px-8 py-4 rounded-lg text-lg hover:bg-gold-glow transition-colors"
          >
            Book a Free Session <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#method"
            className="inline-flex items-center gap-2 border border-border text-foreground font-display font-medium px-8 py-4 rounded-lg text-lg hover:bg-secondary transition-colors"
          >
            How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
