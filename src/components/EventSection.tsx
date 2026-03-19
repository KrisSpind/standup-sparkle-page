import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const EventSection = () => {
  return (
    <section id="veranstaltung" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Nächste <em className="text-primary">Veranstaltung</em>
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-md mx-auto">
            Komm vorbei und erlebe Coaching live.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 text-center">
            <p className="text-primary font-body font-semibold text-sm tracking-widest uppercase mb-4">
              Demnächst
            </p>
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-6">
              StandUp – Ein Abend für dich
            </h3>
            <p className="text-muted-foreground font-body font-light leading-relaxed mb-8 max-w-lg mx-auto">
              Ein Abend voller Impulse, Begegnung und innerer Bewegung. Du darfst ankommen, hinschauen und dich überraschen lassen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground font-body text-sm mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Termin wird bekannt gegeben</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>19:00 – 21:30 Uhr</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Wird bekannt gegeben</span>
              </div>
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Interesse anmelden
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
