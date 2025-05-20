
import { ArrowUp } from "lucide-react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-martial-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="inline-flex items-center mb-4">
              <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center overflow-hidden mr-3">
                <img 
                  src="/uploads/d5947277-58ba-4920-b84b-dd541f5547ec.png" 
                  alt="CT Bangkok Logo" 
                  className="h-16 w-16 object-contain" 
                />
              </div>
              <span className="font-oswald text-3xl font-bold tracking-widest">
                CT <span className="text-martial-red">BANGKOK</span>
              </span>
            </a>
            <p className="mb-4">
              Centro de treinamento em artes marciais com excelência desde 2012. Formando campeões no tatame e na vida.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1EiRustjow/" 
                className="hover:text-martial-red transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a 
                href="https://www.instagram.com/ct_bangkok" 
                className="hover:text-martial-red transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg mb-4 uppercase">Modalidades</h4>
            <ul className="space-y-2">
              <li><a href="#modalidades" className="hover:text-martial-red transition-colors">Muay Thai</a></li>
              <li><a href="#modalidades" className="hover:text-martial-red transition-colors">Jiu-Jitsu</a></li>
              <li><a href="#modalidades" className="hover:text-martial-red transition-colors">Kung Fu</a></li>
              <li><a href="#modalidades" className="hover:text-martial-red transition-colors">MMA</a></li>
              <li><a href="#modalidades" className="hover:text-martial-red transition-colors">Karatê</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg mb-4 uppercase">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-martial-red transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-martial-red transition-colors">Sobre</a></li>
              <li><a href="#mestre" className="hover:text-martial-red transition-colors">Mestre Osvaldo</a></li>
              <li><a href="#modalidades" className="hover:text-martial-red transition-colors">Treinamentos</a></li>
              <li><a href="#eventos" className="hover:text-martial-red transition-colors">Eventos</a></li>
              <li><a href="#horarios" className="hover:text-martial-red transition-colors">Horários e Planos</a></li>
              <li><a href="#contato" className="hover:text-martial-red transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg mb-4 uppercase">Contato</h4>
            <ul className="space-y-2">
              <li>Rua dos Astecas, 3177 - 3º andar</li>
              <li>Bairro Santa Mônica, Belo Horizonte - MG</li>
              <li>CEP: 31.530-300</li>
              <li className="pt-2">Telefone: (31) 3450-0561</li>
              <li>Email: ctbangkok@gmail.com</li>
            </ul>
            
            <a 
              href="https://wa.me/5531991715810"
              className="mt-4 inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
        
        <hr className="border-martial-gray my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} CT Bangkok. Todos os direitos reservados.</p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-martial-red p-3 rounded-full hover:bg-red-700 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
