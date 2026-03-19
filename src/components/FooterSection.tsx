import { Mic } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Mic className="w-5 h-5 text-primary" />
          <span className="font-display font-bold text-lg">StageCoach</span>
        </div>
        <p className="text-muted-foreground text-sm font-body">
          © 2026 StageCoach. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
