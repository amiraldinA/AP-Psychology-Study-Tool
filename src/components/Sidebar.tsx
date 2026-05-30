import React from 'react';
import { LayoutDashboard, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import { clsx } from 'clsx';
import { useStore } from '../store';
import { studyData } from '../data';

type Props = {
  activeView: string;
  selectedUnit?: string;
  onNavigate: (view: string, unitId?: string) => void;
};

export const Sidebar = ({ activeView, selectedUnit, onNavigate }: Props) => {
  const { state } = useStore();

  // Calculate live global average mastery across all units
  const totalMasterySum = studyData.reduce((acc, unit) => acc + (state.unitMastery[unit.id] || 0), 0);
  const globalMasteryAvg = Math.round(totalMasterySum / (studyData.length || 1));

  return (
    <div className="w-72 bg-[#111111] border-r border-[#222222] flex flex-col h-full shrink-0">
      {/* Logo Header */}
      <div className="p-8 border-b border-[#222222]">
        <h1 className="text-2xl tracking-tight font-light text-white mb-1 font-serif italic">
          Psych Study Tool
        </h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#666666] font-semibold">
          AP Psychology Edition
        </p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {/* Global Dashboard Link */}
        <button
          id="dashboard-nav-btn"
          onClick={() => onNavigate('dashboard')}
          className={clsx(
            "w-full flex items-center gap-3 p-4 rounded-sm transition-colors cursor-pointer text-left",
            activeView === 'dashboard'
              ? "bg-[#1a1a1a] border border-[#333333] text-white"
              : "text-[#999999] hover:bg-[#151515] hover:text-white"
          )}
        >
          <LayoutDashboard className={clsx("w-4 h-4", activeView === 'dashboard' ? "text-white" : "text-[#777777]")} />
          <span className="text-sm font-medium">Progress Dashboard</span>
        </button>

        {/* AP Prep Hub Link */}
        <button
          id="ap-prep-nav-btn"
          onClick={() => onNavigate('ap-prep')}
          className={clsx(
            "w-full flex items-center gap-3 p-4 rounded-sm transition-colors cursor-pointer text-left",
            activeView === 'ap-prep'
              ? "bg-[#1a1a1a] border border-[#333333] text-white"
              : "text-[#999999] hover:bg-[#151515] hover:text-white"
          )}
        >
          <GraduationCap className={clsx("w-4 h-4", activeView === 'ap-prep' ? "text-white" : "text-[#a88a5f]")} />
          <span className="text-sm font-medium">AP® Exam Prep Hub</span>
        </button>

        {/* Custom Quizzes Link */}
        <button
          id="custom-quizzes-nav-btn"
          onClick={() => onNavigate('custom-quizzes')}
          className={clsx(
            "w-full flex items-center gap-3 p-4 rounded-sm transition-colors cursor-pointer text-left",
            activeView === 'custom-quizzes'
              ? "bg-[#1a1a1a] border border-[#333333] text-white"
              : "text-[#999999] hover:bg-[#151515] hover:text-white"
          )}
        >
          <Sparkles className={clsx("w-4 h-4", activeView === 'custom-quizzes' ? "text-white" : "text-[#a88a5f]")} />
          <span className="text-sm font-medium">Custom Quizzes</span>
        </button>

        {/* Units Heading */}
        <div className="px-4 pt-6 pb-2 text-[10px] uppercase tracking-widest text-[#444444] font-bold">
          Units of Study
        </div>

        {/* Units List */}
        {studyData.map((unit) => {
          const isUnitSelected = (activeView === 'flashcards' || activeView === 'quiz') && selectedUnit === unit.id;
          const mastery = Math.round(state.unitMastery[unit.id] || 0);

          return (
            <button
              key={unit.id}
              onClick={() => onNavigate('flashcards', unit.id)}
              className={clsx(
                "w-full flex items-center justify-between p-4 rounded-sm transition-colors cursor-pointer text-left",
                isUnitSelected
                  ? "bg-[#1a1a1a] border border-[#333333] text-white"
                  : "text-[#999999] hover:bg-[#151515] hover:text-white"
              )}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <BookOpen className={clsx("w-4 h-4 shrink-0", isUnitSelected ? "text-[#a88a5f]" : "text-[#555555]")} />
                <span className="text-xs truncate font-light leading-snug">
                  {unit.title.split(': ')[0] || unit.title}
                </span>
              </div>
              <span className={clsx("text-[10px] ml-2 shrink-0 font-mono", isUnitSelected ? "text-[#a88a5f]" : "text-[#555555]")}>
                {mastery}%
              </span>
            </button>
          );
        })}
      </nav>

      {/* Global Mastery Status Footer */}
      <div className="p-6 border-t border-[#222222] bg-[#0c0c0c]">
        <div className="flex justify-between items-center text-[11px] text-[#666666] mb-2 uppercase tracking-tighter italic">
          <span>Global Mastery</span>
          <span className="font-mono text-white text-[12px]">{globalMasteryAvg}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#222222] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#a88a5f] transition-all duration-700 ease-in-out" 
            style={{ width: `${globalMasteryAvg}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
