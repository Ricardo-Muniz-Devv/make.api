import { useState } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';

const PricingPage = () => {
  const [showToast, setShowToast] = useState(false);

  const handleStartTrial = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const professionalPlan = {
    name: 'Profissional',
    price: '49',
    description: 'Desbloqueie todo o poder com ferramentas avançadas.',
    features: [
      'Projetos Ilimitados',
      'Insights Avançados de Equipe',
      'Suporte Prioritário',
      'Integrações Personalizadas',
    ],
    buttonText: 'Inicie seu Teste de 7 Dias',
    trial: '✨ 7 Dias de Teste Grátis',
    highlighted: true,
    icon: <Zap className="w-5 h-5 text-purple-600" />,
  };

  return (
    <div className="min-h-screen bg-[#fcfaff] py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-purple-600 font-semibold tracking-wide uppercase text-sm mb-2">Pricing</h2>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Pronto para transformar seu fluxo de trabalho?
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Aproveite todos os recursos do nosso plano mais popular com um teste gratuito de 7 dias.
          </p>
        </div>

        {/* Pricing Card Centralizado */}
        <div className="flex justify-center items-center py-4">
          <div
            className="relative flex flex-col bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ring-2 ring-purple-500 shadow-2xl z-10 scale-105 max-w-md w-full"
          >
            <div className="absolute top-0 right-0 left-0 flex justify-center -translate-y-1/2">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                Plano Selecionado
              </span>
            </div>

            <div className="flex items-center gap-3 mb-2">
              {professionalPlan.icon}
              <h3 className="text-xl font-bold">{professionalPlan.name}</h3>
            </div>

            <p className="text-gray-500 mb-6 text-sm">{professionalPlan.description}</p>

            <div className="flex items-baseline mb-4">
              <span className="text-5xl font-extrabold">${professionalPlan.price}</span>
              <span className="text-gray-500 ml-1 font-medium">/mo</span>
            </div>

            <div className="bg-purple-50 text-purple-700 text-xs font-bold py-2 px-3 rounded-lg inline-flex items-center gap-2 mb-6 w-fit">
              {professionalPlan.trial}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {professionalPlan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 mr-3 shrink-0 text-purple-600" />
                  <span className="text-sm leading-tight">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleStartTrial}
              className="w-full py-4 px-4 rounded-xl font-bold transition-all duration-200 active:scale-95 bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg shadow-purple-200 hover:opacity-90"
            >
              {professionalPlan.buttonText}
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">No credit card required to start</p>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      <div
        className={`fixed bottom-8 right-8 bg-gray-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 transform transition-all duration-500 ease-out z-50 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
      >
        <div className="bg-purple-500 p-1 rounded-full">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-sm">Trial Started!</p>
          <p className="text-xs text-gray-400">Welcome to the professional plan.</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <PricingPage />;
}