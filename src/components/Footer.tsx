import React from 'react';
import type { PageTab } from '../types';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#112D4E] text-white pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://sunrisesup.com.br/wp-content/uploads/2026/08/sunrise-logo-192-x-192-px-1.png"
                alt="Logo Sunrise SUP"
                className="w-10 h-10 rounded-full bg-white p-0.5 border border-[#FCD04B] object-cover"
              />
              <span className="font-heading font-extrabold text-xl tracking-wider">SUNRISE SUP</span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Escola e guarderia especializada em turismo esportivo e experiências de conexão ao ar livre na praia de Copacabana.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-[#95C3D7]">
              <span className="bg-white/10 px-3 py-1 rounded-md">Pagamento Seguro</span>
              <span className="bg-white/10 px-3 py-1 rounded-md">Guarderia Surf Club</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FCD04B] mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button type="button" onClick={() => onNavigate('home')} className="hover:text-[#FCD04B] transition">
                  Início
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('sobre')} className="hover:text-[#FCD04B] transition">
                  Sobre Nossa História
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('comotrabalhamos')} className="hover:text-[#FCD04B] transition">
                  Como Trabalhamos
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('reserva')} className="hover:text-[#FCD04B] transition">
                  Reservas Online
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('contato')} className="hover:text-[#FCD04B] transition">
                  Contato e Endereço
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FCD04B] mb-3">
              Ponto de Encontro
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              <strong>Endereço:</strong> R. Francisco Otaviano, 42 - Copacabana, Rio de Janeiro - RJ, 22080-041 (Guarderia Surf Club)
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/5521998460818" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FCD04B] underline">
                +55 21 99846-0818
              </a>
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>E-mail:</strong> guarderiasurfclub26@gmail.com
            </p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3">
          <div>
            &copy; {new Date().getFullYear()} Sunrise SUP &bull; Guarderia Surf Club. Todos os direitos reservados.
          </div>
          <div className="text-slate-400">
            Copacabana, Rio de Janeiro
          </div>
        </div>

      </div>
    </footer>
  );
};
