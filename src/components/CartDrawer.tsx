import React, { useState } from 'react';
import type { CartItem, BookingOrder } from '../types';
import { XIcon, TrashIcon, TagIcon, ShieldCheckIcon, CheckCircleIcon } from './Icons';
import {
  calculateSubtotal,
  calculateDiscount,
  calculateBeachTax,
  calculateTotal,
  calculateItemTotal,
  generateBookingId
} from '../utils/bookingUtils';

interface CartDrawerProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onOrderCreated: (order: BookingOrder) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderCreated,
}) => {
  if (!isOpen) return null;

  const [couponInput, setCouponInput] = useState<string>('');
  const [appliedCoupon, setAppliedCoupon] = useState<string>('');
  const [couponFeedback, setCouponFeedback] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  const subtotal = calculateSubtotal(cartItems);
  const discount = calculateDiscount(subtotal, appliedCoupon);
  const beachTax = calculateBeachTax(subtotal);
  const total = calculateTotal(subtotal, discount, beachTax);

  const handleApplyCoupon = () => {
    setCouponFeedback('');
    if (!couponInput.trim()) return;
    const clean = couponInput.trim().toUpperCase();
    if (clean === 'SUNRISE10' || clean === 'PRIMEIRAREMADA' || clean === 'SUP20') {
      setAppliedCoupon(clean);
      setCouponFeedback(`Cupom ${clean} aplicado com sucesso!`);
    } else {
      setCouponFeedback('Cupom inválido. Tente SUNRISE10 ou PRIMEIRAREMADA.');
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (cartItems.length === 0) {
      setFormError('Seu carrinho está vazio.');
      return;
    }
    if (!customerName.trim() || !customerEmail.trim()) {
      setFormError('Por favor, informe seu nome e e-mail para confirmação.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: BookingOrder = {
        id: generateBookingId(),
        customerName,
        customerEmail,
        items: [...cartItems],
        subtotal,
        discount,
        beachTax,
        total,
        couponCode: appliedCoupon || undefined,
        createdAt: new Date().toISOString(),
        status: 'confirmada',
        qrCodeToken: Math.random().toString(36).substring(2, 10).toUpperCase()
      };

      onOrderCreated(newOrder);
      onClearCart();
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-50">Seu Carrinho de Remadas</h2>
              <span className="bg-sky-500/20 text-sky-300 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-100 p-1.5 rounded-full bg-slate-950 border border-slate-800"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto mb-3 text-slate-500">
                  <TagIcon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold text-slate-300">Carrinho Vazio</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Selecione uma prancha, aula ou acessório para agendar.
                </p>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800/80 rounded-2xl p-3.5 flex gap-3 relative group"
                >
                  <img
                    src={item.equipment.image}
                    alt={item.equipment.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-xs font-bold text-slate-100 truncate pr-4">
                        {item.equipment.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(idx)}
                        className="text-slate-500 hover:text-red-400 transition-colors"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>

                    {item.selectedDate && (
                      <div className="text-[11px] text-sky-400 font-medium mt-0.5">
                        {item.selectedDate} | {item.selectedTimeSlot} ({item.durationHours}h)
                      </div>
                    )}

                    {/* Safety Badge - RN-004 */}
                    {item.equipment.includedSafetyGear && (
                      <div className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1 mt-1">
                        <ShieldCheckIcon className="w-3 h-3 shrink-0" />
                        Colete + Leash Inclusos
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-slate-900">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(idx, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 rounded bg-slate-900 text-slate-300 text-xs font-bold border border-slate-800 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-slate-200">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="w-6 h-6 rounded bg-slate-900 text-slate-300 text-xs font-bold border border-slate-800 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-xs font-extrabold text-slate-100">
                        R$ {calculateItemTotal(item).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Coupon Code Section */}
            {cartItems.length > 0 && (
              <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800">
                <label className="block text-[11px] font-bold text-slate-300 mb-1.5 flex items-center gap-1">
                  <TagIcon className="w-3.5 h-3.5 text-amber-400" />
                  Cupom de Desconto:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Ex: SUNRISE10"
                    className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-slate-100 uppercase placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-xl transition-all"
                  >
                    Aplicar
                  </button>
                </div>
                {couponFeedback && (
                  <div className="text-[11px] font-medium text-amber-400 mt-1.5">
                    {couponFeedback}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Checkout & Summary Footer */}
          {cartItems.length > 0 && (
            <form onSubmit={handleCheckout} className="p-5 border-t border-slate-800 bg-slate-950/60 space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="text-slate-200">R$ {subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-amber-400 font-medium">
                    <span>Desconto ({appliedCoupon})</span>
                    <span>- R$ {discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Taxa Preservação Praiana</span>
                  <span className="text-slate-200">R$ {beachTax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-slate-50 pt-2 border-t border-slate-800">
                  <span>Total Final</span>
                  <span className="text-sky-400">R$ {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Customer Info inputs */}
              <div className="pt-2 space-y-2">
                <input
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail (para receber o QR Code)"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              {formError && (
                <div className="text-[11px] font-semibold text-red-400 bg-red-950/40 border border-red-500/30 p-2 rounded-lg">
                  {formError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-500 via-sky-600 to-orange-500 hover:from-sky-600 hover:to-orange-600 text-slate-950 font-black text-xs py-3.5 rounded-xl shadow-xl shadow-sky-500/20 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircleIcon className="w-4 h-4" />
                <span>{isSubmitting ? 'Processando Reserva...' : 'Confirmar Reserva e Gerar QR Code'}</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
