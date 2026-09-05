import React from 'react';
import type { PageTab, StepItem } from '../types';

interface ComoTrabalhamosViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const ComoTrabalhamosView: React.FC<ComoTrabalhamosViewProps> = ({ onNavigate }) => {
  const steps: StepItem[] = [
    {
      number: 1,
      title: 'Recepção dos Participantes',
      description: 'Direcionamos para a fila de acolhimento e organização dos remadores na base da guarderia.'
    },
    {
      number: 2,
      title: 'Check-in',
      description: 'Confirmamos presença na lista oficial da saída matinal com rapidez e cordialidade.'
    },
    {
      number: 3,
      title: 'Venda de Adicionais Pagos',
      description: 'Capinhas impermeáveis para celular e captação aérea profissional com drone sob consulta.'
    },
    {
      number: 4,
      title: 'Troca de Roupas & Guarda-volumes',
      description: 'Direcionamos os participantes para vestiários arejados, trocador e guarda-volumes seguro.'
    },
    {
      number: 5,
      title: 'Equipamento & Preparação',
      description: 'Equipamos todos com coletes salva-vidas homologados e remos leves no tamanho correto.'
    },
    {
      number: 6,
      title: 'Instruções Técnicas',
      description: 'Explicamos na areia: como subir na prancha, postura, controle de equilíbrio e regras de segurança.'
    },
    {
      number: 7,
      title: 'Entrada na Água',
      description: 'Conduzimos o grupo até o ponto estratégico e calmo da enseada para assistir ao nascer do sol.'
    },
    {
      number: 8,
      title: 'Fotos Durante a Experiência',
      description: 'Tiramos fotos espontâneas, fotos individuais no reflexo do sol e registros conjuntos do grupo.'
    },
    {
      number: 9,
      title: 'Retorno Seguro',
      description: 'Organizamos todo o grupo para voltarmos juntos até a faixa de areia com acompanhamento próximo.'
    },
    {
      number: 10,
      title: 'Finalização na Areia & Ducha',
      description: 'Fotos finais, ducha de água doce e orientações detalhadas sobre o envio do link das fotos digitais.'
    }
  ];

  return (
    <main className="block">
      
      <section className="bg-[#112D4E] text-white pt-16 pb-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-widest text-[#FCD04B] bg-white/10 px-4 py-1.5 rounded-full mb-3">
            Experiência Stand Up Paddle
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white mb-3">
            Como Trabalhamos
          </h1>
          <p className="text-xs sm:text-sm text-slate-200">
            Entenda o fluxo completo da sua manhã: do check-in na guarderia ao registro final com o link das fotos.
          </p>
        </div>
      </section>

      {/* Grid Sequencial dos 10 Passos Cronológicos */}
      <section className="py-14 max-w-7xl mx-auto px-5 sm:px-6 -mt-8 relative z-20">
        
        <div className="steps-process-grid mb-14">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between card-touch"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#112D4E] text-[#FCD04B] font-heading font-black text-sm flex items-center justify-center mb-3">
                  {step.number}
                </div>
                <h3 className="font-heading font-extrabold text-sm text-[#112D4E] mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Apoio: Informações Práticas */}
        <div className="bg-[#EBF6FA] rounded-3xl p-8 border border-[#95C3D7]/60">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-heading font-bold text-[#2B7EA1] uppercase tracking-widest block mb-1">
              Guia do Remador
            </span>
            <h2 className="font-heading font-black text-xl sm:text-2xl text-[#112D4E]">
              Informações Práticas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-sm text-[#112D4E] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FCD04B]" />
                O Que Levar Para Sua Experiência
              </h3>
              <ul className="space-y-2 text-xs text-[#475569] leading-relaxed">
                <li>&bull; Roupa de banho confortável (sunga, maiô, biquíni ou bermuda leve).</li>
                <li>&bull; Protetor solar e toalha para a saída do mar.</li>
                <li>&bull; Troca de roupa seca (temos vestiários completos na guarderia).</li>
                <li>&bull; Garrafinha de água para hidratação após a remada.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-sm text-[#112D4E] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FCD04B]" />
                Horários e Duração
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-3">
                A remada tem duração média de <strong>1 hora e 30 minutos</strong> no mar, com instruções prévias na areia. O nível de esforço é leve a moderado em águas abrigadas.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('reserva')}
                className="w-full btn-solar text-xs py-3"
              >
                Agendar Meu Passeio Agora &rarr;
              </button>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
};
