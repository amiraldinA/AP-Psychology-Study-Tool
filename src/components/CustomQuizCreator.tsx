import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, CheckCircle2, XCircle, Info, Trash2, ClipboardList, Dumbbell, Sparkles, AlertCircle } from 'lucide-react';
import { studyData } from '../data';
import { clsx } from 'clsx';
import confetti from 'canvas-confetti';

type CustomQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

type CustomQuiz = {
  id: string;
  title: string;
  description: string;
  questions: CustomQuestion[];
  highScore?: number;
  createdAt: string;
};

export const CustomQuizCreator = ({ onBack }: { onBack: () => void }) => {
  const [quizzes, setQuizzes] = useState<CustomQuiz[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState<CustomQuiz | null>(null);
  const [activeQuizState, setActiveQuizState] = useState<{
    currentIdx: number;
    selectedAnswer: string | null;
    userScores: Record<string, boolean>; // question ID -> correct
    isFinished: boolean;
  } | null>(null);

  // New Quiz Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  
  // Custom Question Builder Form State
  const [questionsList, setQuestionsList] = useState<CustomQuestion[]>([]);
  const [qText, setQText] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctOpt, setCorrectOpt] = useState('A');
  const [explanation, setExplanation] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Choose to pull questions from existing Units
  const [selectedUnitsToPull, setSelectedUnitsToPull] = useState<string[]>([]);

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('psych_study_custom_quizzes');
    if (saved) {
      try {
        setQuizzes(JSON.parse(saved));
      } catch (e) {
        // Fallback
      }
    } else {
      // Default initial custom quiz as an illustrative example
      const demo: CustomQuiz = {
        id: "demo-custom-1",
        title: "Mixed Perspectives & Biopsychology Focus",
        description: "A customized quiz targeting modern theoretical perspectives and nervous system pathways.",
        createdAt: new Date().toLocaleDateString(),
        highScore: undefined,
        questions: [
          {
            id: "custom-demo-q1",
            question: "To understand why people are afraid of heights, Dr. Higgins looks at how our early human ancestors avoided high cliffs to stay alive. This points to which perspective?",
            options: [
              "Evolutionary Perspective",
              "Biopsychosocial Perspective",
              "Behavioral Perspective",
              "Cognitive Perspective"
            ],
            correctAnswer: "Evolutionary Perspective",
            explanation: "The evolutionary perspective applies Darwinian natural selection theories to human behaviors, assuming they served survival purposes in our evolutionary history."
          },
          {
            id: "custom-demo-q2",
            question: "Which brain landmark is most directly key to consolidating new experiences into durable, long-term memory storage?",
            options: [
              "Amygdala",
              "Hippocampus",
              "Pons",
              "Hypothalamus"
            ],
            correctAnswer: "Hippocampus",
            explanation: "The hippocampus is a critical limbic system component dedicated to processing and cementing explicit memories."
          }
        ]
      };
      setQuizzes([demo]);
      localStorage.setItem('psych_study_custom_quizzes', JSON.stringify([demo]));
    }
  }, []);

  const saveQuizzes = (updated: CustomQuiz[]) => {
    setQuizzes(updated);
    localStorage.setItem('psych_study_custom_quizzes', JSON.stringify(updated));
  };

  // Toggle selection of standard units to pull questions from
  const handleToggleUnitPull = (unitId: string) => {
    if (selectedUnitsToPull.includes(unitId)) {
      setSelectedUnitsToPull(selectedUnitsToPull.filter(id => id !== unitId));
    } else {
      setSelectedUnitsToPull([...selectedUnitsToPull, unitId]);
    }
  };

  // Add individual written question to the build queue
  const handleAddQuestionToDraft = () => {
    if (!qText.trim()) {
      setErrorMsg("Question text is required.");
      return;
    }
    if (!optA.trim() || !optB.trim() || !optC.trim() || !optD.trim()) {
      setErrorMsg("All 4 option fields are required.");
      return;
    }

    const options = [optA.trim(), optB.trim(), optC.trim(), optD.trim()];
    let correctAnswer = options[0];
    if (correctOpt === 'B') correctAnswer = options[1];
    if (correctOpt === 'C') correctAnswer = options[2];
    if (correctOpt === 'D') correctAnswer = options[3];

    const newQ: CustomQuestion = {
      id: `draft-q-${Date.now()}-${questionsList.length}`,
      question: qText.trim(),
      options,
      correctAnswer,
      explanation: explanation.trim() || "Bespoke custom question created by user."
    };

    setQuestionsList([...questionsList, newQ]);
    
    // Clear question form
    setQText('');
    setOptA('');
    setOptB('');
    setOptC('');
    setOptD('');
    setCorrectOpt('A');
    setExplanation('');
    setErrorMsg('');
  };

  // Save the full custom quiz draft
  const handleSaveQuizDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      setErrorMsg("Quiz Title is required.");
      return;
    }

    // Compile pulled questions
    const pulledQuestions: CustomQuestion[] = [];
    selectedUnitsToPull.forEach(unitId => {
      const parentUnit = studyData.find(u => u.id === unitId);
      if (parentUnit) {
        parentUnit.quiz.forEach((q, idx) => {
          pulledQuestions.push({
            id: `pulled-${unitId}-${idx}-${Date.now()}`,
            question: q.question,
            options: [...q.options],
            correctAnswer: q.correctAnswer,
            explanation: q.explanation
          });
        });
      }
    });

    const finalQuestionsList = [...questionsList, ...pulledQuestions];

    if (finalQuestionsList.length === 0) {
      setErrorMsg("You must add at least 1 written question or select 1 standard unit to pull questions from.");
      return;
    }

    const compiled: CustomQuiz = {
      id: `custom-quiz-${Date.now()}`,
      title: newTitle.trim(),
      description: newDesc.trim() || `Custom consolidated review quiz compiled on ${new Date().toLocaleDateString()}`,
      questions: finalQuestionsList,
      createdAt: new Date().toLocaleDateString()
    };

    const nextQuizzes = [compiled, ...quizzes];
    saveQuizzes(nextQuizzes);

    // Reset Creation State
    setIsCreating(false);
    setNewTitle('');
    setNewDesc('');
    setQuestionsList([]);
    setSelectedUnitsToPull([]);
    setErrorMsg('');
  };

  // Delete a Saved Custom Quiz
  const handleDeleteQuiz = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this custom quiz? This cannot be undone.")) {
      const filtered = quizzes.filter(q => q.id !== id);
      saveQuizzes(filtered);
    }
  };

  // Begin taking a Custom Quiz
  const handleStartPlay = (quiz: CustomQuiz) => {
    setActiveQuiz(quiz);
    setActiveQuizState({
      currentIdx: 0,
      selectedAnswer: null,
      userScores: {},
      isFinished: false
    });
  };

  // Select option in active custom quiz playthrough
  const handleSelectAnswerPlay = (option: string) => {
    if (!activeQuiz || !activeQuizState || activeQuizState.selectedAnswer) return;
    
    const currQ = activeQuiz.questions[activeQuizState.currentIdx];
    const isCorrect = option === currQ.correctAnswer;

    setActiveQuizState({
      ...activeQuizState,
      selectedAnswer: option,
      userScores: {
        ...activeQuizState.userScores,
        [currQ.id]: isCorrect
      }
    });
  };

  // Advance to next question in play active session
  const handleNextPlayIdx = () => {
    if (!activeQuiz || !activeQuizState) return;

    if (activeQuizState.currentIdx < activeQuiz.questions.length - 1) {
      setActiveQuizState({
        ...activeQuizState,
        currentIdx: activeQuizState.currentIdx + 1,
        selectedAnswer: null
      });
    } else {
      // Quiz finished! Calculate accuracy
      const correctCount = Object.values(activeQuizState.userScores).filter(Boolean).length;
      const pct = Math.round((correctCount / activeQuiz.questions.length) * 100);

      // Trigger Confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.5 }
      });

      // Update High Score if higher
      const nextQuizzes = quizzes.map(q => {
        if (q.id === activeQuiz.id) {
          return {
            ...q,
            highScore: Math.max(q.highScore || 0, pct)
          };
        }
        return q;
      });
      saveQuizzes(nextQuizzes);

      setActiveQuizState({
        ...activeQuizState,
        isFinished: true
      });
    }
  };

  // Go back to Custom Quizzes index from active playthrough or creator draft
  const handleQuitActiveSession = () => {
    setActiveQuiz(null);
    setActiveQuizState(null);
  };

  // RENDER: Active Quiz Playthrough
  if (activeQuiz && activeQuizState) {
    const { currentIdx, selectedAnswer, userScores, isFinished } = activeQuizState;
    const questions = activeQuiz.questions;
    
    if (isFinished) {
      const correctCount = Object.values(userScores).filter(Boolean).length;
      const pct = Math.round((correctCount / questions.length) * 100);

      return (
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in h-full">
          <div className="w-full max-w-[620px] bg-[#121212] border border-[#222222] shadow-2xl p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#1a1a1a] border border-[#222222] flex items-center justify-center rounded-full mb-6">
              <CheckCircle2 className="w-8 h-8 text-[#a88a5f]" />
            </div>
            <h2 className="text-3xl font-light text-white tracking-tight font-serif italic mb-2">Custom Quiz Complete!</h2>
            <p className="text-[#666666] text-[10px] uppercase tracking-[0.2em] mb-8">{activeQuiz.title}</p>
            
            <div className="mb-10 text-center">
              <div className="text-6xl font-light text-white font-mono mb-2">
                {pct}<span className="text-2xl text-[#666666]">%</span>
              </div>
              <p className="text-[#888888] text-sm">
                You correctly highlighted <strong>{correctCount}</strong> out of <strong>{questions.length}</strong> customized questions.
              </p>
            </div>

            <button 
              onClick={handleQuitActiveSession}
              className="py-3.5 px-10 text-[11px] border border-[#a88a5f]/30 text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all uppercase tracking-widest font-semibold"
            >
              Back to Custom Quizzes
            </button>
          </div>
        </div>
      );
    }

    const currentQuestion = questions[currentIdx];

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in h-full">
        {/* Play Top bar */}
        <div className="w-full max-w-[620px] flex items-center justify-between mb-8">
          <button onClick={handleQuitActiveSession} className="p-2 hover:bg-[#1a1a1a] rounded-sm transition-colors text-[#666666] hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-[12px] text-[#666666] uppercase tracking-[0.15em] font-serif italic">
            {activeQuiz.title}
          </div>
          <div className="text-[10px] font-mono text-[#555555] tracking-widest">
            QUESTION {currentIdx + 1} OF {questions.length}
          </div>
        </div>

        {/* Main Quiz Card */}
        <div className="w-full max-w-[620px] bg-[#121212] border border-[#222222] p-8 md:p-10 shadow-2xl flex flex-col">
          <h3 className="text-xl leading-relaxed font-light text-white mb-8">
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const hasSubmitted = selectedAnswer !== null;

              return (
                <button
                  key={idx}
                  disabled={hasSubmitted}
                  onClick={() => handleSelectAnswerPlay(option)}
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

          {/* Explanation Feedback */}
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

          {/* Next play button */}
          {selectedAnswer && (
            <div className="mt-8 border-t border-[#1a1a1a] pt-6 flex justify-end">
              <button
                onClick={handleNextPlayIdx}
                className="py-2.5 px-6 text-[10px] border border-[#a88a5f]/30 text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all uppercase tracking-widest font-semibold"
              >
                {currentIdx < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // RENDER: Create Quiz Draft Editor
  if (isCreating) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500 w-full max-w-4xl mx-auto pb-12 select-none">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCreating(false)} 
            className="p-2 border border-[#222222] hover:bg-[#1a1a1a] rounded-sm transition-colors text-[#888888] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-2xl font-light text-white font-serif italic mb-1">Create Premium Custom Quiz</h1>
            <p className="text-[#666666] text-xs">Configure quiz details, compile questions from standard units, or compose your own.</p>
          </div>
        </div>

        {errorMsg && (
          <div className="p-4 bg-red-950/20 border border-red-900/40 text-red-400 text-xs rounded-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 animate-bounce" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSaveQuizDraft} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Metadata & Compiler */}
          <div className="space-y-6 md:col-span-1">
            <div className="bg-[#121212] border border-[#222222] p-6 space-y-4">
              <h3 className="text-[11px] uppercase tracking-wider text-white font-bold border-b border-[#222222] pb-2">1. Quiz Info</h3>
              
              <div>
                <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1">Quiz Title</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Brain Structures & Sensation"
                  className="w-full bg-[#151515] border border-[#2d2d2d] focus:border-[#a88a5f] rounded-sm px-3 py-2 text-xs text-white placeholder-[#444444] transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1 font-sans">Short Description</label>
                <textarea 
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="A customized study session..."
                  rows={2}
                  className="w-full bg-[#151515] border border-[#2d2d2d] focus:border-[#a88a5f] rounded-sm p-3 text-xs text-white placeholder-[#444444] transition-all outline-none resize-none"
                />
              </div>
            </div>

            {/* Smart compiler checklist */}
            <div className="bg-[#121212] border border-[#222222] p-6 space-y-4">
              <h3 className="text-[11px] uppercase tracking-wider text-white font-bold border-b border-[#222222] pb-2">2. Smart Question Compiler</h3>
              <p className="text-[10px] text-[#666666] leading-relaxed">Instantly compile all quiz questions from selected standard textbook units into this quiz:</p>
              
              <div className="space-y-2 max-h-[220px] overflow-y-auto custom-scrollbar pr-1">
                {studyData.map(unit => {
                  const isPulled = selectedUnitsToPull.includes(unit.id);
                  return (
                    <button
                      type="button"
                      key={unit.id}
                      onClick={() => handleToggleUnitPull(unit.id)}
                      className={clsx(
                        "w-full text-left p-3 border rounded-sm transition-all text-xs flex items-center justify-between cursor-pointer",
                        isPulled 
                          ? "bg-[#181a14] border-[#a88a5f]/30 text-[#a88a5f]" 
                          : "bg-[#161616] border-[#222222] text-[#888888] hover:border-[#333333] hover:text-white"
                      )}
                    >
                      <span className="truncate leading-none">{unit.title.split(': ')[0] || unit.title}</span>
                      <span className="text-[9px] font-mono text-[#555555] ml-2">+{unit.quiz.length} Qs</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Custom Compose Form */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#121212] border border-[#222222] p-6 space-y-4">
              <h3 className="text-[11px] uppercase tracking-wider text-white font-bold border-b border-[#222222] pb-2">3. Compose Custom Questions (Optional)</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1">Question Statement</label>
                  <input 
                    type="text" 
                    value={qText}
                    onChange={(e) => setQText(e.target.value)}
                    placeholder="e.g. Which region of the brainstem triggers the activation of facial expressions?"
                    className="w-full bg-[#151515] border border-[#2d2d2d] focus:border-[#a88a5f] rounded-sm px-3 py-2 text-xs text-white placeholder-[#444444] transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1">Option A</label>
                    <input 
                      type="text" 
                      value={optA}
                      onChange={(e) => setOptA(e.target.value)}
                      placeholder="e.g. Pons"
                      className="w-full bg-[#151515] border border-[#2d2d2d] rounded-sm px-3 py-2 text-xs text-white placeholder-[#444444] transition-all outline-none focus:border-[#a88a5f]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1">Option B</label>
                    <input 
                      type="text" 
                      value={optB}
                      onChange={(e) => setOptB(e.target.value)}
                      placeholder="e.g. Medulla"
                      className="w-full bg-[#151515] border border-[#2d2d2d] rounded-sm px-3 py-2 text-xs text-white placeholder-[#444444] transition-all outline-none focus:border-[#a88a5f]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1">Option C</label>
                    <input 
                      type="text" 
                      value={optC}
                      onChange={(e) => setOptC(e.target.value)}
                      placeholder="e.g. Cerebellum"
                      className="w-full bg-[#151515] border border-[#2d2d2d] rounded-sm px-3 py-2 text-xs text-white placeholder-[#444444] transition-all outline-none focus:border-[#a88a5f]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1">Option D</label>
                    <input 
                      type="text" 
                      value={optD}
                      onChange={(e) => setOptD(e.target.value)}
                      placeholder="e.g. Hypothalamus"
                      className="w-full bg-[#151515] border border-[#2d2d2d] rounded-sm px-3 py-2 text-xs text-white placeholder-[#444444] transition-all outline-none focus:border-[#a88a5f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div className="sm:col-span-1">
                    <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1">Correct Option</label>
                    <select
                      value={correctOpt}
                      onChange={(e) => setCorrectOpt(e.target.value)}
                      className="w-full bg-[#151515] border border-[#2d2d2d] rounded-sm px-3 py-2 text-xs text-white transition-all outline-none focus:border-[#a88a5f]"
                    >
                      <option value="A">Option A</option>
                      <option value="B">Option B</option>
                      <option value="C">Option C</option>
                      <option value="D">Option D</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] text-[#666666] uppercase tracking-widest mb-1 font-sans">Diagnostic Explanation</label>
                    <input 
                      type="text" 
                      value={explanation}
                      onChange={(e) => setExplanation(e.target.value)}
                      placeholder="Explain why this choice is anatomically correct..."
                      className="w-full bg-[#151515] border border-[#2d2d2d] rounded-sm px-3 py-2 text-xs text-white placeholder-[#444444] transition-all outline-none focus:border-[#a88a5f]"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={handleAddQuestionToDraft}
                    className="py-2.5 px-6 border border-[#a88a5f] text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add Question to Draft
                  </button>
                </div>
              </div>
            </div>

            {/* List of custom questions added so far */}
            {questionsList.length > 0 && (
              <div className="bg-[#121212] border border-[#222222] p-6 space-y-4">
                <h3 className="text-[11px] uppercase tracking-wider text-[#666666] font-bold">Composed Questions Draft Queue ({questionsList.length})</h3>
                <div className="max-h-[180px] overflow-y-auto custom-scrollbar space-y-2 pr-1">
                  {questionsList.map((q, idx) => (
                    <div key={q.id} className="p-3 bg-[#161616] border border-[#222222] text-xs flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[#a88a5f] font-mono mr-2 font-semibold">#{idx+1}</span>
                        <span className="text-white font-light">{q.question}</span>
                        <div className="text-[9px] text-[#666666] mt-1 font-mono uppercase tracking-tight">Correct: {q.correctAnswer}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setQuestionsList(questionsList.filter(item => item.id !== q.id))}
                        className="text-[#666666] hover:text-red-400 p-1 rounded-sm"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="py-3 px-8 text-[11px] border border-[#333333] hover:bg-neutral-800 text-[#999999] transition-all uppercase tracking-widest cursor-pointer"
              >
                Cancel Draft
              </button>
              <button
                type="submit"
                className="py-3 px-10 text-[11px] bg-white text-black hover:bg-neutral-200 transition-all font-bold uppercase tracking-widest cursor-pointer"
              >
                Compile & Save Quiz
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  // RENDER: Custom Quizzes Hub (Default landing)
  return (
    <div className="space-y-12 animate-in fade-in duration-500 w-full max-w-5xl mx-auto pb-12 select-none">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222222] pb-6">
        <div>
          <h1 className="text-3xl font-light text-white mb-2 font-serif italic flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-[#a88a5f]" />
            Custom Quiz Practice Hub
          </h1>
          <p className="text-[#888888] text-xs max-w-lg">Compose customized assessments by combining standard exam topics or scripting original flash diagnostics of your own making.</p>
        </div>

        <button
          onClick={() => setIsCreating(true)}
          className="py-2.5 px-6 bg-[#a88a5f] text-black hover:bg-[#c0a67a] active:bg-[#a88a5f] text-[10px] uppercase tracking-widest font-bold flex items-center gap-1.5 transition-colors self-start cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Compose New Quiz
        </button>
      </div>

      {quizzes.length === 0 ? (
        <div className="border border-dashed border-[#2d2d2d] bg-[#111111]/40 p-16 text-center">
          <ClipboardList className="w-12 h-12 text-[#444444] mx-auto mb-4" />
          <h3 className="text-lg font-light text-white font-serif mb-1 italic">No Custom Quizzes Composed Yet</h3>
          <p className="text-[#666666] text-xs mb-6">Create original tests, mix study units, or practice on customized assessment queues.</p>
          <button
            onClick={() => setIsCreating(true)}
            className="py-2 px-6 border border-[#a88a5f]/40 text-[#a88a5f] hover:bg-[#a88a5f] hover:text-black transition-all text-[10px] uppercase tracking-widest font-semibold"
          >
            Create Your First Quiz
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizzes.map(quiz => {
            const hasPulledQs = quiz.questions.some(q => q.id.startsWith('pulled-'));

            return (
              <div 
                key={quiz.id}
                className="bg-[#121212] border border-[#222222] hover:border-[#333333] transition-all p-6 flex flex-col group relative select-none"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => handleDeleteQuiz(quiz.id, e)}
                    className="p-1 px-2 text-[#444444] hover:text-red-400 border border-[#222222] bg-[#151515] hover:bg-neutral-900 transition-colors rounded-sm"
                    title="Delete Custom Quiz"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2 text-[9px] text-[#666666] tracking-widest uppercase font-mono">
                    <span>{quiz.createdAt}</span>
                    <span>•</span>
                    <span className="text-[#a88a5f] font-semibold">{quiz.questions.length} QUESTIONS</span>
                  </div>
                  
                  <h3 className="text-lg font-medium text-white mb-2 line-clamp-1 group-hover:text-[#a88a5f] transition-colors">{quiz.title}</h3>
                  <p className="text-xs text-[#888888] line-clamp-2 md:line-clamp-3 leading-relaxed font-sans">{quiz.description}</p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#1a1a1a] flex items-center justify-between">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-[#555555] mb-1 font-mono">High Score</div>
                    <div className="text-sm font-semibold font-mono text-white">
                      {quiz.highScore !== undefined ? `${quiz.highScore}%` : '—'}
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartPlay(quiz)}
                    className="py-2 px-5 text-[10px] bg-white hover:bg-neutral-200 text-black transition-colors uppercase tracking-widest font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Dumbbell className="w-3.5 h-3.5" />
                    Solve
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
