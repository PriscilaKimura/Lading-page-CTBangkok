
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Praticante há 3 anos",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&auto=format",
    text: "O CT Bangkok mudou minha vida! Além da forma física, ganhei disciplina e foco. O Mestre Osvaldo é um exemplo de profissional e ser humano."
  },
  {
    name: "Fernanda Costa",
    role: "Campeã Estadual",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format",
    text: "Graças ao treinamento intenso e à metodologia do CT Bangkok, consegui me tornar campeã estadual de Muay Thai. A equipe é como uma família para mim."
  },
  {
    name: "Ricardo Almeida",
    role: "Praticante há 5 anos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format",
    text: "Comecei do zero, sem nenhuma experiência em lutas. Hoje, após 5 anos, posso dizer que o CT Bangkok transformou completamente meu físico e minha mentalidade."
  },
  {
    name: "Amanda Ferreira",
    role: "Aluna de Kung Fu",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format",
    text: "As aulas de Kung Fu são incríveis! A filosofia por trás da arte marcial e o ambiente do CT Bangkok proporcionam uma experiência completa."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 3;
  
  const nextSlide = () => {
    if (currentIndex < testimonials.length - visibleTestimonials) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - visibleTestimonials);
    }
  };
  
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    Math.min(currentIndex + visibleTestimonials, testimonials.length)
  );

  return (
    <section className="bg-martial-light py-20">
      <div className="container-section">
        <h2 className="section-title">DEPOIMENTOS DE <span className="highlight-text">ALUNOS</span></h2>
        
        <div className="hidden md:flex justify-between items-center mb-12">
          {/* Desktop carousel */}
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-2 border-martial-black hover:bg-martial-black hover:text-white"
            onClick={prevSlide}
          >
            <ArrowLeft />
          </Button>
          
          <div className="flex justify-center gap-6">
            {displayedTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 max-w-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-martial-red">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full border-2 border-martial-black hover:bg-martial-black hover:text-white"
            onClick={nextSlide}
          >
            <ArrowRight />
          </Button>
        </div>
        
        {/* Mobile testimonials */}
        <div className="md:hidden">
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-martial-red">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
