import React from 'react';
import { SunIcon, WaveIcon, ShoppingBagIcon, CalendarIcon } from './Icons';

interface NavbarProps {
  cartItemsCount: number;
  bookingsCount: number;
  onOpenCart: () => void;
  onOpenBookings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemsCount,
  bookingsCount,
  onOpenCart,
  onOpenBookings,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <SunIcon className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-black tracking-tight text-slate-50 font-display">
                SUNRISE<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">SUP</span>
              </span>
            </div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-sky-400">
              Locação & Experiências no Mar
            </div>
          </div>
        </a>

        {/* Center Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <a href="#catalogo" className="text-slate-300 hover:text-sky-400 transition-colors flex items-center gap-1.5">
            <WaveIcon className="w-4 h-4 text-sky-400" />
            Catálogo & Aulas
          </a>
          <a href="#amanhecer" className="text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1.5">
            <SunIcon className="w-4 h-4 text-orange-400" />
            Remada ao Amanhecer
          </a>
          <a href="#loja" className="text-slate-300 hover:text-amber-400 transition-colors">
            Equipamentos & Loja
          </a>
          <a href="#praia" className="text-slate-300 hover:text-sky-400 transition-colors">
            Nosso Ponto na Praia
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* My Bookings Button */}
          <button
            type="button"
            onClick={onOpenBookings}
            className="relative flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-slate-200 text-xs font-bold px-3.5 py-2.5 rounded-xl transition-all"
          >
            <CalendarIcon className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">Minhas Reservas</span>
            {bookingsCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-sky-500 text-slate-950 text-[10px] font-extrabold flex items-center justify-center">
                {bookingsCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
          >
            <ShoppingBagIcon className="w-4 h-4" />
            <span>Carrinho</span>
            {cartItemsCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-400 text-[10px] font-extrabold flex items-center justify-center ml-0.5">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
