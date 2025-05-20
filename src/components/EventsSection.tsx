
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EventsSection = () => {
  const eventImages = [
    {
      src: "/uploads/aa51152e-0667-4176-a403-dc209ddbaad8.png",
      alt: "Evento de Capoeira com alunos"
    },
    {
      src: "/uploads/71346298-5d99-45f5-9594-28717ef20740.png",
      alt: "Grupo de karatê com alunos infantis"
    },
    {
      src: "/uploads/509e82e1-ed23-4b81-ac01-02201c17f2af.png",
      alt: "Evento de capoeira com crianças"
    },
    {
      src: "/uploads/5fd13099-8f27-41b6-a4ff-b3599778069b.png",
      alt: "Treino de Muay Thai em grupo"
    },
    {
      src: "/uploads/80e58e74-bc38-446a-8c30-0a2175966681.png",
      alt: "Cerimônia de graduação"
    },
    {
      src: "/uploads/06923a3b-5577-403c-ac58-5c995ab9ed71.png",
      alt: "Exame de graduação Muay Thai"
    },
    {
      src: "/uploads/6418356e-475f-411e-96eb-82d039abf046.png",
      alt: "Certificados de graduação"
    },
    {
      src: "/uploads/7dc8a6e4-8ae8-47cb-9a45-9085ed00427e.png",
      alt: "Cerimônia tradicional de Muay Thai"
    },
    {
      src: "/uploads/e9d6a845-53fd-439e-a9fa-56d25f243513.png",
      alt: "Lutadores de Muay Thai"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-martial-light">
      <div className="container-section">
        <h2 className="section-title">NOSSOS <span className="highlight-text">EVENTOS</span></h2>
        
        <div className="mb-10 text-center">
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Confira os principais eventos e competições realizados no CT Bangkok. Nossos alunos participam regularmente de campeonatos e exames de graduação.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {eventImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="aspect-video bg-martial-gray rounded-lg overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default EventsSection;
