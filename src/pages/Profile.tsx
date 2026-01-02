import React, { useState, useRef } from 'react';
import { 
  Camera, 
  ShieldCheck, 
  User, 
  Settings, 
  Mail, 
  Globe, 
  Trash2, 
  CheckCircle2 
} from 'lucide-react';

const App = () => {
  // --- State ---
  const [activeTab, setActiveTab] = useState<'profile' | 'settings'>('profile');
  const [profile, setProfile] = useState({
    name: 'Alex Rivera',
    email: 'alex.rivera@example.com',
    bio: 'Senior Product Designer & Creative Strategist based in San Francisco.',
    website: 'https://alexrivera.design',
    id: 'USR-9921-XQ'
  });
  const [imagePreview, setImagePreview] = useState('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=250&h=250&auto=format&fit=crop');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // --- Refs ---
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Handlers ---
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleSave = () => {
    triggerToast('Profile successfully synchronized!');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Main Card - Reduced radius from [2.5rem] to 3xl */}
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(124,58,237,0.12)] overflow-hidden transition-all duration-500 border border-slate-100">
        
        {/* Header: Purple Gradient */}
        <div className="bg-gradient-to-br from-violet-600 to-purple-400 h-44 w-full relative">
          
          {/* Profile Image Container */}
          <div className="absolute -bottom-16 left-10 group">
            <div className="relative inline-block">
              <div className="p-1.5 bg-white rounded-full shadow-xl ring-4 ring-white/10 transition-transform group-hover:scale-[1.02]">
                <img 
                  src={imagePreview} 
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white"
                />
              </div>
              
              {/* Photo Upload Button */}
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-1 right-1 bg-white p-2.5 rounded-full shadow-lg border border-slate-100 hover:bg-violet-50 transition-all hover:scale-110 active:scale-95"
              >
                <Camera className="text-violet-600 w-5 h-5" />
                <input 
                  type="file" 
                  ref={fileInputRef}
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleImageChange}
                />
              </button>
            </div>
          </div>

          {/* Header Text */}
          <div className="absolute bottom-6 right-10 text-white text-right">
            <h2 className="text-2xl font-bold tracking-tight">{profile.name}</h2>
            <div className="flex items-center gap-2 justify-end mt-1">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">
                ID: {profile.id}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mt-20 px-10 border-b border-slate-100 flex gap-8">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`pb-4 text-sm font-bold flex items-center gap-2 transition-all border-b-2 ${
              activeTab === 'profile' 
                ? 'border-violet-600 text-violet-600' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <User size={16} />
            Profile Details
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`pb-4 text-sm font-bold flex items-center gap-2 transition-all border-b-2 ${
              activeTab === 'settings' 
                ? 'border-violet-600 text-violet-600' 
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <Settings size={16} />
            Account Settings
          </button>
        </div>

        {/* Content Area */}
        <div className="px-10 py-8 min-h-[420px]">
          
          {/* Profile Tab Content */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Full Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-violet-50 focus:border-violet-500 transition-all text-slate-700 text-sm font-medium"
                    />
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
                    <input 
                      type="email" 
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="w-full pl-11 pr-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-violet-50 focus:border-violet-500 transition-all text-slate-700 text-sm font-medium"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Professional Bio</label>
                <textarea 
                  rows={3} 
                  value={profile.bio}
                  onChange={(e) => setProfile({...profile, bio: e.target.value})}
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-violet-50 focus:border-violet-500 transition-all text-slate-700 text-sm font-medium resize-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1 text-slate-400">Website</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
                  <input 
                    type="text" 
                    value={profile.website}
                    className="w-full pl-11 pr-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-violet-50 focus:border-violet-500 transition-all text-slate-700 text-sm font-medium bg-slate-50/50 cursor-not-allowed"
                    disabled
                  />
                </div>
              </div>

              {/* Verification Banner */}
              <div className="flex items-center justify-between p-5 bg-violet-50/50 rounded-2xl border border-violet-100 shadow-sm shadow-violet-50/20">
                <div className="flex items-center gap-4">
                  <div className="bg-violet-100 p-2.5 rounded-lg text-violet-600">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-violet-900">Verified Professional</p>
                    <p className="text-xs text-violet-600/70">Account confirmed via Stripe ID.</p>
                  </div>
                </div>
                <span className="bg-violet-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                  <CheckCircle2 size={10} />
                  Verified
                </span>
              </div>
            </div>
          )}

          {/* Settings Tab Content */}
          {activeTab === 'settings' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 px-1">
                  <div>
                    <p className="text-sm font-bold text-slate-800">Discoverable Profile</p>
                    <p className="text-xs text-slate-500">Allow users to find you via search.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between py-3 px-1">
                  <div>
                    <p className="text-sm font-bold text-slate-800">Job Inquiries</p>
                    <p className="text-xs text-slate-500">Display "Hire Me" button on your page.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
                  </label>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between p-5 bg-red-50/50 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-4">
                      <div className="bg-white p-2.5 rounded-lg text-red-500 shadow-sm">
                        <Trash2 size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-red-900">Deactivate Account</p>
                        <p className="text-xs text-red-600/70">Temporary suspension of your data.</p>
                      </div>
                    </div>
                    <button className="bg-white text-red-600 text-xs font-bold px-4 py-2 rounded-lg border border-red-100 hover:bg-red-600 hover:text-white transition-all shadow-sm active:scale-95">
                      Deactivate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-10 pb-10 flex gap-4">
          <button 
            onClick={handleSave}
            className="flex-[2] bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-violet-200 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Save Changes
          </button>
          <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-xl transition-all active:scale-[0.98]">
            Discard
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      <div className={`fixed bottom-8 bg-slate-900 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-500 font-medium z-50 flex items-center gap-3 ${
        showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};

export default App;