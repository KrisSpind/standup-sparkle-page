import { motion } from "framer-motion";
import reginaPortrait from "@/assets/regina-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="ueber" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
              Über <em className="text-primary">mich</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-[280px_1fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={reginaPortrait}
                  alt="Regina Huber"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
                Ich bin Regina – Ehefrau, Mama, Lehrerin und Coach aus Leidenschaft.
              </p>
              <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
                Ich liebe echte Begegnungen, gute Gespräche und die Momente, in denen plötzlich etwas klarer wird. Mich selbst haben die Fragen des Lebens, persönliche Herausforderungen und der Wunsch, mich und andere besser zu verstehen, immer wieder auf neue Wege gebracht.
              </p>
              <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
                Ich bin selbst nicht fertig mit meiner Entwicklung – und das möchte ich auch gar nicht sein. Aber ich habe auf meinem Weg schon einiges entdeckt, ausprobiert, hinterfragt und für mich verändert. Dabei durfte ich erfahren, wie viel sich bewegen kann, wenn wir beginnen, ehrlich hinzuschauen und uns selbst besser zu verstehen.
              </p>
              <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
                Heute verbinde ich meine Erfahrungen aus dem Leben, dem Lehrerberuf und meiner eigenen Entwicklung mit meiner Arbeit als Coach. Ich begleite Menschen dabei, neue Perspektiven zu entdecken, sich selbst näherzukommen und ihren ganz eigenen Weg zu finden.
              </p>
              <p className="text-lg md:text-xl font-body font-light leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-foreground">Mal tiefgründig, mal mit Humor, immer auf Augenhöhe.</strong> Denn ich glaube, dass Veränderung nicht damit beginnt, dass wir jemand anderes werden müssen, sondern damit, dass wir mehr wir selbst sein dürfen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
