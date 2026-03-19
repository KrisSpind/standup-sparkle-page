const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl">Regina Huber</span>
        <p className="text-muted-foreground text-sm font-body">
          © 2026 Regina Huber · Coaching & Persönlichkeitsentwicklung
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
