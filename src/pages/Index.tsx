
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import MasterSection from "@/components/MasterSection";
import ModalitiesSection from "@/components/ModalitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <AboutSection />
        <MasterSection />
        <ModalitiesSection />
        <EventsSection />
        <TestimonialsSection />
        <ScheduleSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
