
import { Check } from "lucide-react";

const scheduleData = [
  { day: "Segunda", classes: [
    { time: "06:00 - 07:00", modality: "Muay Thai" },
    { time: "08:00 - 09:00", modality: "Kung Fu" },
    { time: "18:00 - 19:30", modality: "Jiu-Jitsu" },
    { time: "20:00 - 21:30", modality: "Muay Thai" }
  ]},
  { day: "Terça", classes: [
    { time: "06:00 - 07:00", modality: "Funcional" },
    { time: "08:00 - 09:00", modality: "Jiu-Jitsu" },
    { time: "18:00 - 19:30", modality: "Muay Thai" },
    { time: "20:00 - 21:30", modality: "MMA" }
  ]},
  { day: "Quarta", classes: [
    { time: "06:00 - 07:00", modality: "Muay Thai" },
    { time: "08:00 - 09:00", modality: "Kung Fu" },
    { time: "18:00 - 19:30", modality: "Jiu-Jitsu" },
    { time: "20:00 - 21:30", modality: "Muay Thai" }
  ]},
  { day: "Quinta", classes: [
    { time: "06:00 - 07:00", modality: "Funcional" },
    { time: "08:00 - 09:00", modality: "Jiu-Jitsu" },
    { time: "18:00 - 19:30", modality: "Muay Thai" },
    { time: "20:00 - 21:30", modality: "MMA" }
  ]},
  { day: "Sexta", classes: [
    { time: "06:00 - 07:00", modality: "Muay Thai" },
    { time: "08:00 - 09:00", modality: "Kung Fu" },
    { time: "18:00 - 19:30", modality: "Jiu-Jitsu" },
    { time: "20:00 - 21:30", modality: "Muay Thai" }
  ]},
  { day: "Sábado", classes: [
    { time: "09:00 - 10:30", modality: "Muay Thai" },
    { time: "11:00 - 12:30", modality: "Jiu-Jitsu" }
  ]},
];

const plans = [
  {
    name: "Plano Básico",
    price: "R$ 150",
    period: "/mês",
    features: [
      "Acesso a 1 modalidade",
      "2x por semana",
      "Material de treino incluso",
      "Acesso aos vestiários"
    ],
    highlight: false
  },
  {
    name: "Plano Premium",
    price: "R$ 220",
    period: "/mês",
    features: [
      "Acesso a 2 modalidades",
      "3x por semana",
      "Material de treino incluso",
      "Acesso aos vestiários",
      "1 aula particular por mês"
    ],
    highlight: true
  },
  {
    name: "Plano Black",
    price: "R$ 300",
    period: "/mês",
    features: [
      "Acesso a todas modalidades",
      "Frequência ilimitada",
      "Material de treino incluso",
      "Acesso aos vestiários",
      "2 aulas particulares por mês",
      "Desconto em eventos"
    ],
    highlight: false
  }
];

const ScheduleSection = () => {
  return (
    <section id="horarios" className="py-20">
      <div className="container-section">
        <h2 className="section-title">HORÁRIOS E <span className="highlight-text">PLANOS</span></h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Horários */}
          <div>
            <h3 className="section-subtitle mb-6">HORÁRIOS DE TREINOS</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-martial-black text-white">
                    <th className="py-3 px-4 text-left">Dia</th>
                    <th className="py-3 px-4 text-left">Horário</th>
                    <th className="py-3 px-4 text-left">Modalidade</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((day, dayIndex) => (
                    day.classes.map((classItem, classIndex) => (
                      <tr 
                        key={`${dayIndex}-${classIndex}`}
                        className={classIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        {classIndex === 0 ? (
                          <td 
                            className="py-3 px-4 font-semibold border-t" 
                            rowSpan={day.classes.length}
                          >
                            {day.day}
                          </td>
                        ) : null}
                        <td className="py-3 px-4 border-t">{classItem.time}</td>
                        <td className="py-3 px-4 border-t">{classItem.modality}</td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-sm text-gray-600 italic">
              * Os horários podem sofrer alterações. Consulte sempre a programação atualizada na recepção.
            </p>
          </div>
          
          {/* Planos */}
          <div>
            <h3 className="section-subtitle mb-6">PLANOS DE ASSINATURA</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`rounded-lg shadow-lg overflow-hidden ${
                    plan.highlight 
                      ? "border-2 border-martial-red transform scale-105 z-10" 
                      : "bg-white"
                  }`}
                >
                  <div className={`p-6 text-center ${plan.highlight ? "bg-martial-red text-white" : "bg-gray-50"}`}>
                    <h4 className="font-oswald text-xl font-bold">{plan.name}</h4>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-sm">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-martial-red mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-center">
              Matrícula única de R$ 100,00. Desconto de 10% para pagamento anual à vista.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
