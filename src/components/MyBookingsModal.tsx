import React from 'react';
import type { BookingOrder } from '../types';
import { XIcon, QrCodeIcon, ShieldCheckIcon, CalendarIcon } from './Icons';
import { isCancellationAllowed } from '../utils/bookingUtils';

interface MyBookingsModalProps {
  isOpen: boolean;
  orders: BookingOrder[];
  onClose: () => void;
  onCancelBooking: (orderId: string) => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  orders,
  onClose,
  onCancelBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl overflow-hidden relative max-h-[85vh] flex flex-col">
        
        {/* Close Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-sky-400" />
            <h2 className="text-lg font-bold text-slate-50">Minhas Reservas de SUP</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 p-1.5 rounded-full bg-slate-950 border border-slate-800"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {orders.length === 0 ? (
            <div className="text-center py-12 bg-slate-950/60 rounded-2xl border border-slate-800/80">
              <CalendarIcon className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-300">Nenhuma reserva localizada</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Suas reservas de remada e agendamentos de aulas ao amanhecer aparecerão aqui com QR Code para retirada na praia.
              </p>
            </div>
          ) : (
            orders.map((order) => {
              const canCancel = isCancellationAllowed(order.createdAt);

              return (
                <div
                  key={order.id}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-5 relative overflow-hidden"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <div className="text-[10px] font-extrabold text-sky-400 uppercase tracking-wider">
                        Código da Reserva: {order.id}
                      </div>
                      <div className="text-sm font-bold text-slate-100">
                        {order.customerName} ({order.customerEmail})
                      </div>
                    </div>

                    {/* Status Badge */}
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase ${
                        order.status === 'confirmada'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : order.status === 'cancelada'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  {/* Order items */}
                  <div className="space-y-2 mb-4 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">
                          {item.quantity}x {item.equipment.name}
                        </span>
                        <span className="text-slate-400">
                          {item.selectedDate ? `${item.selectedDate} (${item.selectedTimeSlot})` : 'Equipamento'}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* QR Code and Total */}
                  <div className="grid sm:grid-cols-2 gap-4 items-center bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg p-1 shrink-0 flex items-center justify-center">
                        <QrCodeIcon className="w-10 h-10 text-slate-950" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">QR Code de Retirada na Praia</div>
                        <div className="text-xs font-mono font-bold text-amber-400">{order.qrCodeToken}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] uppercase text-slate-400">Valor Total Pago</div>
                      <div className="text-base font-black text-sky-400">R$ {order.total.toFixed(2)}</div>
                    </div>
                  </div>

                  {/* Cancellation Rule (RN-003) */}
                  {order.status === 'confirmada' && (
                    <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                        <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                        RN-003: Reembolso 100% até 24h antes do evento.
                      </div>

                      {canCancel ? (
                        <button
                          type="button"
                          onClick={() => onCancelBooking(order.id)}
                          className="bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-xs px-3.5 py-1.5 rounded-xl transition-all"
                        >
                          Cancelar Reserva (Reembolso 100%)
                        </button>
                      ) : (
                        <span className="text-[10px] text-red-400 font-medium">
                          Prazo de cancelamento expirado (&lt; 24h)
                        </span>
                      )}
                    </div>
                  )}

                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
