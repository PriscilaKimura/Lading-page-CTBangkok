
const AboutSection = () => {
  return (
    <section id="sobre" className="bg-martial-light py-20">
      <div className="container-section">
        <h2 className="section-title">SOBRE O <span className="highlight-text">CT BANGKOK</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/uploads/cf5b175a-e782-48c8-ae58-0346a59c54f8.png" 
                alt="Interior do CT Bangkok" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-martial-red p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-white font-oswald text-xl">DESDE 2012</p>
            </div>
          </div>
          
          <div>
            <h3 className="section-subtitle mb-4">NOSSA MISSÃO</h3>
            <p className="text-lg mb-6">
              O CT Bangkok é muito mais que uma academia de artes marciais. Somos um centro de formação de atletas e, acima de tudo, de transformação de vidas através da disciplina, respeito e superação.
            </p>
            
            <h3 className="section-subtitle mb-4">VALORES</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-oswald text-xl mb-2 text-martial-red">DISCIPLINA</h4>
                <p>Formamos não apenas lutadores, mas indivíduos disciplinados para todos os aspectos da vida.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-oswald text-xl mb-2 text-martial-red">RESPEITO</h4>
                <p>Ensinamos o valor do respeito aos mestres, colegas e, principalmente, a si mesmo.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-oswald text-xl mb-2 text-martial-red">PERSISTÊNCIA</h4>
                <p>Cultivamos a mentalidade de nunca desistir, dentro e fora do tatame.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-oswald text-xl mb-2 text-martial-red">COMUNIDADE</h4>
                <p>Formamos uma família unida pelo amor às artes marciais e pelo respeito mútuo.</p>
              </div>
            </div>
            
            <p className="text-lg font-bold">
              O CT Bangkok oferece um ambiente seguro e profissional para praticantes de todos os níveis, desde iniciantes até lutadores profissionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
