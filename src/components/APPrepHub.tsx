import React, { useState, useEffect } from 'react';
import { appendixA, appendixD } from '../appendixData';
import { studyData } from '../data';
import { Clock, BookOpen, AlertCircle, FileText, CheckCircle2, XCircle, ChevronRight, ChevronLeft, ShieldAlert, Award } from 'lucide-react';
import { clsx } from 'clsx';
import { useStore } from '../store';

type Props = {
  onBack: () => void;
};

export const APPrepHub = ({ onBack }: Props) => {
  const { state, dispatch } = useStore();
  const [activeTab, setActiveTab] = useState<'practice-exam' | 'dbq' | 'cyu'>('practice-exam');

  // Tab 1: Practice Exam State
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(70 * 60); // 70 minutes timed
  const [currentExamIndex, setCurrentExamIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  // Tab 2: DBQ State
  const [selectedDbqId, setSelectedDbqId] = useState<string>(appendixD[0]?.id || '');
  const [revealScoring, setRevealScoring] = useState<Record<string, boolean>>({});

  // Tab 3: CYU State
  const [selectedUnitId, setSelectedUnitId] = useState<string>('unit-1');
  const [selectedSubunitId, setSelectedSubunitId] = useState<string>('');
  const [cyuIndex, setCyuIndex] = useState(0);
  const [cyuRevealed, setCyuRevealed] = useState(false);

  // Timer effect for Practice Exam
  useEffect(() => {
    if (examStarted && !examFinished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setExamFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [examStarted, examFinished, timeLeft]);

  // Handle selected Unit in CYU tab to automatically select the first Subunit
  useEffect(() => {
    const unit = studyData.find(u => u.id === selectedUnitId);
    if (unit && unit.subunits && unit.subunits.length > 0) {
      setSelectedSubunitId(unit.subunits[0].id);
      setCyuIndex(0);
      setCyuRevealed(false);
    } else {
      setSelectedSubunitId('');
    }
  }, [selectedUnitId]);

  const activeUnit = studyData.find(u => u.id === selectedUnitId);
  const activeSubunit = activeUnit?.subunits?.find(s => s.id === selectedSubunitId);
  const cyuQuestions = activeSubunit?.cyu || [];

  const handleStartExam = () => {
    setExamStarted(true);
    setExamFinished(false);
    setTimeLeft(70 * 60);
    setUserAnswers({});
    setCurrentExamIndex(0);
    setShowExplanation(false);
  };

  const handleFinishExam = () => {
    setExamFinished(true);
  };

  const handleSelectAnswer = (optionIndex: number) => {
    if (examFinished) return;
    const optionLetter = ['a', 'b', 'c', 'd'][optionIndex];
    const qId = appendixA.questions[currentExamIndex].id;
    setUserAnswers(prev => ({
      ...prev,
      [qId]: optionLetter
    }));
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  // Calculate score properties
  const examQuestions = appendixA.questions;
  const attemptedCount = Object.keys(userAnswers).length;
  const correctCount = examQuestions.reduce((acc, q) => {
    return acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0);
  }, 0);
  const percentageScore = Math.round((correctCount / examQuestions.length) * 100);

  // Compute a projected AP Score (1-5 scaled) based on percentage
  let projectedAP = 1;
  if (percentageScore >= 80) projectedAP = 5;
  else if (percentageScore >= 65) projectedAP = 4;
  else if (percentageScore >= 50) projectedAP = 3;
  else if (percentageScore >= 35) projectedAP = 2;

  const currentDbq = appendixD.find(d => d.id === selectedDbqId);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12 animate-fade-in text-[#cccccc]">
      {/* Upper Hub Card */}
      <div className="bg-card border border-[#222222] p-8 md:p-10 rounded-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2 z-10">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#a88a5f] font-semibold block">Academic Prep Center</span>
          <h1 className="text-3xl md:text-4xl text-white font-light tracking-tight font-serif italic">AP® Psychology Exam Hub</h1>
          <p className="text-xs text-[#777777] max-w-xl leading-relaxed">
            Master high-stakes assessment materials directly parsed from Myers' AP Course Fourth Edition textbooks. Engage in full length timed tests, explore structured free-response questions, and solve active short-answer concepts.
          </p>
        </div>
        <button 
          onClick={onBack}
          className="px-6 py-3 border border-[#333333] hover:border-[#a88a5f] transition-all bg-[#111111] hover:bg-[#1a1a1a] text-xs uppercase tracking-widest font-semibold cursor-pointer rounded-sm"
        >
          Return to Dashboard
        </button>
      </div>

      {/* Hub Toggles */}
      <div className="flex border-b border-[#222222] text-xs uppercase font-semibold tracking-wider bg-[#111111] p-1 rounded-sm gap-1">
        <button
          onClick={() => setActiveTab('practice-exam')}
          className={clsx(
            "flex-1 py-4 text-center rounded-sm transition-all duration-200 cursor-pointer",
            activeTab === 'practice-exam'
              ? "bg-[#1f1f1f] border border-[#333333] text-[#a88a5f]"
              : "text-[#666666] hover:text-white"
          )}
        >
          Timed practice exam
        </button>
        <button
          onClick={() => setActiveTab('dbq')}
          className={clsx(
            "flex-1 py-4 text-center rounded-sm transition-all duration-200 cursor-pointer",
            activeTab === 'dbq'
              ? "bg-[#1f1f1f] border border-[#333333] text-[#a88a5f]"
              : "text-[#666666] hover:text-white"
          )}
        >
          Evidence-Based DBQs
        </button>
        <button
          onClick={() => setActiveTab('cyu')}
          className={clsx(
            "flex-1 py-4 text-center rounded-sm transition-all duration-200 cursor-pointer",
            activeTab === 'cyu'
              ? "bg-[#1f1f1f] border border-[#333333] text-[#a88a5f]"
              : "text-[#666666] hover:text-white"
          )}
        >
          CYU Short-Answers
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'practice-exam' && (
        <div className="space-y-6">
          {!examStarted ? (
            <div className="bg-card border border-[#222222] p-8 rounded-sm space-y-6 text-center max-w-xl mx-auto py-12">
              <Clock className="w-12 h-12 text-[#a88a5f] mx-auto opacity-80" />
              <div className="space-y-2">
                <h3 className="text-xl text-white font-medium font-serif italic">Complete Timed Practice Exam</h3>
                <p className="text-xs text-[#777777] leading-relaxed">
                  Evaluate your preparation. This practice assessment contains <b>{examQuestions.length}</b> multiple-choice questions parsed directly from <b>Appendix A</b>, simulating Section I of the official AP® Psychology exam.
                </p>
              </div>

              <div className="bg-[#141414] border border-[#222222] p-4 text-left rounded-sm text-xs space-y-3">
                <div className="flex justify-between border-b border-[#1f1f1f] pb-2 text-[#777777]">
                  <span>Total Questions</span>
                  <span className="text-white font-semibold font-mono">{examQuestions.length}</span>
                </div>
                <div className="flex justify-between border-b border-[#1f1f1f] pb-2 text-[#777777]">
                  <span>Allocated Time</span>
                  <span className="text-white font-semibold font-mono">70 Minutes</span>
                </div>
                <div className="flex justify-between pb-1 text-[#777777]">
                  <span>Grading Scale</span>
                  <span className="text-white font-semibold font-mono">Projected AP Score (1-5)</span>
                </div>
              </div>

              <button
                onClick={handleStartExam}
                className="w-full py-4 text-center bg-[#a88a5f] hover:bg-[#8e734d] text-black font-semibold text-xs uppercase tracking-widest transition-all rounded-sm cursor-pointer block"
              >
                Launch Timed Exam
              </button>
            </div>
          ) : examFinished ? (
            <div className="space-y-6">
              {/* Exam Score Summary Card */}
              <div className="bg-card border border-[#222222] p-8 md:p-10 rounded-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                <div className="w-32 h-32 rounded-full border-4 border-[#a88a5f]/30 flex items-center justify-center relative bg-[#141414] shrink-0">
                  <div className="text-center">
                    <span className="text-[10px] text-[#666666] tracking-wider uppercase block">Projected</span>
                    <span className="text-4xl font-serif text-white italic block leading-none">{projectedAP}</span>
                    <span className="text-[10px] text-[#a88a5f] uppercase tracking-widest block font-bold">AP Score</span>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="space-y-1">
                    <span className="text-[10px] text-[#a88a5f] uppercase tracking-wider font-semibold">Assessment Complete</span>
                    <h3 className="text-2xl font-serif italic text-white">Your Diagnostic Performance Profile</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="bg-[#141414] p-3 border border-[#222222] rounded-sm">
                      <span className="text-[#666666] block text-[9px] uppercase tracking-widest mb-1">Score Percent</span>
                      <span className="text-white text-lg font-semibold">{percentageScore}%</span>
                    </div>
                    <div className="bg-[#141414] p-3 border border-[#222222] rounded-sm">
                      <span className="text-[#666666] block text-[9px] uppercase tracking-widest mb-1">Raw Marks</span>
                      <span className="text-[#a88a5f] text-lg font-semibold">{correctCount}/{examQuestions.length}</span>
                    </div>
                    <div className="bg-[#141414] p-3 border border-[#222222] rounded-sm">
                      <span className="text-[#666666] block text-[9px] uppercase tracking-widest mb-1">Attempted</span>
                      <span className="text-white text-lg font-semibold">{attemptedCount}/{examQuestions.length}</span>
                    </div>
                    <div className="bg-[#141414] p-3 border border-[#222222] rounded-sm">
                      <span className="text-[#666666] block text-[9px] uppercase tracking-widest mb-1">Elapsed Time</span>
                      <span className="text-white text-lg font-semibold">{formatTime(70 * 60 - timeLeft)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={handleStartExam}
                      className="px-6 py-3 bg-[#a88a5f] hover:bg-[#8e734d] text-black font-semibold text-xs uppercase tracking-widest rounded-sm transition-all text-center cursor-pointer"
                    >
                      Retry Assessment
                    </button>
                    <button
                      onClick={() => setExamStarted(false)}
                      className="px-6 py-3 border border-[#333333] hover:border-white text-white font-semibold text-xs uppercase tracking-widest rounded-sm transition-all text-center cursor-pointer bg-transparent"
                    >
                      Exit practice Mode
                    </button>
                  </div>
                </div>
              </div>

              {/* List of reviewed questions with correct/incorrect markers and solutions */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider pb-2 border-b border-[#222222]">Detailed Item Review</h4>
                {examQuestions.map((q, idx) => {
                  const uAns = userAnswers[q.id];
                  const isCorrect = uAns === q.correctAnswer;

                  return (
                    <div key={q.id} className="bg-card border border-[#222222] p-6 rounded-sm space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <span className="text-[10px] font-mono text-[#555555]">Question {idx + 1} of {examQuestions.length}</span>
                          <p className="text-white font-medium text-sm leading-relaxed">{q.question}</p>
                        </div>
                        {uAns ? (
                          isCorrect ? (
                            <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono uppercase bg-emerald-950/20 px-2 py-1 border border-emerald-500/20 rounded-sm">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 text-[10px] text-rose-400 font-mono uppercase bg-rose-950/20 px-2 py-1 border border-rose-500/20 rounded-sm">
                              <XCircle className="w-3.5 h-3.5" /> Incorrect
                            </span>
                          )
                        ) : (
                          <span className="text-[10px] text-amber-400 font-mono uppercase bg-amber-950/20 px-2 py-1 border border-amber-500/20 rounded-sm">
                            Skipped
                          </span>
                        )}
                      </div>

                      {/* Displaying Options */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs">
                        {q.options.map((opt, oIdx) => {
                          const optionLetter = ['a', 'b', 'c', 'd'][oIdx];
                          const isUserSelected = uAns === optionLetter;
                          const isCorrectOpt = q.correctAnswer === optionLetter;

                          return (
                            <div 
                              key={oIdx} 
                              className={clsx(
                                "p-3 border rounded-sm flex items-center gap-3",
                                isCorrectOpt 
                                  ? "bg-emerald-950/10 border-emerald-500/30 text-white" 
                                  : isUserSelected 
                                    ? "bg-rose-950/10 border-rose-500/30 text-white" 
                                    : "bg-[#131313] border-[#222222] text-[#888888]"
                              )}
                            >
                              <span className="uppercase font-mono font-bold">{optionLetter}.</span>
                              <span>{opt}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation Block */}
                      <div className="bg-[#141414] border-l-2 border-[#a88a5f] p-4 text-xs leading-relaxed text-[#888888]">
                        <strong className="text-white font-medium uppercase font-mono text-[10px] tracking-wider block mb-1">AP® Course Concept Analysis:</strong>
                        {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Active Live timed Exam Mode */
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              {/* Question card container */}
              <div className="bg-card border border-[#222222] p-8 rounded-sm md:col-span-3 space-y-6">
                <div className="flex justify-between items-center text-xs pb-4 border-b border-[#222222]">
                  <span className="font-mono text-[#777777]">QUESTION {currentExamIndex + 1} OF {examQuestions.length}</span>
                  <div className="flex items-center gap-2 bg-[#1a1a1a] text-[#a88a5f] border border-[#333333] px-3 py-1.5 rounded-sm font-mono tracking-widest select-none">
                    <Clock className="w-4 h-4 cursor-none" />
                    <span>{formatTime(timeLeft)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-white text-base font-light font-serif tracking-wide leading-relaxed">
                    {examQuestions[currentExamIndex].question}
                  </p>
                </div>

                {/* Option Choice Panels */}
                <div className="space-y-3 pt-4">
                  {examQuestions[currentExamIndex].options.map((opt, idx) => {
                    const letters = ['a', 'b', 'c', 'd'];
                    const isSelected = userAnswers[examQuestions[currentExamIndex].id] === letters[idx];

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(idx)}
                        className={clsx(
                          "w-full text-left p-4 rounded-sm border transition-all text-xs flex items-center gap-4 cursor-pointer",
                          isSelected 
                            ? "bg-[#1f1f1f] border-[#a88a5f] text-white" 
                            : "bg-[#141414] border-[#222222] text-[#999999] hover:bg-[#181818] hover:text-white"
                        )}
                      >
                        <span className={clsx(
                          "w-6 h-6 rounded-full border flex items-center justify-center font-mono font-bold uppercase",
                          isSelected 
                            ? "border-[#a88a5f] text-[#a88a5f] bg-[#1a1a1a]" 
                            : "border-[#333333] text-[#555555]"
                        )}>
                          {letters[idx]}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Question Navigation Footer */}
                <div className="flex justify-between items-center pt-6 border-t border-[#222222] gap-4">
                  <button
                    disabled={currentExamIndex === 0}
                    onClick={() => {
                      setCurrentExamIndex(prev => prev - 1);
                      setShowExplanation(false);
                    }}
                    className="px-4 py-2 text-xs border border-[#333333] hover:border-white disabled:opacity-30 disabled:border-[#222222] text-white transition-all rounded-sm flex items-center gap-1.5 uppercase font-semibold cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" /> Prev
                  </button>
                  <button
                    onClick={() => {
                      if (currentExamIndex < examQuestions.length - 1) {
                        setCurrentExamIndex(prev => prev + 1);
                        setShowExplanation(false);
                      } else {
                        handleFinishExam();
                      }
                    }}
                    className="px-5 py-2.5 text-xs bg-white text-black hover:bg-[#cccccc] font-semibold transition-all rounded-sm flex items-center gap-1.5 uppercase tracking-wide cursor-pointer"
                  >
                    {currentExamIndex === examQuestions.length - 1 ? 'Finish Exam' : 'Next Question'} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Side grid map index panel */}
              <div className="bg-card border border-[#222222] p-5 rounded-sm space-y-4">
                <h4 className="text-[10px] uppercase tracking-widest text-[#666666] font-bold">Exam Navigator</h4>
                <div className="grid grid-cols-5 gap-2 font-mono">
                  {examQuestions.map((q, idx) => {
                    const ans = userAnswers[q.id];
                    const isActive = currentExamIndex === idx;

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentExamIndex(idx);
                          setShowExplanation(false);
                        }}
                        className={clsx(
                          "w-full h-8 flex items-center justify-center text-xs border rounded-sm transition-all cursor-pointer",
                          isActive 
                            ? "border-[#a88a5f] bg-[#222222] text-white font-bold" 
                            : ans 
                              ? "bg-[#1f1f1f] border-[#333333] text-[#777777]" 
                              : "bg-[#121212] border-[#1d1d1d] text-[#444444] hover:text-[#777777]"
                        )}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
                
                <div className="pt-2 border-t border-[#1a1a1a]">
                  <button
                    onClick={handleFinishExam}
                    className="w-full py-2.5 text-center border border-[#852727] hover:bg-[#852727]/10 text-[#fca5a5] text-[10px] uppercase tracking-widest font-bold rounded-sm transition-all cursor-pointer"
                  >
                    Terminate & Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'dbq' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {/* Side DBQ list selecting panel */}
          <div className="bg-[#111111] border border-[#222222] p-4 rounded-sm space-y-2">
            <h4 className="text-[10px] uppercase tracking-widest text-[#666666] font-bold px-2 mb-3">Select Prompt Prompt</h4>
            {appendixD.map((dbq) => {
              const active = selectedDbqId === dbq.id;
              return (
                <button
                  key={dbq.id}
                  onClick={() => setSelectedDbqId(dbq.id)}
                  className={clsx(
                    "w-full text-left p-3.5 text-xs rounded-sm transition-colors border cursor-pointer",
                    active
                      ? "bg-[#1f1f1f] border-[#333333] text-[#a88a5f] font-semibold"
                      : "bg-[#131313] border-[#1d1d1d] text-[#888888] hover:bg-[#171717] hover:text-white"
                  )}
                >
                  {dbq.title.split(': ')[0]}
                </button>
              );
            })}
          </div>

          {/* Active DBQ display sheet */}
          <div className="bg-card border border-[#222222] p-8 md:p-10 rounded-sm md:col-span-3 space-y-8 leading-relaxed">
            {currentDbq && currentDbq.dbq ? (
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] text-[#a88a5f] uppercase tracking-wider font-semibold">Evidence-Based Question set (Section II)</span>
                  <h3 className="text-2xl text-white font-light font-serif italic mt-1">{currentDbq.title}</h3>
                </div>

                {/* Documents Column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#222222] pb-2 text-white">
                    <FileText className="w-4 h-4 text-[#a88a5f]" />
                    <h4 className="text-xs uppercase tracking-wider font-semibold">Core Analysis Sources</h4>
                  </div>
                  <div className="space-y-3">
                    {currentDbq.dbq.documents.map((doc, idx) => (
                      <div key={idx} className="bg-[#141414] p-4 text-xs border border-[#1f1f1f] rounded-sm text-[#888888] italic space-y-1">
                        <strong className="text-white font-medium not-italic block mb-1">Document {idx + 1}:</strong>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Questions / Prompts Column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-[#222222] pb-2 text-white">
                    <AlertCircle className="w-4 h-4 text-[#a88a5f]" />
                    <h4 className="text-xs uppercase tracking-wider font-semibold">Task Prompt Requirements</h4>
                  </div>
                  <div className="space-y-4">
                    {currentDbq.dbq.prompts.map((prompt, idx) => (
                      <div key={idx} className="text-sm text-white font-light leading-relaxed pl-4 border-l border-[#222222]">
                        {prompt}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scoring details reveal toggle */}
                <div className="pt-4 border-t border-[#222222] space-y-4">
                  <button
                    onClick={() => {
                      setRevealScoring(prev => ({ ...prev, [selectedDbqId]: !prev[selectedDbqId] }));
                    }}
                    className="w-full text-center py-3.5 border border-[#333333] hover:border-[#a88a5f] text-xs uppercase tracking-widest font-semibold rounded-sm transition-all bg-[#1a1a1a]"
                  >
                    {revealScoring[selectedDbqId] ? "Hide Official Rubric Guidelines" : "Reveal Scoring Rubric & Guidelines"}
                  </button>

                  {revealScoring[selectedDbqId] && (
                    <div className="bg-[#121212] border border-[#222222] p-5 text-xs text-[#888888] leading-relaxed rounded-sm space-y-3 whitespace-pre-line">
                      <strong className="text-[#a88a5f] font-semibold uppercase tracking-wider text-[10px] block">Rubric Standards:</strong>
                      {currentDbq.dbq.scoringGuidelines}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center text-xs text-[#666666] py-12">
                Unable to load AP DBQ prompt data.
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'cyu' && (
        <div className="space-y-6">
          {/* Unit selection drop rows */}
          <div className="flex flex-col md:flex-row gap-4 items-center bg-[#111111] border border-[#222222] p-4 rounded-sm text-xs select-none">
            <div className="w-full md:w-auto">
              <span className="text-[#666666] uppercase tracking-wider uppercase block text-[9px] mb-1 font-semibold leading-relaxed">Study Unit</span>
              <select
                value={selectedUnitId}
                onChange={(e) => setSelectedUnitId(e.target.value)}
                className="w-full bg-[#1b1b1b] text-white border border-[#333333] p-2.5 rounded-sm focus:outline-none"
              >
                {studyData.map(unit => (
                  <option key={unit.id} value={unit.id}>{unit.title}</option>
                ))}
              </select>
            </div>

            {/* Subunit selection row */}
            {activeUnit && activeUnit.subunits && activeUnit.subunits.length > 0 && (
              <div className="w-full flex-1">
                <span className="text-[#666666] uppercase tracking-wider uppercase block text-[9px] mb-1 font-semibold leading-relaxed">Chapter Module Subunit</span>
                <select
                  value={selectedSubunitId}
                  onChange={(e) => {
                    setSelectedSubunitId(e.target.value);
                    setCyuIndex(0);
                    setCyuRevealed(false);
                  }}
                  className="w-full bg-[#1b1b1b] text-white border border-[#333333] p-2.5 rounded-sm focus:outline-none"
                >
                  {activeUnit.subunits.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.title}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* CYU Quiz Cards UI */}
          {cyuQuestions.length > 0 ? (
            <div className="space-y-6">
              <div className="bg-card border border-[#222222] p-8 md:p-10 rounded-sm relative overflow-hidden flex flex-col justify-between min-h-[350px]">
                {/* Header indicators */}
                <div className="flex justify-between items-center text-[10px] font-mono text-[#666666] pb-4 border-b border-[#222222]">
                  <span>CONCEPT RETRIEVAL {cyuIndex + 1} OF {cyuQuestions.length}</span>
                  <span className="uppercase tracking-widest bg-[#1f1f1f] px-2 py-0.5 rounded-sm leading-snug">
                    {cyuQuestions[cyuIndex].type === "examine" ? "Examine the Concept" : "Apply the Concept"}
                  </span>
                </div>

                {/* Question Area */}
                <div className="py-8 space-y-4">
                  <h3 className="text-xl text-white font-light font-serif tracking-normal leading-relaxed">
                    {cyuQuestions[cyuIndex].question}
                  </h3>
                </div>

                {/* Revealed Answer Panel */}
                {cyuRevealed && (
                  <div className="bg-[#141414] border-l-2 border-[#a88a5f] p-5 text-sm text-[#888888] leading-relaxed rounded-sm mb-4 animate-slide-up whitespace-pre-line">
                    <strong className="text-white text-xs uppercase tracking-wider font-mono font-bold block mb-1">Textbook Analytical Answer:</strong>
                    {cyuQuestions[cyuIndex].answer}
                  </div>
                )}

                {/* Foot Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-[#222222] gap-4">
                  <button
                    onClick={() => setCyuRevealed(prev => !prev)}
                    className="w-full sm:w-auto px-6 py-3 border border-[#333333] hover:border-[#a88a5f] text-xs uppercase tracking-widest font-semibold transition-all bg-transparent cursor-pointer rounded-sm"
                  >
                    {cyuRevealed ? "Collapse Solution" : "Reveal Answer Key"}
                  </button>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      disabled={cyuIndex === 0}
                      onClick={() => {
                        setCyuIndex(prev => prev - 1);
                        setCyuRevealed(false);
                      }}
                      className="flex-1 sm:flex-initial px-4 py-3 border border-[#222222] hover:border-white disabled:pointer-events-none disabled:opacity-30 text-xs uppercase font-semibold rounded-sm tracking-wider"
                    >
                      Back
                    </button>
                    <button
                      disabled={cyuIndex === cyuQuestions.length - 1}
                      onClick={() => {
                        setCyuIndex(prev => prev + 1);
                        setCyuRevealed(false);
                      }}
                      className="flex-1 sm:flex-initial px-5 py-3 bg-white text-black hover:bg-[#cccccc] text-xs uppercase font-semibold rounded-sm tracking-wider flex items-center justify-center gap-1.5"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CYU self-evaluation tip */}
              <div className="bg-[#141414] border border-[#222222] p-4 rounded-sm flex items-start gap-3.5 text-xs text-[#777777]">
                <ShieldAlert className="w-5 h-5 text-[#a88a5f] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-semibold text-white uppercase tracking-wider text-[10px]">Active Concept Retrieval Practice</span>
                  <p className="leading-relaxed">
                    Short-answer conceptualization models (Check Your Understanding) force active synaptic recall. Grade yourself honestly against the textbook responses. Consistent retrieval builds pristine conceptual structures.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-[#222222] p-12 rounded-sm text-center text-xs text-[#555555]">
              No parsed conceptual CYU questions found for this specific chapter. Pick another subunit to study.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
