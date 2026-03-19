import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Für wen ist Coaching geeignet?",
    answer:
      "Coaching ist für alle, die sich weiterentwickeln möchten — unabhängig von Alter, Beruf oder Lebenssituation. Ob du vor einer Entscheidung stehst, innere Blockaden spürst oder einfach mehr Klarheit suchst: Coaching kann ein wertvoller Begleiter sein.",
  },
  {
    question: "Wie läuft ein Erstgespräch ab?",
    answer:
      "Das Erstgespräch ist kostenlos und unverbindlich. Wir lernen uns kennen, du erzählst mir, was dich gerade beschäftigt, und wir schauen gemeinsam, ob und wie ich dich begleiten kann.",
  },
  {
    question: "Was kostet eine Coaching-Sitzung?",
    answer:
      "Die Preise besprechen wir im persönlichen Gespräch, da sie vom Format und Umfang abhängen. Es gibt Einzelsitzungen, Pakete und auch Gruppenformate.",
  },
  {
    question: "Wie viele Sitzungen brauche ich?",
    answer:
      "Das ist ganz individuell. Manche Klient:innen kommen mit 3–5 Sitzungen weiter, andere begleite ich über einen längeren Zeitraum. Wir stimmen das gemeinsam ab.",
  },
  {
    question: "Findet das Coaching online oder vor Ort statt?",
    answer:
      "Beides ist möglich. Viele Sitzungen finden online per Video statt, aber auch persönliche Treffen können vereinbart werden.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium">
            Häufige <em className="text-primary">Fragen</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6"
              >
                <AccordionTrigger className="font-body font-medium text-left text-base py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body font-light text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
