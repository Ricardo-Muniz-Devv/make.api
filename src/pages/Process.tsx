import React from 'react';
import { 
  Terminal, 
  BrainCircuit, 
  Database, 
  ShieldCheck, 
  Code2, 
  Rocket, 
  Workflow,
  CheckCircle2,
  ChevronDown,
  Activity,
  Box,
  Layers,
  Zap
} from 'lucide-react';


const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    :root { --font-inter: 'Inter', sans-serif; }
    body { 
      font-family: var(--font-inter);
      background-color: #f8fafc;
      color: #0f172a;
      margin: 0;
      padding: 0;
    }
    @keyframes subtle-bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    .animate-subtle-bounce {
      animation: subtle-bounce 2s ease-in-out infinite;
    }
  `}} />
);


interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
  steps: string[];
  tag: string;
}

interface SectionProps extends ProcessStep {
  isLast: boolean;
  index: number;
}

const ProcessCard: React.FC<SectionProps> = ({ icon: Icon, title, description, steps, isLast, tag }) => (
  <div className="relative w-full">
    {/* Flow Connector Line - Enhanced for IDE parity */}
    {!isLast && (
      <div 
        className="absolute left-[30px] md:left-[40px] top-24 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-200 to-transparent z-0 opacity-50" 
        style={{ height: 'calc(100% + 1rem)' }}
      />
    )}
    
    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(147,51,234,0.12)] border border-purple-50 hover:border-purple-300 transition-all duration-500 group relative z-10 mb-16">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Icon Container */}
        <div className="relative flex-shrink-0">
          <div className="bg-purple-600 w-16 h-16 md:w-24 md:h-24 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-200 group-hover:rotate-6 transition-transform duration-500">
            <Icon className="text-white w-8 h-8 md:w-12 md:h-12" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center border border-purple-100 shadow-sm">
            <Zap className="w-4 h-4 text-purple-500" />
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
            <div>
              <span className="text-xs font-black text-purple-500 uppercase tracking-widest mb-1 block">
                {tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                {title}
              </h3>
            </div>
            <div className="flex-shrink-0 px-4 py-1 bg-slate-50 border border-slate-100 rounded-full flex items-center gap-2 w-fit">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Ready for Build</span>
            </div>
          </div>
          
          <p className="text-slate-500 text-base md:text-lg mb-8 leading-relaxed max-w-3xl">
            {description}
          </p>
          
          {/* Sub-steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-purple-50/40 p-4 rounded-2xl border border-purple-100/50 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="bg-purple-100 p-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                </div>
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Directional Indicator */}
    {!isLast && (
      <div className="flex justify-center -mt-12 mb-8 relative z-20">
        <div className="bg-white p-3 rounded-2xl border border-purple-100 shadow-xl text-purple-500 animate-subtle-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    )}
  </div>
);

export default function App() {
  const sections: ProcessStep[] = [
    {
      icon: Terminal,
      tag: "Fundação",
      title: "01. Iniciar Web App",
      description: "Estabelecer a base e o ambiente principal. Esta fase garante que todas as dependências do desenvolvedor, variáveis de ambiente e estruturas do projeto estejam sincronizadas e seguras.",
      steps: [
        "Configuração do Ambiente em Nuvem",
        "Estrutura Inicial do Projeto",
        "Gerenciamento de Pacotes",
        "Estratégia de Controle de Versão"
      ]
    },
    {
      icon: BrainCircuit,
      tag: "Arquitetura",
      title: "02. Pensamento & Modelagem",
      description: "Fase de planejamento mental do sistema. Aqui definimos relações entre recursos, fluxos de dados e máquinas de estado para garantir que o sistema seja logicamente consistente antes de escrever código.",
      steps: [
        "Mapeamento do Domínio de Lógica",
        "Especificação de Endpoints da API",
        "Relacionamentos entre Entidades",
        "Definição de Comportamentos"
      ]
    },
    {
      icon: Database,
      tag: "Persistência",
      title: "03. Gerenciamento de Dados",
      description: "Construção da camada de armazenamento durável. Implementamos esquemas de alto desempenho e migrações para garantir integridade dos dados e eficiência nas consultas.",
      steps: [
        "Esquema Relacional",
        "Ganchos de Migração",
        "ORM com Tipagem Segura",
        "Indexação de Dados"
      ]
    },
    {
      icon: Code2,
      tag: "Execução",
      title: "04. Motor de Lógica",
      description: "O coração da aplicação. As regras de negócio são traduzidas em código performático usando serviços modulares e orquestração de middlewares.",
      steps: [
        "Controladores Reativos",
        "Middleware Estratégico",
        "Camada de Serviços Isolada",
        "Tratamento Padronizado de Erros"
      ]
    },
    {
      icon: ShieldCheck,
      tag: "Integridade",
      title: "05. Protocolos de Segurança",
      description: "Fortalecimento do sistema contra vulnerabilidades. Implementação de provedores de identidade robustos, limitação de requisições e camadas defensivas de validação.",
      steps: [
        "Autenticação Múltipla com JWT",
        "Endurecimento de CORS",
        "Validação de Esquemas",
        "Mitigação de DDoS"
      ]
    },
    {
      icon: Rocket,
      tag: "Implantação",
      title: "06. Build & Lançamento",
      description: "Transição para produção. A integração contínua executa suítes rigorosas de testes antes que o artefato final seja implantado na nuvem.",
      steps: [
        "Testes Unitários Automatizados",
        "Especificações OAS/Swagger",
        "Automação de Pipeline",
        "Artefatos de Produção"
      ]
    }
  ]   

  return (
    <div className="min-h-screen pb-32 selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden w-full box-border">
      <GlobalStyles />
      
      {/* Dynamic Background Elements - Using Fixed to prevent layout shifts */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-300 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200 rounded-full blur-[120px]" />
      </div>

      {/* Navigation / Top Bar */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
            <Layers className="text-white w-6 h-6" />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900">API.OS</span>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500 shadow-sm">
            v1.0.0
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center pt-14 mb-28 px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.3em] text-purple-700 uppercase bg-purple-100/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
          <Activity className="w-3 h-3 animate-pulse" />
          System Methodology
        </div>
        <h1 className="text-5xl md:text-3xll lg:text-8xl font-[900] text-slate-900 mb-4 tracking-tighter leading-[0.9] text-balance">
          Build Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-500">API Pipeline</span>
        </h1>
        <p className="text-slate-500 text-xl md:text-2xll leading-relaxed max-w-2xl mx-auto font-normal mt-8 text-pretty">
          A definitiva arquitetura guia moderna backend engenharia e escalacel com design system
        </p>
      </header>

      {/* Main Flow Section */}
      <main className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-200 to-purple-200"></div>
          <span className="flex items-center gap-3 text-sm font-black text-purple-400 uppercase tracking-[0.3em] whitespace-nowrap">
            <Workflow className="w-5 h-5" />
            Process Flow
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-purple-200 to-purple-200"></div>
        </div>

        <div className="relative space-y-4">
          {sections.map((section, index) => (
            <ProcessCard 
              key={index} 
              index={index}
              {...section} 
              isLast={index === sections.length - 1} 
            />
          ))}
        </div>
      </main>

      {/* Terminal Footer Node */}
      <div className="flex flex-col items-center mt-12 px-6 relative z-10">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>
          <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl flex flex-col items-center text-center">
            <div className="bg-slate-800 p-4 rounded-2xl mb-6 shadow-inner">
              <Box className="text-purple-400 w-10 h-10" />
            </div>
            <h4 className="text-white font-bold text-xl mb-2 tracking-tight">Build Completed</h4>
            <p className="text-slate-400 text-sm mb-6 max-w-[200px]">System architecture initialized and verified.</p>
            <div className="flex items-center gap-3 px-5 py-2.5 bg-slate-800/50 rounded-full border border-slate-700">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
              <span className="text-slate-300 font-mono text-xs font-bold tracking-tight">STATUS: OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="mt-32 text-center border-t border-slate-200 pt-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <div className="flex items-center gap-2 mb-2">
                <Layers className="text-purple-600 w-5 h-5" />
                <span className="font-black tracking-tighter text-slate-900">API.OS</span>
             </div>
             <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
               © 2025 Architecture Archive
             </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-bold text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-purple-600 transition-colors duration-300">Documentation</a>
            <a href="#" className="hover:text-purple-600 transition-colors duration-300">Github</a>
            <a href="#" className="hover:text-purple-600 transition-colors duration-300">System Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}