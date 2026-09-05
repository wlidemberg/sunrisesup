import React from 'react';
import type { PageTab } from '../types';

interface SobreViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const SobreView: React.FC<SobreViewProps> = ({ onNavigate }) => {
  return (
    <main className="block">
      
      <section className="bg-[#112D4E] text-white pt-16 pb-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-widest text-[#FCD04B] bg-white/10 px-4 py-1.5 rounded-full mb-3">
            Nossa História e Propósito
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white mb-4">
            Conexão com o Mar na <span className="text-[#FCD04B]">Guarderia Surf Club</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
            Fundada para proporcionar uma experiência acolhedora de contato com a natureza carioca, aliando segurança integral e o nascer do sol mais famoso do mundo.
          </p>
        </div>
      </section>

      <section className="py-14 max-w-6xl mx-auto px-5 sm:px-6 -mt-8 relative z-20">
        
        {/* Filosofia de Atendimento (3 Pilares) */}
        <div className="text-center mb-8">
          <span className="text-xs font-heading font-extrabold text-[#2B7EA1] uppercase tracking-widest block mb-1">
            Nossos Princípios
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#112D4E]">
            Filosofia de Atendimento Sunrise SUP
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-200 text-center card-touch">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#112D4E] text-[#FCD04B] flex items-center justify-center font-heading font-black text-lg">
              01
            </div>
            <h3 className="font-heading font-bold text-base text-[#112D4E] mb-2">
              Assessoria no Cuidado e Personalização
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Cada participante é recebido individualmente. Analisamos seu nível de intimidade com a água para garantir uma remada calma e sem medo.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-200 text-center card-touch">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#112D4E] text-[#FCD04B] flex items-center justify-center font-heading font-black text-lg">
              02
            </div>
            <h3 className="font-heading font-bold text-base text-[#112D4E] mb-2">
              Consultoria Dedicada e Apaixonada
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Nossos instrutores vivem o mar de Copacabana diariamente e compartilham conhecimento técnico e respeito à vida marinha.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 shadow-lg border border-slate-200 text-center card-touch">
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#112D4E] text-[#FCD04B] flex items-center justify-center font-heading font-black text-lg">
              03
            </div>
            <h3 className="font-heading font-bold text-base text-[#112D4E] mb-2">
              Nosso Foco é a Sua Segurança
            </h3>
            <p className="text-xs text-[#475569] leading-relaxed">
              Coletes certificados pela Marinha do Brasil, pranchas largas de alta estabilidade e monitoramento permanente durante todo o circuito.
            </p>
          </div>
        </div>

        {/* Caixa Editorial da Guarderia */}
        <div className="bg-[#EBF6FA] rounded-3xl p-8 sm:p-12 border border-[#95C3D7]/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#2B7EA1] block mb-2">
              Base Oficial &bull; Copacabana
            </span>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#112D4E] mb-3">
              Instrutores Atentos e Equipamentos Homologados
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
              Cada aluno recebe instrução individual antes de pisar na água: postura correta, controle de equilíbrio e técnicas de remada. Nossas pranchas de alta flutuabilidade e coletes salva-vidas garantem que mesmo quem não sabe nadar consiga aproveitar com tranquilidade absoluta.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('reserva')}
              className="btn-solar text-xs py-3 px-6"
            >
              Conhecer os Passeios Disponíveis &rarr;
            </button>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white p-3 shadow-lg border-2 border-[#FCD04B] flex items-center justify-center">
              <img
                src="https://sunrisesup.com.br/wp-content/uploads/2026/08/sunrise-logo-192-x-192-px-1.png"
                alt="Logo Sunrise SUP"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* FAQ das Imagens das Perguntas Frequentes */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-xl border border-slate-200 mb-10">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-extrabold text-[#2B7EA1] uppercase tracking-widest block mb-1">
              Dúvidas Frequentes
            </span>
            <h3 className="font-heading font-black text-2xl text-[#112D4E]">Tudo o que você precisa saber</h3>
          </div>

          <div className="space-y-3.5">
            <details className="bg-slate-50 rounded-2xl p-4 border border-slate-200 cursor-pointer">
              <summary className="font-heading font-bold text-sm text-[#112D4E]">
                O que acontece se chover no dia da remada?
              </summary>
              <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                Caso as condições marítimas estejam desfavoráveis (mar agitado ou vento excessivo), remarcamos sem custos para outra data ou devolvemos integralmente o seu pagamento. Chuvisco fraco com mar calmo não cancela o passeio.
              </p>
            </details>

            <details className="bg-slate-50 rounded-2xl p-4 border border-slate-200 cursor-pointer">
              <summary className="font-heading font-bold text-sm text-[#112D4E]">
                A experiência inclui fotos ou filmagem?
              </summary>
              <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                Sim! O ensaio de fotos e vídeos em alta resolução já está totalmente incluso no valor do passeio avulso de R$ 150.
              </p>
            </details>

            <details className="bg-slate-50 rounded-2xl p-4 border border-slate-200 cursor-pointer">
              <summary className="font-heading font-bold text-sm text-[#112D4E]">
                Posso cancelar ou alterar minha reserva?
              </summary>
              <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                Sim, cancelamentos ou alterações com até 48 horas de antecedência são 100% gratuitos (RN-003).
              </p>
            </details>

            <details className="bg-slate-50 rounded-2xl p-4 border border-slate-200 cursor-pointer">
              <summary className="font-heading font-bold text-sm text-[#112D4E]">
                Nunca fiz Stand Up Paddle. Posso participar mesmo assim?
              </summary>
              <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                Com certeza! Mais de 85% dos nossos alunos nunca subiram em uma prancha antes. Oferecemos treino prático prévio na areia e acompanhamento de perto.
              </p>
            </details>
          </div>
        </div>

        {/* Imagem Panorâmica Editorial */}
        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white card-touch relative group">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            alt="Cenário de mar calmo em Copacabana na Guarderia Surf Club"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/85 via-[#112D4E]/25 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#FCD04B] block mb-1">
                Base Oficial &bull; Copacabana
              </span>
              <h4 className="font-heading font-black text-lg sm:text-2xl leading-tight">
                Oceano Calmo, Segurança e Conexão com a Natureza
              </h4>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('reserva')}
              className="btn-solar text-xs py-3 px-6 whitespace-nowrap"
            >
              Agendar Remada &rarr;
            </button>
          </div>
        </div>

      </section>

    </main>
  );
};
