import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle2, User, ArrowLeft } from 'lucide-react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';


const Login = () => {

  const [view, setView] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple Validators
  const validate = () => {
    const newErrors = { name: '', email: '', password: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (view === 'signup' && !formData.name) {
      newErrors.name = 'Nome completo necessário';
    }

    if (!formData.email) {
      newErrors.email = 'Email é necessário';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor endereço de e-mail';
    }

    if (view !== 'forgot') {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'A senha tem que ter pelo menos 8 digitos';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        if (view === 'login') {
          await signInWithEmailAndPassword(auth, formData.email, formData.password);
        } else if (view === 'signup') {
          await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        } else if (view === 'forgot') {
          await sendPasswordResetEmail(auth, formData.email);
        }
        setIsSuccess(true);
      } catch (error: any) {
        setErrors({ general: error.message });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const resetFlow = (newView: React.SetStateAction<string>) => {
    setView(newView);
    setErrors({});
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="text-purple-600 w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {view === 'forgot' ? 'Email enviado!' : 'Oba! sucesso.'}
          </h2>
          <p className="text-gray-600">
            {view === 'forgot'
              ? `Verifique sua conta ${formData.email} para as instruções.`
              : view === 'signup'
                ? 'Sua conta foi criada.'
                : 'Você obteve sucesso no login.'}
          </p>
          <button
            onClick={() => resetFlow('login')}
            className="text-sm px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">

        {/* Left Side: Aesthetic/Brand Area */}
        <div className="hidden md:flex md:w-1/2 bg-purple-600 p-12 text-white flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
            </div>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              {view === 'signup' ? 'Crie um novo futuro com sua solução' : view === 'forgot' ? 'Recuperar acesso' : 'Ambiente seguro.'}
            </h1>
            <p className="text-purple-100 text-lg">
              {view === 'signup'
                ? 'Comece essa jornada com o poder do workspace r nodds ferramenta e todos os nossos recursos.'
                : view === 'forgot'
                  ? 'Não se preocupe, acontece com os melhores. Vamos ajudá-lo(a) a voltar ao trabalho.'
                  : 'Gerenciador do seu workspace com enterprise-grade security ferramentas.'}
            </p>
          </div>

          <div className="relative z-10 text-sm text-purple-200">
            &copy; 2024 make.api Inc. All rights reserved.
          </div>

          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
        </div>

        {/* Right Side: Forms */}
        <div className="w-full md:w-1/2 p-8 lg:p-12 bg-white">
          <div className="max-w-sm mx-auto">
            {view !== 'login' && (
              <button
                onClick={() => resetFlow('login')}
                className="flex items-center text-xs text-purple-600 font-semibold mb-6 hover:text-purple-800 transition-colors"
              >
                <ArrowLeft size={14} className="mr-1" /> Voltar ao login
              </button>
            )}

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {view === 'login' ? 'Login' : view === 'signup' ? 'Criar uma conta' : 'Esqueci a senha'}
            </h2>
            <p className="text-gray-500 mb-8 text-sm">
              {view === 'login'
                ? 'Entre com seu acesso da sua conta'
                : view === 'signup'
                  ? 'Sign up de graça para iniciar'
                  : 'Entre com seu email para receber a password reset link'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Error Message */}
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="flex items-center text-red-600 text-sm">
                    <AlertCircle size={16} className="mr-2" /> {errors.general}
                  </p>
                </div>
              )}
              {/* Name Field (Sign up only) */}
              {view === 'signup' && (
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <User size={18} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-2.5 bg-gray-50 border ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-purple-100'} rounded-lg text-sm focus:outline-none focus:ring-4 focus:border-purple-400 transition-all`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="flex items-center text-red-500 text-[11px] mt-1 font-medium">
                      <AlertCircle size={12} className="mr-1" /> {errors.name}
                    </p>
                  )}
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Mail size={18} />
                  </span>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2.5 bg-gray-50 border ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-purple-100'} rounded-lg text-sm focus:outline-none focus:ring-4 focus:border-purple-400 transition-all`}
                    placeholder="name@company.com"
                  />
                </div>
                {errors.email && (
                  <p className="flex items-center text-red-500 text-[11px] mt-1 font-medium">
                    <AlertCircle size={12} className="mr-1" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field (Login/Signup only) */}
              {view !== 'forgot' && (
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Password</label>
                    {view === 'login' && (
                      <button
                        type="button"
                        onClick={() => resetFlow('forgot')}
                        className="text-[11px] text-purple-600 hover:text-purple-800 font-semibold"
                      >
                        Esqueceu?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <Lock size={18} />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-10 py-2.5 bg-gray-50 border ${errors.password ? 'border-red-400 focus:ring-red-100' : 'border-gray-200 focus:ring-purple-100'} rounded-lg text-sm focus:outline-none focus:ring-4 focus:border-purple-400 transition-all`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="flex items-center text-red-500 text-[11px] mt-1 font-medium">
                      <AlertCircle size={12} className="mr-1" /> {errors.password}
                    </p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-purple-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <span>
                    {view === 'login' ? 'Sign In' : view === 'signup' ? 'Create Account' : 'Enviar link de recuperaçāo'}
                  </span>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-xs text-gray-500">
              {view === 'login' ? (
                <>
                  Você não possui conta?{' '}
                  <button onClick={() => resetFlow('signup')} className="text-purple-600 font-bold hover:underline">Criar conta</button>
                </>
              ) : (
                <>
                  Você possui uma conta?{' '}
                  <button onClick={() => resetFlow('login')} className="text-purple-600 font-bold hover:underline">Login aqui</button>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;