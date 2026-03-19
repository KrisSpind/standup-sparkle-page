import { motion } from "framer-motion";
import abstractImage from "@/assets/abstract-warmth.jpg";

const QuoteSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={abstractImage} alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="relative container mx-auto px-6">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl md:text-4xl font-display italic leading-relaxed mb-6">
            „Der Moment, in dem du dich traust, wirklich hinzuschauen, ist der Moment, in dem sich alles verändern kann."
          </p>
          <cite className="text-primary font-body font-semibold text-sm tracking-widest uppercase not-italic">
            Regina Huber
          </cite>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
