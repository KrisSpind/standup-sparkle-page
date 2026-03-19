const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl">StandUp Coaching</span>
        <div className="flex gap-6 text-sm font-body text-muted-foreground">
          <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
          <a href="#impressum" className="hover:text-foreground transition-colors">Impressum</a>
        </div>
        <p className="text-muted-foreground text-sm font-body">
          © 2025 Regina Huber · StandUp Coaching
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
