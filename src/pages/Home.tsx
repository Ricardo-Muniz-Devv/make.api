import { Zap, ShieldCheck, Layers, Layout, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define theme
const theme = {
  primary: '#8B2BE2',
  secondary: '#9D4EDD',
  light: '#C69FDE',
  opacity: '#E2D4E8',
  orgPrimary: '#ED8863',
  orgSecondary: '#F0A785'
}

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


const Home = () => {

  return (
    <div className="min-h-screen text-slate-800 bg-[radial-gradient(circle_at_top_left,#f8fafc_0%,#e2e8f0_100%)] font-sans">
      {/* Header / Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          make.api
        </div>

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">Preços</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to={'/login'} className="bg-slate-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-800 transition-all active:scale-95">
            Começar Agora
          </Link>
          <button className="md:hidden p-2 text-slate-600">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide uppercase bg-blue-50 rounded-full"
          style={{ color: theme.secondary }}>
          - Plataforma de Lançamento Rápido -
        </div>

        <h1 className="text-5xl md:text-2xs lg:text-8xl font-[900] text-slate-900 mb-8 tracking-tighter leading-[0.9] text-balance">
          Crie fácil, <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-500">e rápido</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          Imagine, execute e tenha seu serviço em pouco tempo com segurança e robustez.
          Nossa infraestrutura cuida do pesado para você focar no que importa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20 mt-2">
          <div>
          </div>
          <Link
            to="/login"
            style={{ backgroundColor: theme.secondary }} className="shadow-lg shadow-gray-500/50 
            hover:shadow-xl hover:shadow-purple-500/50 
            transition duration-300 bg-gray-600 text-white px-8 py-4 rounded-xl font- mr-6 font-wide text-lg hover:bg-blue-700 active:scale-95">
            Criar meu modelo
          </Link>
          <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-50 transition-all hover:border-slate-300">
            Ver Demonstração
          </button>
        </div>

        {/* Mockup UI Element */}
        <div className="w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl overflow-hidden transition-transform hover:scale-[1.01] duration-500">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="ml-4 h-4 w-32 bg-slate-100 rounded" />
          </div>
          <div className="h-64 md:h-96 w-full bg-slate-50 rounded-lg flex flex-col items-center justify-center border border-dashed border-slate-300">
            <Layout className="text-slate-300 mb-4" size={48} />
            <span className="text-slate-400 font-medium italic">Painel de Controle Intuitivo</span>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Speed Feature */}
            <div className="group p-6 rounded-2xl transition-all hover:bg-slate-50 hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Velocidade Incrível</h3>
              <p className="text-slate-600">
                Implementação instantânea para que você não perca tempo com configurações complexas.
              </p>
            </div>

            {/* Security Feature */}
            <div className="group p-6 rounded-2xl transition-all hover:bg-slate-50 hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança Total</h3>
              <p className="text-slate-600">
                Proteção de dados avançada e conformidade com padrões globais de segurança.
              </p>
            </div>

            {/* Robustness Feature */}
            <div className="group p-6 rounded-2xl transition-all hover:bg-slate-50 hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Robustez e Escala</h3>
              <p className="text-slate-600">
                Sua infraestrutura cresce junto com seu negócio, sem quedas ou gargalos inesperados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div>© 2025 make.api Platform. Todos os direitos reservados.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to={'/terms'} className="hover:text-blue-600 transition-colors">Termos</Link>
            <a href="mailto:rcardo.muniz.devv@gmail.com" className="hover:text-blue-600 transition-colors">Contato</a>
            <Link to={'/about'}>Sobre</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;