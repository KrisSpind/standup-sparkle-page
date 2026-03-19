import HeroSection from "@/components/HeroSection";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MethodSection />
      <TestimonialsSection />
      <BookingSection />
      <FooterSection />
    </div>
  );
};

export default Index;
