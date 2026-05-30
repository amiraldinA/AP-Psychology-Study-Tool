import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { studyData } from '../data';
import type { Flashcard } from '../types';
import { Card, CardContent } from './ui/card';
import { RotateCcw, ThumbsUp, ThumbsDown, CheckCircle, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clsx } from 'clsx';

type Props = {
  unitId?: string;
  onBack: () => void;
};

export const FlashcardViewer = ({ unitId, onBack }: Props) => {
  const { dispatch, state } = useStore();
  const selectedUnit = unitId || studyData[0].id;
  const [queue, setQueue] = useState<Flashcard[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedSubunitId, setSelectedSubunitId] = useState<string | 'all'>('all');

  useEffect(() => {
    setSelectedSubunitId('all');
  }, [selectedUnit]);

  useEffect(() => {
    if (selectedUnit) {
      const unit = studyData.find(u => u.id === selectedUnit);
      if (unit) {
        let cards = [...unit.flashcards];
        if (selectedSubunitId !== 'all' && unit.subunits) {
          const sub = unit.subunits.find(s => s.id === selectedSubunitId);
          if (sub) {
            cards = [...sub.flashcards];
          }
        }
        // shuffle initial queue
        setQueue([...cards].sort(() => Math.random() - 0.5));
      }
      setIsFlipped(false);
      setIsFinished(false);
    }
  }, [selectedUnit, selectedSubunitId]);

  const currentCard = queue[0];

  const handleRate = (rating: 'hard' | 'good' | 'easy') => {
    if (!currentCard) return;

    dispatch({ type: 'REVIEW_FLASHCARD', cardId: currentCard.id });
    
    // copy queue without the first item
    const newQueue = [...queue.slice(1)];

    if (rating === 'hard') {
      // Re-insert relatively soon
      const insertIndex = Math.min(3, newQueue.length);
      newQueue.splice(insertIndex, 0, currentCard);
    } else if (rating === 'good') {
      // Re-insert at the end
      newQueue.push(currentCard);
    } else if (rating === 'easy') {
      // Card mastered for this session, do not re-insert
    }

    setQueue(newQueue);
    setIsFlipped(false);

    if (newQueue.length === 0) {
      setIsFinished(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      // Improve mastery on completion
      const currentMastery = state.unitMastery[selectedUnit] || 0;
      dispatch({ 
        type: 'UPDATE_MASTERY', 
        unitId: selectedUnit, 
        score: Math.min(100, currentMastery + 15) // increment mastery
      });
    }
  };

  if (!selectedUnit) return null;

  const unit = studyData.find(u => u.id === selectedUnit);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in h-full">
      <div className="w-full flex items-center justify-between mb-8 max-w-[540px]">
        <button onClick={onBack} className="p-2 hover:bg-[#1a1a1a] rounded-sm transition-colors text-[#666666] hover:text-white">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-[12px] text-[#666666] uppercase tracking-[0.15em]">
          {unit?.title}
        </div>
        <div className="text-[10px] font-mono text-[#444444]">
          {queue.length} REMAINING
        </div>
      </div>

      {unit?.subunits && unit.subunits.length > 0 && (
        <div className="w-full max-w-[540px] mb-6 select-none animate-in slide-in-from-top-1">
          <div className="text-[9px] text-[#555555] uppercase tracking-widest mb-2 font-bold font-mono">Scope Focus</div>
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#121212] border border-[#222222] rounded-sm">
            <button
              id="sub-all-btn"
              onClick={() => setSelectedSubunitId('all')}
              className={clsx(
                "px-3 py-1.5 text-[9px] uppercase tracking-wider rounded-sm cursor-pointer transition-all",
                selectedSubunitId === 'all'
                  ? "bg-[#1f1f1f] border border-[#333333] text-white"
                  : "text-[#666666] hover:text-[#999999]"
              )}
            >
              Full Unit
            </button>
            {unit.subunits.map(sub => (
              <button
                key={sub.id}
                id={`sub-${sub.id}-btn`}
                onClick={() => setSelectedSubunitId(sub.id)}
                className={clsx(
                  "px-3 py-1.5 text-[9px] uppercase tracking-wider rounded-sm cursor-pointer transition-all",
                  selectedSubunitId === sub.id
                    ? "bg-[#1a1a1a] border border-[#a88a5f]/40 text-[#a88a5f]"
                    : "text-[#666666] hover:text-[#999999]"
                )}
              >
                {sub.title.split(': ')[0] || sub.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {isFinished ? (
        <div className="w-full max-w-[540px] aspect-[1.6/1] bg-[#121212] border border-[#2a2a2a] shadow-2xl p-12 flex flex-col items-center justify-center text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-6 text-[#a88a5f]" />
          <h2 className="text-2xl font-light text-white tracking-tight font-serif italic mb-4">Session Complete!</h2>
          <p className="text-[#888888] leading-relaxed text-sm mb-8">You've successfully reviewed all cards in this unit.</p>
          <button 
            onClick={onBack}
            className="py-3 px-8 text-[11px] border border-[#a88a5f]/30 text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all uppercase tracking-tighter"
          >
            Return to Dashboard
          </button>
        </div>
      ) : currentCard ? (
        <div className="w-full max-w-[540px] flex flex-col items-center relative">
          <div 
            className="w-full aspect-[1.6/1] cursor-pointer perspective-1000 mb-8"
            onClick={() => !isFlipped && setIsFlipped(true)}
          >
            <div className={`w-full h-full transition-transform duration-500 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              {/* Front */}
              <div className="absolute w-full h-full backface-hidden bg-[#121212] border border-[#2a2a2a] shadow-2xl p-12 flex flex-col">
                <div className="absolute top-6 left-6 text-[10px] text-[#444444] font-mono tracking-widest">
                  ID: {currentCard.id.split('-').pop()}
                </div>
                <div className="flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-3xl mb-4 font-light text-white tracking-tight font-serif">
                    {currentCard.front}
                  </h3>
                  <p className="text-[11px] text-[#555555] uppercase tracking-widest mt-8">Click to reveal</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#121212] border border-[#a88a5f]/30 shadow-2xl p-12 flex flex-col">
                <div className="flex-1 flex flex-col justify-center text-center overflow-auto">
                  <p className="text-[#e0e0e0] leading-relaxed text-sm">
                    {currentCard.back}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`w-full pt-4 border-t border-[#1a1a1a] transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <p className="text-[11px] text-[#555555] uppercase tracking-widest mb-4 text-center">Self-Assessment (Spaced Repetition)</p>
            <div className="flex justify-between gap-3">
              <button 
                onClick={() => handleRate('hard')}
                className="flex-1 py-3 text-[11px] border border-[#333333] hover:bg-white hover:text-black text-[#999999] transition-all uppercase tracking-tighter"
              >
                Hard <span className="opacity-40 ml-1">Soon</span>
              </button>
              <button 
                onClick={() => handleRate('good')}
                className="flex-1 py-3 text-[11px] border border-[#333333] hover:bg-white hover:text-black text-[#999999] transition-all uppercase tracking-tighter"
              >
                Good <span className="opacity-40 ml-1">Later</span>
              </button>
              <button 
                onClick={() => handleRate('easy')}
                className="flex-1 py-3 text-[11px] border border-[#a88a5f]/30 text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all uppercase tracking-tighter"
              >
                Easy <span className="opacity-40 ml-1">Done</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
