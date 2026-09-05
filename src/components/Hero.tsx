import React from 'react';
import { SunIcon, ShieldCheckIcon, WaveIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-slate-950">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <SunIcon className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-slate-200">
                Experiência Exclusiva ao Amanhecer das 05:30
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-50 leading-[1.1] font-display">
              Sinta a liberdade de remar no <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-orange-400 to-amber-300">mar espelhado</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Aluguel de pranchas de alta estabilidade, aulas para iniciantes e tours guiados ao nascer do sol. Equipamento completo de segurança homologado incluído em todas as reservas (RN-004).
            </p>

            {/* Feature Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl flex items-center gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">100% Homologado Marinha</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl flex items-center gap-3">
                <SunIcon className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Fotos Aquáticas Inclusas</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl flex items-center gap-3">
                <WaveIcon className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-200">Pranchas para Todos os Níveis</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#catalogo"
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm px-6 py-4 rounded-xl shadow-xl shadow-orange-500/25 active:scale-95 transition-all flex items-center gap-2"
              >
                <WaveIcon className="w-5 h-5" />
                <span>Reservar Prancha Agora</span>
              </a>

              <a
                href="#amanhecer"
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-100 font-bold text-sm px-6 py-4 rounded-xl border border-slate-700/80 hover:border-sky-500/50 transition-all flex items-center gap-2"
              >
                <SunIcon className="w-5 h-5 text-amber-400" />
                <span>Ver Sunrise Tour</span>
              </a>
            </div>
          </div>

          {/* Right Column Image Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-sky-500/10 group">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Stand Up Paddle ao amanhecer"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-black text-slate-50 font-display">5.400+</div>
                  <div className="text-xs font-medium text-slate-400">Remadas ao Amanhecer Concluídas</div>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-sky-500 border-2 border-slate-950 flex items-center justify-center font-bold text-[10px] text-slate-950">4.9★</div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-slate-950 flex items-center justify-center font-bold text-[10px] text-slate-950">SUP</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
