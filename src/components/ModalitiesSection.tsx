
import { Trophy, Sword, Shield, Dumbbell, Award } from "lucide-react";

const ModalityCard = ({ title, icon: Icon, description, color }: { 
  title: string; 
  icon: React.ElementType; 
  description: string; 
  color: string; 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className={`${color} p-6`}>
        <Icon className="h-16 w-16 text-white" />
      </div>
      <div className="p-6">
        <h3 className="font-oswald text-2xl mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const ModalitiesSection = () => {
  const modalities = [
    {
      title: "MUAY THAI",
      icon: Dumbbell,
      color: "bg-martial-red",
      description: "A arte dos 8 membros. Desenvolva golpes potentes com punhos, cotovelos, joelhos e canelas."
    },
    {
      title: "JIU-JITSU",
      icon: Shield,
      color: "bg-blue-600",
      description: "Arte marcial de domínio e finalização. Aprenda técnicas de alavancas, imobilizações e estrangulamentos."
    },
    {
      title: "KUNG FU",
      icon: Sword,
      color: "bg-yellow-600",
      description: "Arte marcial chinesa milenar com movimentos fluidos e técnicas diversificadas de defesa pessoal."
    },
    {
      title: "MMA",
      icon: Trophy,
      color: "bg-martial-gray",
      description: "Combinação das melhores técnicas de diferentes artes marciais para combate em pé e no solo."
    },
    {
      title: "KARATÊ",
      icon: Award,
      color: "bg-green-600",
      description: "Arte marcial japonesa focada em golpes precisos, disciplina e desenvolvimento do caráter."
    }
  ];

  return (
    <section id="modalidades" className="py-20">
      <div className="container-section">
        <h2 className="section-title">MODALIDADES <span className="highlight-text">OFERECIDAS</span></h2>
        
        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          Oferecemos treinamento especializado em diversas artes marciais para todas as idades e níveis de experiência. Cada modalidade é ministrada por profissionais certificados e experientes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {modalities.map((modality, index) => (
            <ModalityCard 
              key={index}
              title={modality.title}
              icon={modality.icon}
              color={modality.color}
              description={modality.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg">
            Além destas modalidades principais, também oferecemos aulas especiais de
            Boxe e treinamentos funcionais específicos para artes marciais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModalitiesSection;
