import type { ReactNode } from "react";
import FooterSection from "@/components/FooterSection";
import Logo from "@/components/Logo";

interface LegalLayoutProps {
  title: string;
  children: ReactNode;
}

const LegalLayout = ({ title, children }: LegalLayoutProps) => (
  <div className="min-h-screen bg-background flex flex-col">
    <header className="border-b border-border py-6">
      <div className="container mx-auto px-6">
        <a href="/" aria-label="Zur Startseite">
          <Logo />
        </a>
      </div>
    </header>
    <main className="flex-1 container mx-auto px-6 py-16 md:py-24">
      <article className="max-w-2xl mx-auto font-body text-foreground leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_a]:text-primary [&_a]:underline">
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-10">{title}</h1>
        {children}
      </article>
    </main>
    <FooterSection />
  </div>
);

export default LegalLayout;
