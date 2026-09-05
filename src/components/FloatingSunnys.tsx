import React from 'react';

export const FloatingSunnys: React.FC = () => {
  return (
    <a
      href="https://wa.me/5521998460818?text=Ola%20Sunnys!%20Gostaria%20de%20informacoes%20sobre%20as%20vagas%20de%20stand%20up%20paddle."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#FCD04B] hover:bg-[#F3C432] text-[#112D4E] font-heading font-extrabold text-xs uppercase px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 border-2 border-white transition-all transform hover:scale-105"
      aria-label="Falar com a atendente virtual Sunnys"
    >
      <div className="w-6 h-6 rounded-full overflow-hidden bg-white flex items-center justify-center border border-[#112D4E]/20">
        <img
          src="https://sunrisesup.com.br/wp-content/uploads/2026/08/sunrise-logo-192-x-192-px-1.png"
          alt="Sunnys Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <span>Sunnys &bull; Guia Virtual</span>
    </a>
  );
};
