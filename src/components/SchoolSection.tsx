import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";

const topics = [
  {
    icon: BookOpen,
    title: "Lerncoaching & Lernhilfe",
    description:
      "Mehr als Nachhilfe: Wir finden Lernstrategien, die wirklich passen, bringen Struktur in den Lernalltag und ersetzen Druck durch Motivation – damit gute Noten wieder erreichbar werden.",
  },
  {
    icon: MessageCircle,
    title: "Schülerberatung",
    description:
      "Bei Schulproblemen, Lernproblemen, Prüfungsangst oder Konflikten in der Klasse: ein geschützter Raum, in dem Kinder und Jugendliche gehört werden und eigene Lösungen finden.",
  },
  {
    icon: ShieldCheck,
    title: "Selbstwert, Mobbing & Ängste",
    description:
      "Wer gemobbt wird, an sich zweifelt oder sich in sozialen Situationen unsicher fühlt, braucht Rückhalt. Gemeinsam stärken wir den Selbstwert und üben, sich wieder mehr zuzutrauen.",
  },
  {
    icon: HeartHandshake,
    title: "Elternberatung",
    description:
      "Ihr wollt euer Kind unterstützen, ohne dass jeder Nachmittag im Streit endet? Ich begleite Eltern mit praktischen Impulsen und einem klaren Blick von außen.",
  },
];

const SchoolSection = () => {
  return (
    <section id="schule-lernen" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Wenn Schule <em className="text-primary">schwer</em> wird
          </h2>
          <p className="text-muted-foreground text-lg font-body font-light max-w-2xl mx-auto leading-relaxed">
            Als Lehrerin und Mutter von drei Kindern kenne ich Schule von beiden Seiten. Im Lerncoaching und in der
            Schüler- und Elternberatung schauen wir auf das, was hinter Lernproblemen steckt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {topics.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-terracotta-soft flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm font-body font-light max-w-2xl mx-auto text-center mt-16 leading-relaxed">
          Coaching ersetzt keine Psychotherapie. Bei einer diagnostizierten Angststörung, Sozialphobie oder anderen
          psychischen Erkrankungen ist ärztliche oder psychotherapeutische Behandlung der richtige Weg – Coaching kann
          diese begleiten, aber nicht ersetzen.
        </p>
      </div>
    </section>
  );
};

export default SchoolSection;
