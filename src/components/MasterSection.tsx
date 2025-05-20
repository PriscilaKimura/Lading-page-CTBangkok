
import { Button } from "@/components/ui/button";

const MasterSection = () => {
  return (
    <section id="mestre" className="bg-martial-black text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-martial-red opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-martial-red opacity-5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container-section relative z-10">
        <h2 className="section-title">CONHEÇA O <span className="highlight-text">MESTRE OSVALDO</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg border-4 border-martial-red">
                <img 
                  src="/uploads/2e00f0c3-4388-419c-b71e-3ee3d69c1828.png" 
                  alt="Mestre Osvaldo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-martial-red p-4 rounded-md">
                <p className="text-white font-oswald text-xl">30+ ANOS DE EXPERIÊNCIA</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-3xl font-bold mb-6 font-oswald">TRAJETÓRIA NAS ARTES MARCIAIS</h3>
            
            <p className="text-lg mb-6">
              Mestre Osvaldo é brasileiro e iniciou sua trajetória nas artes marciais no Brasil. Com dedicação e disciplina, tornou-se uma referência no Muay Thai nacional.
            </p>
            
            <p className="text-lg mb-6">
              Com uma carreira profissional de mais de 50 lutas invictas, tornou-se uma referência nacional no Muay Thai.
            </p>
            
            <p className="text-lg mb-6">
              Desde 2012, o Mestre Osvaldo lidera o CT Bangkok com uma metodologia única que combina tradição e técnicas modernas, formando diversos campeões e, principalmente, cidadãos disciplinados.
            </p>
            
            <div className="border-l-4 border-martial-red pl-6 py-2 my-8">
              <p className="text-2xl italic font-oswald">
                "A verdadeira vitória não está apenas no tatame, mas na superação diária de seus próprios limites."
              </p>
              <p className="text-martial-red text-right mt-2">- Mestre Osvaldo</p>
            </div>
            
            <div className="mt-8">
              <Button 
                className="btn-primary" 
                onClick={() => window.open('https://wa.me/5531991715810', '_blank')}
              >
                AGENDE UM TREINO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterSection;
