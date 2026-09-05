import React, { useState } from 'react';
import type { Equipment, BookingSlot } from '../types';
import { XIcon, SunIcon, ShieldCheckIcon, CalendarIcon, ClockIcon } from './Icons';
import { validateSlotAvailability } from '../utils/bookingUtils';

interface BookingModalProps {
  isOpen: boolean;
  equipment: Equipment | null;
  durationHours: number;
  availableSlots: BookingSlot[];
  onClose: () => void;
  onConfirmBooking: (
    equipment: Equipment,
    date: string,
    slotTime: string,
    qty: number,
    duration: number
  ) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  equipment,
  durationHours,
  availableSlots,
  onClose,
  onConfirmBooking,
}) => {
  if (!isOpen || !equipment) return null;

  // Initial date: tomorrow formatted YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState<string>(defaultDateStr);
  const [selectedSlot, setSelectedSlot] = useState<string>(availableSlots[0]?.time || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const currentSlotObj = availableSlots.find((s) => s.time === selectedSlot);

  const handleConfirm = () => {
    setErrorMsg('');
    if (!currentSlotObj) {
      setErrorMsg('Por favor, selecione um horário válido.');
      return;
    }

    if (!validateSlotAvailability(currentSlotObj, quantity)) {
      setErrorMsg(`O slot selecionado possui apenas ${currentSlotObj.availableCount} vagas disponíveis (RN-002: Máx 10 por slot).`);
      return;
    }

    onConfirmBooking(equipment, selectedDate, selectedSlot, quantity, durationHours);
    onClose();
  };

  const totalPrice = equipment.price * (equipment.category === 'rental' ? durationHours : 1) * quantity;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl overflow-hidden relative">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-100 p-1.5 rounded-full bg-slate-950/60 border border-slate-800 transition-colors"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pr-10">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
            <SunIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-50">Agendar Remada / Aula</h2>
            <p className="text-xs text-sky-400 font-medium">{equipment.name}</p>
          </div>
        </div>

        {/* Safety Badge - RN-004 */}
        <div className="mb-5 bg-emerald-950/50 border border-emerald-500/30 rounded-xl p-3 flex items-start gap-2.5">
          <ShieldCheckIcon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-emerald-300">Equipamento de Segurança Incluso</div>
            <div className="text-[11px] text-emerald-400/80 leading-tight">
              Toda reserva inclui sem custo adicional Colete Salva-Vidas homologado pela Marinha e Leash de segurança (RN-004).
            </div>
          </div>
        </div>

        {/* Date Selector */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <CalendarIcon className="w-4 h-4 text-sky-400" />
            Data da Remada na Praia:
          </label>
          <input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 focus:outline-none focus:border-sky-500"
          />
        </div>

        {/* Time Slot Selector */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4 text-orange-400" />
            Horário do Slot (RN-002: Máx 10 vagas/slot):
          </label>
          <div className="grid grid-cols-1 gap-2 max-h-36 overflow-y-auto pr-1">
            {availableSlots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                onClick={() => setSelectedSlot(slot.time)}
                className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                  selectedSlot === slot.time
                    ? 'bg-sky-500/20 border-sky-500 text-slate-100'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  {slot.isSunrise && <SunIcon className="w-4 h-4 text-amber-400 animate-pulse" />}
                  <span className="text-xs font-bold">{slot.time}</span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">
                  {slot.availableCount} pranchas disponíveis
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mb-6 flex items-center justify-between bg-slate-950 p-3.5 rounded-xl border border-slate-800">
          <div>
            <div className="text-xs font-bold text-slate-200">Quantidade de Pranchas</div>
            <div className="text-[10px] text-slate-400">Para você e seus acompanhantes</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold flex items-center justify-center hover:bg-slate-800"
            >
              -
            </button>
            <span className="text-sm font-extrabold text-sky-400 w-4 text-center">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(10, q + 1))}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-bold flex items-center justify-center hover:bg-slate-800"
            >
              +
            </button>
          </div>
        </div>

        {/* Error message if validation fails */}
        {errorMsg && (
          <div className="mb-4 text-xs font-semibold text-red-400 bg-red-950/40 border border-red-500/30 p-2.5 rounded-xl">
            {errorMsg}
          </div>
        )}

        {/* Confirm Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase text-slate-400 font-bold">Valor Total da Reserva</div>
            <div className="text-xl font-black text-slate-50">R$ {totalPrice.toFixed(2)}</div>
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-xs py-3.5 px-5 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all text-center justify-center flex items-center gap-2"
          >
            <CalendarIcon className="w-4 h-4" />
            <span>Adicionar ao Carrinho</span>
          </button>
        </div>

      </div>
    </div>
  );
};
