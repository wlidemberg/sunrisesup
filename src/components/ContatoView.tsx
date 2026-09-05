import React, { useState } from 'react';

export const ContatoView: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="block">
      
      <section className="bg-[#112D4E] text-white pt-16 pb-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-widest text-[#FCD04B] bg-white/10 px-4 py-1.5 rounded-full mb-3">
            Atendimento Oficial
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white mb-3">
            Fale com a <span className="text-[#FCD04B]">Sunrise SUP</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-200">
            Estamos a postos na base da Guarderia Surf Club para esclarecer qualquer dúvida sobre condições marítimas, agendamentos e estrutura.
          </p>
        </div>
      </section>

      <section className="py-14 max-w-6xl mx-auto px-5 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 card-touch">
              <span className="text-[10px] font-heading font-black uppercase tracking-wider text-[#2B7EA1] block mb-1">
                Localização
              </span>
              <h2 className="font-heading font-bold text-base text-[#112D4E]">Ponto de Encontro Oficial</h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                <strong>Guarderia Surf Club</strong><br />
                R. Francisco Otaviano, 42 - Copacabana<br />
                Rio de Janeiro - RJ, CEP 22080-041
              </p>
              <span className="inline-block mt-2 text-[11px] font-bold text-[#2B7EA1]">
                Acesso fácil a pé, táxi ou aplicativo
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 card-touch">
              <span className="text-[10px] font-heading font-black uppercase tracking-wider text-[#2B7EA1] block mb-1">
                WhatsApp
              </span>
              <h2 className="font-heading font-bold text-base text-[#112D4E]">Atendimento e Reservas</h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                Contato direto com a equipe para informações sobre o mar e vagas:
              </p>
              <a
                href="https://wa.me/5521998460818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 font-heading font-extrabold text-sm text-[#2B7EA1] hover:underline"
              >
                +55 21 99846-0818 &rarr;
              </a>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 card-touch">
              <span className="text-[10px] font-heading font-black uppercase tracking-wider text-[#2B7EA1] block mb-1">
                Funcionamento
              </span>
              <h2 className="font-heading font-bold text-base text-[#112D4E]">Horários de Saída</h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
                <strong>Passeio Nascer do Sol:</strong> Diariamente às 05:30 AM.<br />
                <strong>Atendimento Guarderia:</strong> 04:45 AM às 18:00 PM.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-100">
              <h2 className="font-heading font-extrabold text-xl text-[#112D4E] mb-2">Envie uma Mensagem</h2>
              <p className="text-xs text-slate-500 mb-6">
                Dúvidas sobre reservas avulsas, amigos ou horários especiais? Escreva para nós:
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-heading font-bold text-[#112D4E] mb-1.5">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Rodrigo Pereira"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2B7EA1] focus:outline-none bg-slate-50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-[#112D4E] mb-1.5">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(21) 99846-0818"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2B7EA1] focus:outline-none bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-heading font-bold text-[#112D4E] mb-1.5">
                      Assunto
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2B7EA1] focus:outline-none bg-slate-50">
                      <option>Passeio Nascer do Sol (R$ 150)</option>
                      <option>Passeio com Amigos ou Família</option>
                      <option>Dúvidas sobre Condições do Mar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-[#112D4E] mb-1.5">
                    Sua Dúvida ou Data Desejada
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Quantas pessoas e qual o dia pretendido..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-[#2B7EA1] focus:outline-none bg-slate-50 resize-none"
                  />
                </div>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold text-center">
                    Mensagem enviada com sucesso. Nossa equipe entrará em contato via WhatsApp.
                  </div>
                )}

                <button type="submit" className="btn-solar w-full">
                  Enviar Mensagem para a Equipe &rarr;
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
