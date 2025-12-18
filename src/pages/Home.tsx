import { Zap, ShieldCheck, Layers, Layout, Menu } from 'lucide-react';

// Define theme
const theme = {
    primary: '#8B2BE2',
    secondary: '#9D4EDD',
    light: '#C69FDE',
    opacity: '#E2D4E8'
}

const App = () => {
    return (

        <div className="min-h-screen text-slate-800 bg-[radial-gradient(circle_at_top_left,#f8fafc_0%,#e2e8f0_100%)] font-sans">
            {/* Header / Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
                <div className="text-2xl font-bold tracking-tight text-blue-600">
                    make.api<span className="text-slate-900">.</span>
                </div>

                <div className="hidden md:flex space-x-8 font-medium">
                    <a href="#" className="hover:text-blue-600 transition-colors">Recursos</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Segurança</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Preços</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-800 transition-all active:scale-95">
                        Começar Agora
                    </button>
                    <button className="md:hidden p-2 text-slate-600">
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
                <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
                    Plataforma de Lançamento Rápido
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                    Crie fácil, e rápido
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
                    Imagine, execute e tenha seu serviço em pouco tempo com segurança e robustez.
                    Nossa infraestrutura cuida do pesado para você focar no que importa.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <button style={{ backgroundColor: theme.primary }} className="text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95">
                        Criar meu Projeto
                    </button>
                    <button className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all hover:border-slate-300">
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
                    <div>© 2025 CrieFácil Platform. Todos os direitos reservados.</div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-600 transition-colors">Termos</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-blue-600 transition-colors">Contato</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;