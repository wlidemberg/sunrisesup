import { useState } from 'react';
import type { PageTab } from './types';
import { Header } from './components/Header';
import { FloatingDock } from './components/FloatingDock';
import { FloatingSunnys } from './components/FloatingSunnys';
import { HomeView } from './components/HomeView';
import { SobreView } from './components/SobreView';
import { ComoTrabalhamosView } from './components/ComoTrabalhamosView';
import { ReservaView } from './components/ReservaView';
import { ContatoView } from './components/ContatoView';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#112D4E] font-body antialiased flex flex-col selection:bg-[#FCD04B] selection:text-[#112D4E]">
      
      {/* Header Fixo com Logo Oficial e Menu Multi-Páginas */}
      <Header activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Dock Flutuante de Redes Sociais */}
      <FloatingDock />

      {/* Visão de Páginas (SPA) */}
      <div className="flex-1">
        {activeTab === 'home' && <HomeView onNavigate={setActiveTab} />}
        {activeTab === 'sobre' && <SobreView onNavigate={setActiveTab} />}
        {activeTab === 'comotrabalhamos' && <ComoTrabalhamosView onNavigate={setActiveTab} />}
        {activeTab === 'reserva' && <ReservaView />}
        {activeTab === 'contato' && <ContatoView />}
      </div>

      {/* Botão Flutuante Atendente Virtual Sunnys */}
      <FloatingSunnys />

      {/* Rodapé Oficial Sunrise SUP */}
      <Footer onNavigate={setActiveTab} />

    </div>
  );
}

export default App;
