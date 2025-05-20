
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-martial-black bg-opacity-90 text-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="h-14 w-14 rounded-full bg-black flex items-center justify-center overflow-hidden mr-3">
                <img 
                  src="/uploads/d5947277-58ba-4920-b84b-dd541f5547ec.png" 
                  alt="CT Bangkok Logo" 
                  className="h-14 w-14 object-contain" 
                />
              </div>
              <span className="font-oswald text-2xl font-bold tracking-widest hidden sm:inline-block">
                CT <span className="text-martial-red">BANGKOK</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-white hover:text-martial-red"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 font-oswald text-lg">
            <a href="#inicio" className="hover:text-martial-red transition-colors duration-300">Início</a>
            <a href="#sobre" className="hover:text-martial-red transition-colors duration-300">Sobre</a>
            <a href="#mestre" className="hover:text-martial-red transition-colors duration-300">Mestre Osvaldo</a>
            <a href="#modalidades" className="hover:text-martial-red transition-colors duration-300">Treinamentos</a>
            <a href="#eventos" className="hover:text-martial-red transition-colors duration-300">Eventos</a>
            <a href="#horarios" className="hover:text-martial-red transition-colors duration-300">Horários</a>
            <a href="#contato" className="hover:text-martial-red transition-colors duration-300">Contato</a>
          </nav>

          {/* Call to action button */}
          <div className="hidden md:block">
            <Button className="btn-primary" onClick={() => window.location.href='#horarios'}>AGENDE SUA AULA</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-martial-black">
            <nav className="flex flex-col py-4 space-y-4 font-oswald text-lg">
              <a href="#inicio" className="hover:text-martial-red transition-colors duration-300" onClick={toggleMenu}>Início</a>
              <a href="#sobre" className="hover:text-martial-red transition-colors duration-300" onClick={toggleMenu}>Sobre</a>
              <a href="#mestre" className="hover:text-martial-red transition-colors duration-300" onClick={toggleMenu}>Mestre Osvaldo</a>
              <a href="#modalidades" className="hover:text-martial-red transition-colors duration-300" onClick={toggleMenu}>Treinamentos</a>
              <a href="#eventos" className="hover:text-martial-red transition-colors duration-300" onClick={toggleMenu}>Eventos</a>
              <a href="#horarios" className="hover:text-martial-red transition-colors duration-300" onClick={toggleMenu}>Horários</a>
              <a href="#contato" className="hover:text-martial-red transition-colors duration-300" onClick={toggleMenu}>Contato</a>
              <Button className="btn-primary w-full" onClick={() => window.location.href='#horarios'}>AGENDE SUA AULA</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
