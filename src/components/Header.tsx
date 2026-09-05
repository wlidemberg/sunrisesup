import React, { useState } from 'react';
import type { PageTab } from '../types';

interface HeaderProps {
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const navItems: { id: PageTab; label: string; mobileLabel?: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'comotrabalhamos', label: 'Como Trabalhamos', mobileLabel: 'Como Trabalhamos (10 Passos)' },
    { id: 'reserva', label: 'Reservas Online', mobileLabel: 'Reservas Online (WooCommerce)' },
    { id: 'contato', label: 'Contato & Localização' },
  ];

  const handleTabClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-[#0B1D33] text-white border-b border-white/10 px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Identidade Guarderia */}
        <button
          type="button"
          onClick={() => handleTabClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <img
            src="https://sunrisesup.com.br/wp-content/uploads/2026/08/sunrise-logo-192-x-192-px-1.png"
            alt="Sunrise SUP Logo"
            className="w-9 h-9 rounded-full border border-[#FCD04B] bg-white p-0.5 object-cover group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="font-heading font-black text-sm text-white tracking-wider block leading-tight">
              SUNRISE SUP
            </span>
            <span className="text-[10px] text-[#95C3D7] block font-medium">
              Guarderia Surf Club &bull; Copacabana
            </span>
          </div>
        </button>

        {/* Mobile quick reserve button & hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => handleTabClick('reserva')}
            className="bg-[#FCD04B] text-[#112D4E] font-heading font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm"
          >
            Reservar
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition border border-white/20"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileOpen ? (
              <svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-heading font-bold">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(item.id)}
              className={`page-tab-btn px-3.5 py-2 rounded-full transition whitespace-nowrap ${
                activeTab === item.id
                  ? 'active bg-[#FCD04B] text-[#112D4E] font-extrabold shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/15 pt-3 pb-4 px-2 mt-2 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5 text-xs font-heading font-bold">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-[#FCD04B] text-[#112D4E] font-extrabold'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span>{item.mobileLabel || item.label}</span>
                <span className="text-[#FCD04B]">&rarr;</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://wa.me/5521998460818?text=Ola!%20Gostaria%20de%20informacoes%20sobre%20as%20vagas%20de%20stand%20up%20paddle."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-[#FCD04B] text-[#112D4E] font-heading font-black text-xs uppercase py-3 rounded-xl shadow-md block"
            >
              Falar no WhatsApp Oficial
            </a>
            <span className="text-[10px] text-center text-slate-300 block">
              Guarderia Surf Club &bull; R. Francisco Otaviano, 42
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
