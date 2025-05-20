
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send an email to ctbangkok@gmail.com
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contato" className="bg-martial-black text-white py-20">
      <div className="container-section">
        <h2 className="section-title">ENTRE EM <span className="highlight-text">CONTATO</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="section-subtitle">FALE CONOSCO</h3>
            
            <p className="text-lg mb-8">
              Tire suas dúvidas, agende uma aula experimental ou venha nos visitar. 
              Nossa equipe está pronta para te atender e apresentar o CT Bangkok.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
                  <Input 
                    id="name" 
                    className="bg-martial-gray border-martial-gray text-white" 
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Telefone</label>
                  <Input 
                    id="phone" 
                    className="bg-martial-gray border-martial-gray text-white" 
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  className="bg-martial-gray border-martial-gray text-white" 
                  placeholder="Seu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
                <Textarea 
                  id="message" 
                  className="bg-martial-gray border-martial-gray text-white h-32" 
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="btn-primary">ENVIAR MENSAGEM</Button>
            </form>
          </div>
          
          <div>
            <h3 className="section-subtitle">ONDE ESTAMOS</h3>
            
            <div className="bg-martial-gray rounded-lg p-6 mb-8">
              <p className="text-lg mb-2">CT Bangkok</p>
              <p className="mb-2">Rua dos Astecas, 3177 - 3º andar</p>
              <p className="mb-2">Bairro Santa Mônica, Belo Horizonte - MG</p>
              <p className="mb-4">CEP: 31.530-300</p>
              
              <p className="font-bold mb-2">Horário de funcionamento:</p>
              <p className="mb-1">Segunda a Sexta: 06h às 22h</p>
              <p>Sábado: 09h às 14h</p>
              
              <p className="mt-4">Telefone: (31) 3450-0561</p>
            </div>
            
            <div className="h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.5939544654303!2d-43.9313650842255!3d-19.786577986693885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68ef45aa6a37f%3A0x4a9bd16f823ef6bd!2sRua%20dos%20Astecas%2C%203177%20-%20Santa%20Monica%2C%20Belo%20Horizonte%20-%20MG%2C%2031530-300!5e0!3m2!1spt-BR!2sbr!4v1583616436365!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                aria-hidden="false" 
                title="Mapa para o CT Bangkok"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
