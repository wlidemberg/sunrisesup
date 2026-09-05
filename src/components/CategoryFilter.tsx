import React from 'react';
import type { CategoryType, ExperienceLevel } from '../types';

interface CategoryFilterProps {
  selectedCategory: CategoryType;
  selectedLevel: ExperienceLevel;
  onSelectCategory: (cat: CategoryType) => void;
  onSelectLevel: (lvl: ExperienceLevel) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  selectedLevel,
  onSelectCategory,
  onSelectLevel,
  searchQuery,
  onSearchChange,
}) => {
  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'Todos os Equipamentos' },
    { id: 'rental', label: 'Locação de Pranchas' },
    { id: 'lesson', label: 'Aulas & Sunrise Tours' },
    { id: 'product', label: 'Loja de Acessórios' },
  ];

  const levels: { id: ExperienceLevel; label: string }[] = [
    { id: 'all', label: 'Todos os Níveis' },
    { id: 'iniciante', label: 'Iniciantes' },
    { id: 'intermediario', label: 'Intermediário' },
    { id: 'avancado', label: 'Avançado' },
  ];

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        
        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar prancha, aula ou acessório..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          />
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === cat.id
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Levels Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
          <span className="text-[11px] font-semibold uppercase text-slate-400 shrink-0">Nível:</span>
          {levels.map((lvl) => (
            <button
              key={lvl.id}
              type="button"
              onClick={() => onSelectLevel(lvl.id)}
              className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg shrink-0 transition-all ${
                selectedLevel === lvl.id
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lvl.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};
