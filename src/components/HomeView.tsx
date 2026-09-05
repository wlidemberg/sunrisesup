import React from 'react';
import type { PageTab } from '../types';

interface HomeViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <main className="block">
      
      {/* Hero Section da Home */}
      <section className="relative min-h-[88vh] flex items-center bg-[#112D4E] pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            alt="Nascer do Sol em Copacabana"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#112D4E]/95 via-[#112D4E]/85 to-[#2B7EA1]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          <div className="lg:col-span-7 text-white text-center lg:text-left">
            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white leading-[1.12] mb-4 sm:mb-6">
              Desperte com o Sol no Mar de <span className="text-[#FCD04B]">Copacabana</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8">
              A remada mais emblemática do Rio de Janeiro. Águas calmas e abrigadas, instruções individuais para iniciantes, equipamentos higienizados e fotos de alta resolução para eternizar seu início de dia.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full">
              <button
                type="button"
                onClick={() => onNavigate('reserva')}
                className="btn-solar w-full sm:w-auto py-4 px-8"
              >
                <span>Reservar Meu Horário</span>
                <span className="text-lg leading-none">&rarr;</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('comotrabalhamos')}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-heading font-bold text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                Como funciona o passo a passo
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/15 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-[#FCD04B] font-bold">&bull;</span> Seguro para iniciantes
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FCD04B] font-bold">&bull;</span> Fotos em alta resolução inclusas
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FCD04B] font-bold">&bull;</span> Instrutor dedicado ao lado
              </div>
            </div>
          </div>

          {/* Card de Ancoragem R$ 150 */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 shadow-2xl border border-white/80 text-center relative transform hover:-translate-y-1 transition-all">
              
              <div className="inline-block bg-[#2B7EA1] text-white text-[10px] font-heading font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm mb-3">
                Saída Diária &bull; 05:30 AM
              </div>

              <span className="block text-xs font-bold uppercase tracking-wider text-[#2B7EA1] mb-1">
                Experiência Completa de SUP
              </span>
              
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-xl font-heading font-bold text-[#112D4E]">R$</span>
                <span className="text-5xl font-heading font-black text-[#112D4E]">150</span>
                <span className="text-xl font-heading font-bold text-[#112D4E]">,00</span>
              </div>

              <p className="text-xs text-[#475569] font-medium mb-6">Por pessoa &bull; 1h30 de conexão no mar calmo</p>

              <div className="space-y-3 text-left border-t border-slate-100 pt-5 mb-7 text-xs font-semibold text-[#112D4E]">
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">L</span>
                  <span>Ensaio de fotos e vídeos em alta resolução</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">L</span>
                  <span>Instrutor dedicado e instrução técnica na areia</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">L</span>
                  <span>Prancha de alta estabilidade, remo e colete</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">L</span>
                  <span>Guarda-volumes seguro na base da guarderia</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('reserva')}
                className="w-full btn-solar text-xs py-4 block text-center"
              >
                Reservar pelo Calendário &rarr;
              </button>

              <span className="block text-[11px] text-slate-400 mt-3">
                Cancelamento grátis até 48h antes da saída
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Seção O que Oferecemos */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-widest text-[#2B7EA1] bg-[#EBF6FA] px-4 py-1.5 rounded-full mb-3">
              Estrutura e Segurança Náutica
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#112D4E] mb-4">
              O que oferecemos na sua remada
            </h2>
            <p className="text-[#475569] text-xs sm:text-base">
              Tudo o que você precisa para vivenciar o amanhecer do mar do Rio com segurança, tranquilidade e memórias inesquecíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-[#112D4E] mb-4 leading-snug">
                Buscando renovar as energias e se conectar de verdade com o mar?
              </h3>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                A <strong>Sunrise SUP</strong> oferece a experiência mais acolhedora de Stand Up Paddle do Rio de Janeiro. Projetada tanto para quem nunca subiu numa prancha quanto para remadores frequentes. Nossas saídas contam com acompanhamento próximo, equipamentos higienizados e vista privilegiada.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-8">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm card-touch">
                  <span className="text-[10px] font-heading font-extrabold text-[#2B7EA1] uppercase block mb-1">01</span>
                  <h4 className="font-heading font-bold text-xs text-[#112D4E] mb-1">Fotos em Alta</h4>
                  <p className="text-[11px] text-slate-500">Registros profissionais inclusos</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm card-touch">
                  <span className="text-[10px] font-heading font-extrabold text-[#2B7EA1] uppercase block mb-1">02</span>
                  <h4 className="font-heading font-bold text-xs text-[#112D4E] mb-1">Segurança Total</h4>
                  <p className="text-[11px] text-slate-500">Colete homologado e instrutor</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm card-touch">
                  <span className="text-[10px] font-heading font-extrabold text-[#2B7EA1] uppercase block mb-1">03</span>
                  <h4 className="font-heading font-bold text-xs text-[#112D4E] mb-1">Treinamento Inicial</h4>
                  <p className="text-[11px] text-slate-500">Instruções práticas na areia</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm card-touch">
                  <span className="text-[10px] font-heading font-extrabold text-[#2B7EA1] uppercase block mb-1">04</span>
                  <h4 className="font-heading font-bold text-xs text-[#112D4E] mb-1">Guarda Volumes</h4>
                  <p className="text-[11px] text-slate-500">Pertences seguros na guarderia</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm card-touch">
                  <span className="text-[10px] font-heading font-extrabold text-[#2B7EA1] uppercase block mb-1">05</span>
                  <h4 className="font-heading font-bold text-xs text-[#112D4E] mb-1">Capa Estanque</h4>
                  <p className="text-[11px] text-slate-500">Proteção para seu smartphone</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm card-touch">
                  <span className="text-[10px] font-heading font-extrabold text-[#2B7EA1] uppercase block mb-1">06</span>
                  <h4 className="font-heading font-bold text-xs text-[#112D4E] mb-1">Imagens Aéreas</h4>
                  <p className="text-[11px] text-slate-500">Vídeos com drone sob consulta</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('reserva')}
                className="btn-solar text-xs py-3.5 px-8"
              >
                Ver Disponibilidade de Vagas &rarr;
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
                  alt="Remadora ao nascer do sol no mar de Copacabana"
                  className="w-full h-80 sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <button
                    type="button"
                    onClick={() => onNavigate('sobre')}
                    className="w-full bg-[#FCD04B] hover:bg-[#F3C432] text-[#112D4E] font-heading font-extrabold text-xs uppercase py-3.5 px-6 rounded-full shadow-xl tracking-wider transition"
                  >
                    Conheça Nossa História &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Métricas & Avaliação 9.8 */}
      <section className="py-20 bg-gradient-to-br from-[#2B7EA1] to-[#112D4E] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
              <div className="overflow-hidden rounded-2xl mb-4 h-60 sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80"
                  alt="Remadora contemplando o mar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm italic text-slate-100 text-center leading-relaxed mb-2">
                "Gratidão pelo reencontro, renovar o equilíbrio e acolher o silêncio da manhã nas águas mais calmas de Copacabana."
              </p>
              <span className="block text-center text-xs font-bold text-[#FCD04B] uppercase tracking-widest">
                Beatriz Xavier &bull; Remadora Sunrise
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-white mb-6 leading-tight">
              Vamos remar juntos?
            </h3>

            <div className="inline-flex items-center gap-4 bg-[#112D4E]/80 border-2 border-[#FCD04B] rounded-2xl px-6 py-3 mb-6 shadow-xl">
              <div className="font-heading font-black text-3xl sm:text-4xl text-[#FCD04B] leading-none">9.8</div>
              <div className="text-left">
                <span className="block text-[11px] font-heading font-bold text-white uppercase tracking-wider">Avaliação Geral</span>
                <span className="text-xs text-[#FCD04B] font-bold tracking-wider">EXCELENTE</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-[#FCD04B] pl-4">
                <div className="font-heading font-black text-3xl sm:text-4xl text-white leading-none mb-1">+15.000</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#95C3D7]">Passeios realizados com segurança</div>
              </div>
              <div className="border-l-4 border-[#FCD04B] pl-4">
                <div className="font-heading font-black text-3xl sm:text-4xl text-white leading-none mb-1">+450</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#95C3D7]">Horas de conexão no mar do Rio</div>
              </div>
            </div>

            <div
              onClick={() => onNavigate('reserva')}
              className="cursor-pointer flex items-center justify-between bg-white/10 hover:bg-white/20 border border-dashed border-white/40 hover:border-[#FCD04B] rounded-2xl p-4 text-white transition"
            >
              <div>
                <span className="block text-xs font-heading font-bold text-[#FCD04B] uppercase tracking-wider">
                  Viva essa experiência no mar
                </span>
                <span className="text-xs text-slate-200">Consulte vagas avulsas, amigos ou horários exclusivos</span>
              </div>
              <span className="text-xl text-[#FCD04B] font-bold">&rarr;</span>
            </div>
          </div>

        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-widest text-[#2B7EA1] bg-[#EBF6FA] px-4 py-1.5 rounded-full mb-3">
              Galeria de Fotos
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#112D4E] mb-2">
              Fotos do Nascer do Sol em Copacabana
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm">
              Registros reais feitos diariamente pelos nossos instrutores na Guarderia Surf Club.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="sm:col-span-2 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow card-touch">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" alt="Remada ao amanhecer" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow card-touch">
              <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" alt="Instrutor orientando remador" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow card-touch">
              <img src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80" alt="Silhueta contra o mar" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow card-touch">
              <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80" alt="Grupo remando no mar" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow card-touch">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Equipamentos na praia" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};
