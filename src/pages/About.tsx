import { Terminal, Send, Check, Copy, Layout, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const requestPayload = {
    prompt: "Generate a CRUD API for a Task Manager",
    language: "Node.js",
    framework: "Express",
    db: "Connected"
  };

  const responsePayload = {
    status: "success",
    api_endpoint: "https://api.makeapi.ai/v1/deploy",
    code_generated: true,
    message: "API architecture created and optimized for scale."
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-700" style={{ fontFamily: '"Inter", sans-serif' }}>
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          make.api
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to={'/process'} className="hover:text-indigo-600 transition-colors mr-2">Processos</Link>
          <Link  to={'/login'} className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">
            Launch App
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Um pouco do desafio de iniciar! <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            sabemos, somos hustlers.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          Criamos uma aplicação que simplifica a produção, teste, e ajuda CEOs que não são de tech, basta seguir os passos.
        </p>

        {/* The Mac Window Visualization */}
        <div className="relative mx-auto mt-16 max-w-4xl group">
          {/* Decorative gradients */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          
          <div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
            {/* macOS Title Bar */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
                <Layout className="w-3 h-3" />
                make-api-playground.app
              </div>
              <div className="w-12"></div>
            </div>

            {/* Window Content */}
            <div className="flex-1 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white min-h-[400px]">
              
              {/* Request Side */}
              <div className="p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                    <Send className="w-3 h-3" /> Request
                  </span>
                  <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded border border-indigo-100 font-mono">
                    POST /generate
                  </span>
                </div>
                <div className="flex-1 bg-slate-900 rounded-lg p-5 text-left font-mono text-sm overflow-hidden shadow-inner">
                  <div className="flex gap-2 text-slate-500 mb-2">
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  </div>
                  <pre className="text-indigo-300 leading-6 flex-wrap">
                    <code>
                      {JSON.stringify(requestPayload, null, 3)}
                    </code>
                  </pre>
                  <div className="mt-4 flex justify-end">
                    <div className="animate-pulse bg-indigo-500 w-2 h-4"></div>
                  </div>
                </div>
              </div>

              {/* Response Side */}
              <div className="p-6 flex flex-col bg-slate-50/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
                    <Check className="w-4 h-4" /> Response
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100 font-mono">
                    200 OK
                  </span>
                </div>
                <div className="flex-1 bg-white border border-slate-200 rounded-lg p-5 text-left font-mono text-sm shadow-sm">
                  <pre className="text-slate-700 leading- overflow-auto">
                    <code>
                      {JSON.stringify(responsePayload, null, 2)}
                    </code>
                  </pre>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex gap-2 text-xs text-slate-400 italic">
                      <Sparkles className="w-3 h-3 text-amber-400 bt-0" />
                      Generated by make.api Engine in 1.2s
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Feature Steps */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            { title: "Define a Ideia", desc: "Descreva o que seu negócio precisa em linguagem natural." },
            { title: "IA Prototipa", desc: "Nossa IA gera toda a estrutura de API e banco de dados." },
            { title: "Deploy em 1-Clique", desc: "Sem servidores. Sem configurações. Apenas funcione." }
          ].map((step, i) => (
            <div key={i} className="text-left p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 transition-colors cursor-default group">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {i + 1}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">© 2024 make.api — Transformando CEOs em Tech Founders.</p>
          <div className="flex gap-4">
            <button className="text-slate-400 hover:text-indigo-600 transition-colors"><Copy className="w-5 h-5"/></button>
            <button className="text-slate-400 hover:text-indigo-600 transition-colors"><Terminal className="w-5 h-5"/></button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;