import { useState } from 'react';
import { Home, LayoutDashboard, Users, Settings, Code, Cloud, Database, Zap, ShoppingCart, MessageSquare, Image, Music, Video, Map, CreditCard, Mail, Lock, BarChart, Globe, Smartphone, Menu, X, Moon, Sun } from 'lucide-react';

export default function APITemplatePlatform() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const apiTemplates = [
    { id: 1, title: 'REST API Starter', category: 'backend', description: 'Complete REST API with authentication and CRUD operations', icon: Code, difficulty: 'Beginner', language: 'Node.js' },
    { id: 2, title: 'E-commerce API', category: 'commerce', description: 'Full-featured shopping cart and payment integration', icon: ShoppingCart, difficulty: 'Intermediate', language: 'Python' },
    { id: 3, title: 'Chat API', category: 'social', description: 'Real-time messaging with WebSocket support', icon: MessageSquare, difficulty: 'Advanced', language: 'Node.js' },
    { id: 4, title: 'Image Processing', category: 'media', description: 'Upload, resize, and optimize images at scale', icon: Image, difficulty: 'Intermediate', language: 'Python' },
    { id: 5, title: 'Music Streaming', category: 'media', description: 'Audio streaming API with playlist management', icon: Music, difficulty: 'Advanced', language: 'Go' },
    { id: 6, title: 'Video Transcoding', category: 'media', description: 'Convert and compress video formats efficiently', icon: Video, difficulty: 'Advanced', language: 'Node.js' },
    { id: 7, title: 'Geolocation API', category: 'services', description: 'Maps integration with routing and geocoding', icon: Map, difficulty: 'Intermediate', language: 'Python' },
    { id: 8, title: 'Payment Gateway', category: 'commerce', description: 'Secure payment processing with Stripe integration', icon: CreditCard, difficulty: 'Advanced', language: 'Node.js' },
    { id: 9, title: 'Email Service', category: 'services', description: 'Transactional emails and newsletter management', icon: Mail, difficulty: 'Beginner', language: 'Python' },
    { id: 10, title: 'Auth API', category: 'backend', description: 'JWT authentication with OAuth2 and 2FA', icon: Lock, difficulty: 'Intermediate', language: 'Node.js' },
    { id: 11, title: 'Analytics API', category: 'data', description: 'Track events and generate insights dashboard', icon: BarChart, difficulty: 'Advanced', language: 'Python' },
    { id: 12, title: 'GraphQL Server', category: 'backend', description: 'Modern GraphQL API with subscriptions', icon: Database, difficulty: 'Intermediate', language: 'Node.js' },
    { id: 13, title: 'Weather API', category: 'services', description: 'Real-time weather data and forecasts', icon: Cloud, difficulty: 'Beginner', language: 'Python' },
    { id: 14, title: 'Webhook Manager', category: 'backend', description: 'Handle and retry webhooks reliably', icon: Zap, difficulty: 'Intermediate', language: 'Go' },
    { id: 15, title: 'Social API', category: 'social', description: 'User profiles, posts, likes, and comments', icon: Users, difficulty: 'Advanced', language: 'Node.js' },
    { id: 16, title: 'Translation API', category: 'services', description: 'Multi-language translation and localization', icon: Globe, difficulty: 'Intermediate', language: 'Python' },
    { id: 17, title: 'Mobile Backend', category: 'backend', description: 'Complete backend for iOS and Android apps', icon: Smartphone, difficulty: 'Advanced', language: 'Node.js' },
    { id: 18, title: 'File Storage API', category: 'data', description: 'Secure cloud storage with S3 integration', icon: Database, difficulty: 'Beginner', language: 'Python' },
  ];

  const categories = [
    { id: 'all', label: 'All Templates', count: apiTemplates.length },
    { id: 'backend', label: 'Backend', count: apiTemplates.filter(t => t.category === 'backend').length },
    { id: 'commerce', label: 'E-commerce', count: apiTemplates.filter(t => t.category === 'commerce').length },
    { id: 'social', label: 'Social', count: apiTemplates.filter(t => t.category === 'social').length },
    { id: 'media', label: 'Media', count: apiTemplates.filter(t => t.category === 'media').length },
    { id: 'data', label: 'Data', count: apiTemplates.filter(t => t.category === 'data').length },
    { id: 'services', label: 'Services', count: apiTemplates.filter(t => t.category === 'services').length },
  ];

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? apiTemplates 
    : apiTemplates.filter(t => t.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-purple-400 text-gray-700';
    }
  };

  return (
    <div className={`flex h-screen ml-6 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Lateral Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} ${
        isDarkMode 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-purple-700 to-purple-900'
      } text-white flex flex-col transition-all duration-300`}>
        <div className={`p-6 border-b border-purple-600 ${!isSidebarOpen && 'px-4'}`}>
          <h1 className={`text-2xl font-bold ${!isSidebarOpen && 'hidden'}`}>API master</h1>
          <p className={`text-purple-200 text-sm mt-0 ${!isSidebarOpen && 'hidden'}`}>About system</p>
          {!isSidebarOpen && (
            <div className="flex justify-center">
              <Zap className="text-white fill-white" size={32} />
            </div>
          )}
        </div>
        
        <nav className="flex-1 p-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center ${isSidebarOpen ? 'gap-3' : 'justify-center'} px-4 py-3 rounded-lg mb-2 transition-all ${
                  activeTab === item.id
                    ? 'bg-white text-purple-700 shadow-lg'
                    : 'text-purple-100 hover:bg-purple-600'
                }`}
                title={!isSidebarOpen ? item.label : ''}
              >
                <Icon size={20} />
                {isSidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className={`p-4 border-t border-purple-600 ${!isSidebarOpen && 'px-2'}`}>
          {isSidebarOpen ? (
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold">
                D
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Developer</p>
                <p className="text-purple-300 text-xs">dev@api.com</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center py-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold">
                D
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Top Bar */}
        <header className={`${
          isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
        } border-b p-6 sticky top-0 z-10`}>
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-1 flex-1">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className={isDarkMode ? 'text-white' : 'text-purple-600'} size={32} />
              </div>
              <div>
                <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`} style={{ fontFamily: 'Inter, Helvetica, sans-serif', letterSpacing: '-0.5px' }}>make.api</h2>
                <p className={`mt-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pesquise, crie, inicie, teste e deploy</p>
              </div>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : isDarkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label} <span className="ml-1 text-sm opacity-75">({cat.count})</span>
              </button>
            ))}
          </div>
        </header>

        {/* Cards Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredTemplates.map((template) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.id}
                  className={`${
                    isDarkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white'
                  } rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:border-purple-300`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={28} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(template.difficulty)}`}>
                        {template.difficulty}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{template.title}</h3>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{template.description}</p>
                    
                    <div className={`flex items-center justify-between pt-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}>
                      <div className="flex items-center gap-2">
                        <Code size={16} className="text-purple-600" />
                        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{template.language}</span>
                      </div>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Deploy
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}