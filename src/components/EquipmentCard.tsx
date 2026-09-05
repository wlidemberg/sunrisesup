import React, { useState } from 'react';
import type { Equipment } from '../types';
import { StarIcon, ShieldCheckIcon, CalendarIcon, ShoppingBagIcon } from './Icons';

interface EquipmentCardProps {
  equipment: Equipment;
  onSelectBooking: (equipment: Equipment, durationHours: number) => void;
  onAddToCart: (equipment: Equipment, durationHours: number) => void;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  equipment,
  onSelectBooking,
  onAddToCart,
}) => {
  const [duration, setDuration] = useState<number>(1);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'rental':
        return <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">Locação SUP</span>;
      case 'lesson':
        return <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">Aula & Tour</span>;
      case 'product':
        return <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">Loja</span>;
      default:
        return null;
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'iniciante': return 'Para Iniciantes';
      case 'intermediario': return 'Intermediário';
      case 'avancado': return 'Performance Avançada';
      default: return 'Todos os Níveis';
    }
  };

  const handleActionClick = () => {
    if (equipment.category === 'product') {
      onAddToCart(equipment, 1);
    } else {
      onSelectBooking(equipment, duration);
    }
  };

  return (
    <div
      data-testid={`equipment-card-${equipment.id}`}
      className="group relative flex flex-col justify-between bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300"
    >
      {/* Image & Badges Overlay */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-950">
        <img
          src={equipment.image}
          alt={equipment.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {getCategoryBadge(equipment.category)}
        </div>

        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-700/50 flex items-center gap-1">
          <StarIcon className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-bold text-slate-100">{equipment.rating}</span>
          <span className="text-[10px] text-slate-400">({equipment.reviewsCount})</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-medium text-sky-400 mb-1">
            {getLevelLabel(equipment.level)}
          </div>
          <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors line-clamp-2 mb-2">
            {equipment.name}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            {equipment.description}
          </p>

          {/* Safety Gear Badge - RN-004 */}
          {equipment.includedSafetyGear && (
            <div className="mb-4 bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-2 flex items-center gap-2">
              <ShieldCheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-medium text-emerald-300">
                Colete Homologado & Leash Inclusos (RN-004)
              </span>
            </div>
          )}

          {/* Features list */}
          <ul className="space-y-1 mb-4">
            {equipment.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* Duration selector for Rentals */}
        {equipment.category === 'rental' && (
          <div className="mb-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">Duração da remada:</span>
            <div className="flex bg-slate-950 p-0.5 rounded-lg border border-slate-800">
              {[1, 2, 3].map((h) => (
                <button
                  key={h}
                  type="button"
                  onClick={() => setDuration(h)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                    duration === h
                      ? 'bg-sky-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {h}h
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price & CTA Action */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] uppercase text-slate-400 tracking-wider">A partir de</div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-slate-50">
                R$ {(equipment.price * (equipment.category === 'rental' ? duration : 1)).toFixed(0)}
              </span>
              <span className="text-xs text-slate-400">
                / {equipment.category === 'rental' ? `${duration}h` : equipment.priceUnit}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleActionClick}
            className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
          >
            {equipment.category === 'product' ? (
              <>
                <ShoppingBagIcon className="w-4 h-4" />
                <span>Comprar</span>
              </>
            ) : (
              <>
                <CalendarIcon className="w-4 h-4" />
                <span>{equipment.category === 'lesson' ? 'Agendar Aula' : 'Reservar'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
