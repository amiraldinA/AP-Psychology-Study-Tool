import React, { useState } from 'react';
import { StoreProvider } from './store';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { FlashcardViewer } from './components/Flashcards';
import { QuizViewer } from './components/Quiz';
import { CustomQuizCreator } from './components/CustomQuizCreator';
import { APPrepHub } from './components/APPrepHub';
import { Menu } from 'lucide-react';
import { clsx } from 'clsx';
import { studyData } from './data';

function AppContent() {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedUnit, setSelectedUnit] = useState<string | undefined>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (view: string, unitId?: string) => {
    setActiveView(view);
    setSelectedUnit(unitId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden relative">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar */}
      <div className={clsx(
        "fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 md:hidden bg-card border-r border-border",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Sidebar activeView={activeView} selectedUnit={selectedUnit} onNavigate={handleNavigate} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar activeView={activeView} selectedUnit={selectedUnit} onNavigate={handleNavigate} />
      </div>

      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header / Status Bar */}
        <header className="h-20 border-b border-[#222222] flex items-center justify-between px-6 md:px-10 shrink-0 select-none">
          <div className="flex items-center">
            <button onClick={() => setIsMobileMenuOpen(true)} className="mr-4 p-2 rounded-md hover:bg-[#151515] text-[#999999] md:hidden">
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[12px] text-[#666666] uppercase tracking-[0.15em] block md:inline md:mr-2">Now Viewing</span>
              <h2 className="text-lg text-white font-medium inline">
                {selectedUnit ? (studyData.find(u => u.id === selectedUnit)?.title || 'Unit Study') : 'Progress Dashboard'}
              </h2>
            </div>
          </div>

          {/* Mode Switcher Segments for Units */}
          {selectedUnit && (
            <div className="hidden md:flex bg-[#141414] border border-[#222222] p-1 rounded-sm text-[10px] uppercase tracking-widest font-semibold gap-1">
              <button
                onClick={() => handleNavigate('flashcards', selectedUnit)}
                className={clsx(
                  "px-5 py-2.5 rounded-sm cursor-pointer transition-all leading-none",
                  activeView === 'flashcards'
                    ? "bg-[#1f1f1f] border border-[#333333] text-white"
                    : "text-[#666666] hover:text-[#999999]"
                )}
              >
                Flashcards
              </button>
              <button
                onClick={() => handleNavigate('quiz', selectedUnit)}
                className={clsx(
                  "px-5 py-2.5 rounded-sm cursor-pointer transition-all leading-none",
                  activeView === 'quiz'
                    ? "bg-[#1f1f1f] border border-[#333333] text-white"
                    : "text-[#666666] hover:text-[#999999]"
                )}
              >
                Quiz Practice
              </button>
            </div>
          )}

          {/* Counts */}
          <div className="hidden md:flex space-x-8">
            {selectedUnit ? (
              <>
                <div className="text-center">
                  <div className="text-xl font-light text-white">{studyData.find(u => u.id === selectedUnit)?.flashcards.length || 0}</div>
                  <div className="text-[9px] uppercase text-[#666666] tracking-widest">Terms</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-light text-[#a88a5f]">
                    {studyData.find(u => u.id === selectedUnit)?.quiz.length || 0}
                  </div>
                  <div className="text-[9px] uppercase text-[#666666] tracking-widest">Questions</div>
                </div>
              </>
            ) : (
              <div className="text-right text-[10px] text-[#444444] font-mono tracking-widest leading-loose">
                AP PSYCH STUDY TOOL v2.4
              </div>
            )}
          </div>
        </header>

        {/* Mobile Sub-Header Toggles when studying a unit */}
        {selectedUnit && (
          <div className="md:hidden flex bg-[#121212] border-b border-[#222222] p-2 justify-center gap-2 select-none">
            <button
              onClick={() => handleNavigate('flashcards', selectedUnit)}
              className={clsx(
                "flex-1 py-2 text-[10px] uppercase tracking-widest text-center rounded-sm transition-all",
                activeView === 'flashcards'
                  ? "bg-[#1a1a1a] border border-[#333333] text-white font-semibold"
                  : "text-[#555555]"
              )}
            >
              Flashcards
            </button>
            <button
              onClick={() => handleNavigate('quiz', selectedUnit)}
              className={clsx(
                "flex-1 py-2 text-[10px] uppercase tracking-widest text-center rounded-sm transition-all",
                activeView === 'quiz'
                  ? "bg-[#1a1a1a] border border-[#333333] text-white font-semibold"
                  : "text-[#555555]"
              )}
            >
              Quiz Practice
            </button>
          </div>
        )}

        <div className="flex-1 overflow-auto p-4 md:p-12 custom-scrollbar">
          {activeView === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
          {activeView === 'flashcards' && <FlashcardViewer unitId={selectedUnit} onBack={() => handleNavigate('dashboard')} />}
          {activeView === 'quiz' && <QuizViewer unitId={selectedUnit} onBack={() => handleNavigate('dashboard')} />}
          {activeView === 'custom-quizzes' && <CustomQuizCreator onBack={() => handleNavigate('dashboard')} />}
          {activeView === 'ap-prep' && <APPrepHub onBack={() => handleNavigate('dashboard')} />}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}