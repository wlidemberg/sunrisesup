import React, { useState } from 'react';
import { PASSEIO_PRECO_UNICO } from '../utils/bookingUtils';

export const ReservaView: React.FC = () => {
  const [personsCount, setPersonsCount] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(4);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [feedbackSuccess, setFeedbackSuccess] = useState<boolean>(false);

  const totalCost = Math.max(1, personsCount) * PASSEIO_PRECO_UNICO;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSuccess(true);
  };

  return (
    <main className="block">
      
      <section className="bg-[#112D4E] text-white pt-16 pb-20 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-heading font-extrabold uppercase tracking-widest text-[#FCD04B] bg-white/10 px-4 py-1.5 rounded-full mb-3">
            Agendamento Oficial WooCommerce
          </span>
          <h1 className="font-heading font-black text-3xl sm:text-5xl text-white mb-3">
            Reserve sua Vaga no Amanhecer
          </h1>
          <p className="text-xs sm:text-sm text-slate-200">
            Selecione a data desejada para consultar a disponibilidade de pranchas e instrutores na Guarderia Surf Club.
          </p>
        </div>
      </section>

      <section className="py-14 max-w-6xl mx-auto px-5 sm:px-6 -mt-8 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Coluna Esquerda: Formulário WooCommerce Bookings */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-200">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-heading font-bold text-[#2B7EA1] uppercase tracking-wider block mb-1">
                WooCommerce Bookings
              </span>
              <h2 className="font-heading font-black text-xl text-[#112D4E]">Calendário de Agendamento</h2>
              <p className="text-xs text-[#475569] mt-1">Horário oficial da saída: 05:30 AM (America/Sao_Paulo)</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Seletor de Participantes */}
              <div className="mb-5">
                <label className="block text-xs font-heading font-bold text-[#112D4E] mb-1.5">
                  Número de Pessoas:
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={personsCount}
                    onChange={(e) => setPersonsCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    min={1}
                    max={15}
                    className="w-24 px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-[#112D4E] text-center focus:outline-none focus:border-[#2B7EA1] bg-slate-50"
                  />
                  <span className="text-xs text-slate-500">R$ 150,00 por participante (passeio avulso)</span>
                </div>
              </div>

              {/* Calendário Interativo Setembro 2026 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-5 shadow-sm">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <button type="button" className="text-xs font-bold text-[#2B7EA1] px-2 py-1 rounded hover:bg-slate-100">
                    &larr; Anterior
                  </button>
                  <strong className="text-xs font-heading font-extrabold uppercase text-[#112D4E] tracking-wider">
                    SETEMBRO 2026
                  </strong>
                  <button type="button" className="text-xs font-bold text-[#2B7EA1] px-2 py-1 rounded hover:bg-slate-100">
                    Próximo &rarr;
                  </button>
                </div>

                <table className="w-full wc-bookings-calendar-table table-fixed">
                  <thead>
                    <tr>
                      <th>S</th><th>T</th><th>Q</th><th>Q</th><th>S</th><th>S</th><th>D</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span className="wc-day-btn disabled">31</span></td>
                      {[1, 2, 3, 4, 5, 6].map((day) => (
                        <td key={day}>
                          <button
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`wc-day-btn available ${selectedDay === day ? 'selected' : ''}`}
                          >
                            {day}
                          </button>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      {[7, 8, 9, 10, 11, 12, 13].map((day) => (
                        <td key={day}>
                          <button
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`wc-day-btn available ${selectedDay === day ? 'selected' : ''}`}
                          >
                            {day}
                          </button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Horário Disponível */}
              <div className="mb-5">
                <label className="block text-xs font-heading font-bold text-[#112D4E] mb-1.5">
                  Horário Confirmado:
                </label>
                <div className="inline-flex items-center gap-2 bg-[#EBF6FA] border-2 border-[#FCD04B] px-4 py-2 rounded-xl text-xs font-heading font-extrabold text-[#112D4E]">
                  <span>05:30 AM (Nascer do Sol no Mar)</span>
                  <span className="text-emerald-600 font-bold">&bull; Vagas Abertas</span>
                </div>
              </div>

              {/* Campos de Contato */}
              <div className="space-y-3.5 mb-6">
                <div>
                  <label className="block text-xs font-heading font-bold text-[#112D4E] mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#2B7EA1] focus:outline-none bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold text-[#112D4E] mb-1">
                    WhatsApp / Telefone com DDD
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(21) 99999-9999"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-[#2B7EA1] focus:outline-none bg-slate-50"
                  />
                </div>
              </div>

              {/* Preço e Botão Submit */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between mb-5">
                <span className="text-xs font-semibold text-[#475569]">Total da Reserva:</span>
                <span className="text-lg font-heading font-black text-[#112D4E]">
                  R$ {totalCost.toLocaleString('pt-BR')},00
                </span>
              </div>

              {feedbackSuccess ? (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center mb-4">
                  Reserva para o dia {selectedDay} de Setembro realizada com sucesso! Redirecionando para o pagamento seguro...
                </div>
              ) : null}

              <button
                type="submit"
                className="btn-solar w-full py-4 text-center"
              >
                Confirmar e Prosseguir para Pagamento &rarr;
              </button>

              {/* Banner de Contingência de Vagas */}
              <div className="mt-5">
                <a
                  href="https://sunrisesup.com.br/product/passeio-nascer-do-sol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#0B1D33] text-white rounded-2xl border border-[#FCD04B]/40 hover:border-[#FCD04B] transition shadow-lg group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FCD04B] flex-shrink-0">
                      <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-heading font-bold text-white">
                      Ficou sem vaga para a data?
                    </span>
                  </div>
                  <span className="bg-[#FCD04B] text-[#112D4E] text-[11px] font-heading font-extrabold uppercase px-3 py-1.5 rounded-full shadow transition transform group-hover:scale-105 whitespace-nowrap">
                    CLIQUE AQUI &rarr;
                  </span>
                </a>
              </div>
            </form>

          </div>

          {/* Coluna Direita: Identidade Visual Guarderia Surf Club */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-[#112D4E] to-[#2B7EA1] text-white rounded-3xl p-8 shadow-xl border border-white/20 text-center relative overflow-hidden">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white p-2 shadow-lg border-2 border-[#FCD04B] flex items-center justify-center">
                <img
                  src="https://sunrisesup.com.br/wp-content/uploads/2026/08/sunrise-logo-192-x-192-px-1.png"
                  alt="Logo Guarderia Surf Club"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-heading font-black text-2xl text-white tracking-wide mb-1">
                GUARDERIA SUNRISE
              </h3>
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FCD04B] block mb-4">
                Surf Club &bull; Copacabana
              </span>
              
              <p className="text-xs text-slate-200 leading-relaxed mb-6">
                A experiência de remo mais tradicional e segura do mar do Rio de Janeiro. Pranchas novas, coletes certificados e fotos em alta resolução no mesmo dia.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-left border border-white/15 text-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#FCD04B] font-bold">&bull;</span> Ducha de água doce na volta do mar
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FCD04B] font-bold">&bull;</span> Vestiários e guarda-volumes inclusos
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#FCD04B] font-bold">&bull;</span> Cancelamento grátis até 48h antes
                </div>
              </div>
            </div>

            {/* Caixa Política de Cancelamento */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#2B7EA1] mb-1">
                Política de Cancelamento
              </h4>
              <p className="text-xs text-[#475569] font-medium">
                Cancelamento gratuito e reembolso integral até 48 horas antes da saída.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};
