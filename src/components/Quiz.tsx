import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { studyData } from '../data';
import { ArrowLeft, CheckCircle2, XCircle, Info } from 'lucide-react';
import confetti from 'canvas-confetti';
import { clsx } from 'clsx';

type Props = {
  unitId?: string;
  onBack: () => void;
};

export const QuizViewer = ({ unitId, onBack }: Props) => {
  const { dispatch, state } = useStore();
  const selectedUnit = unitId || studyData[0].id;
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedSubunitId, setSelectedSubunitId] = useState<string | 'all'>('all');

  // Reset quiz progress state when user switches active unit or subunit
  useEffect(() => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  }, [unitId, selectedSubunitId]);

  const unit = studyData.find(u => u.id === selectedUnit);
  if (!unit) return null;

  const questions = (() => {
    if (selectedSubunitId !== 'all' && unit.subunits) {
      const sub = unit.subunits.find(s => s.id === selectedSubunitId);
      return sub ? sub.quiz : unit.quiz;
    }
    return unit.quiz;
  })();

  const currentQuestion = questions[currentIdx];

  const handleSelect = (option: string) => {
    if (selectedAnswer) return; // Prevent changing answer once submitted
    setSelectedAnswer(option);
    
    // Evaluate correctness and update stats
    const isCorrect = option === currentQuestion.correctAnswer;
    dispatch({ type: 'RECORD_QUIZ', questionId: currentQuestion.id, correct: isCorrect });
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.5 }
      });
      // Improve unit mastery on complete
      const currentMastery = state.unitMastery[selectedUnit] || 0;
      dispatch({ 
        type: 'UPDATE_MASTERY', 
        unitId: selectedUnit, 
        score: Math.min(100, currentMastery + 25) 
      });
    }
  };

  if (isFinished) {
    const correctCount = questions.filter(q => state.quizScores[q.id]).length;
    const percentage = Math.round((correctCount / questions.length) * 100);

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in h-full">
        <div className="w-full max-w-[620px] bg-[#121212] border border-[#222222] shadow-2xl p-12 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-[#1a1a1a] border border-[#222222] flex items-center justify-center rounded-full mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#a88a5f]" />
          </div>
          <h2 className="text-3xl font-light text-white tracking-tight font-serif italic mb-2">Quiz Complete!</h2>
          <p className="text-[#666666] text-[10px] uppercase tracking-[0.2em] mb-8">{unit.title}</p>
          
          <div className="mb-10 text-center">
            <div className="text-6xl font-light text-white font-mono mb-2">
              {percentage}<span className="text-2xl text-[#666666]">%</span>
            </div>
            <p className="text-[#888888] text-sm">
              You correctly highlighted <strong>{correctCount}</strong> out of <strong>{questions.length}</strong> core questions.
            </p>
          </div>

          <button 
            onClick={onBack}
            className="py-3.5 px-10 text-[11px] border border-[#a88a5f]/30 text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all uppercase tracking-widest font-semibold"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in h-full">
      {/* Top Session Progress Bar */}
      <div className="w-full max-w-[620px] flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 hover:bg-[#1a1a1a] rounded-sm transition-colors text-[#666666] hover:text-white">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="text-[12px] text-[#666666] uppercase tracking-[0.15em] font-serif italic">
          {unit.title.split(': ')[0] || "Quiz Practice"}
        </div>
        <div className="text-[10px] font-mono text-[#555555] tracking-widest">
          QUESTION {questions.length > 0 ? (currentIdx + 1) : 0} OF {questions.length}
        </div>
      </div>

      {unit?.subunits && unit.subunits.length > 0 && (
        <div className="w-full max-w-[620px] mb-6 select-none animate-in slide-in-from-top-1">
          <div className="text-[9px] text-[#555555] uppercase tracking-widest mb-2 font-bold font-mono">Scope Focus</div>
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#121212] border border-[#222222] rounded-sm">
            <button
              id="sub-quiz-all-btn"
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
                id={`sub-quiz-${sub.id}-btn`}
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

      {questions.length === 0 ? (
        <div className="w-full max-w-[620px] bg-[#121212] border border-[#222222] p-8 text-center">
          <p className="text-[#888888] text-sm">No quiz questions available for this focus area.</p>
        </div>
      ) : (
        /* Main Quiz Card */
        <div className="w-full max-w-[620px] bg-[#121212] border border-[#222222] p-8 md:p-10 shadow-2xl flex flex-col">
          {/* Question sentence */}
          <h3 className="text-xl leading-relaxed font-light text-white mb-8">
            {currentQuestion.question}
          </h3>

        {/* Options list */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentQuestion.correctAnswer;
            const hasSubmitted = selectedAnswer !== null;

            return (
              <button
                key={idx}
                disabled={hasSubmitted}
                onClick={() => handleSelect(option)}
                className={clsx(
                  "w-full text-left p-4.5 text-xs rounded-sm border transition-all outline-none font-sans flex items-center justify-between cursor-pointer",
                  hasSubmitted
                    ? isCorrect
                      ? "bg-[#102a1b] border-[#1f5a3a] text-[#86efac]"
                      : isSelected
                        ? "bg-[#3f1616] border-[#7f1d1d] text-[#fca5a5]"
                        : "bg-[#141414] border-[#1d1d1d] text-[#555555] opacity-40"
                    : "bg-[#151515] border-[#222222] hover:border-[#444444] text-[#b3b3b3] hover:text-white"
                )}
              >
                <span className="leading-relaxed flex-1 mr-4">{option}</span>
                {hasSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                {hasSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Diagnostic correct/incorrect feedback with explanation */}
        {selectedAnswer && (
          <div className="mt-8 p-6 bg-[#161616] border border-[#222222] rounded-sm animate-in fade-in slide-in-from-top-2 duration-350">
            <h4 className="text-[10px] uppercase tracking-[0.15em] text-[#a88a5f] font-semibold mb-2 flex items-center gap-1.5 leading-none">
              <Info className="w-3.5 h-3.5" />
              Diagnostic Explanation
            </h4>
            <p className="text-[#888888] leading-relaxed text-[12px] font-sans">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Bottom footer button */}
        {selectedAnswer && (
          <div className="mt-8 border-t border-[#1a1a1a] pt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="py-2.5 px-6 text-[10px] border border-[#a88a5f]/30 text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all uppercase tracking-widest font-semibold"
            >
              {currentIdx < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
            </button>
          </div>
        )}
      </div>
      )}
    </div>
  );
};
