
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section 
      id="inicio" 
      className="pt-24 min-h-screen flex items-center bg-cover bg-center bg-martial-black text-white relative"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/uploads/b5bbe520-d5aa-42d7-bb98-696da171ecee.png')"
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            TREINE COM O <span className="text-martial-red">MESTRE OSVALDO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-oswald tracking-wide">
            VIVA A DISCIPLINA DAS ARTES MARCIAIS
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl">
            Desenvolva sua força, foco e técnica no melhor centro de treinamento de artes marciais de Belo Horizonte. Aulas para todos os níveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="btn-primary text-lg" onClick={() => window.location.href='#horarios'}>COMECE HOJE MESMO</Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-martial-black text-lg font-oswald uppercase"
              onClick={() => window.location.href='#sobre'}
            >
              CONHEÇA O CT
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-martial-black to-transparent"></div>
    </section>
  );
};

export default HeroBanner;
