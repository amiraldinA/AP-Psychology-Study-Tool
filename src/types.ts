export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

// NEW: To handle "Examine the Concept" and "Apply the Concept" short-answer questions
export type CYUQuestion = {
  id: string;
  type: "examine" | "apply";
  question: string;
  answer: string; 
};

// RECOMMENDED: Abstracting Subunit makes the code much cleaner
export type Subunit = {
  id: string;
  title: string;
  description: string;
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  cyu?: CYUQuestion[]; // NEW property
};

export type UnitData = {
  id: string;
  title: string;
  description: string;
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  subunits?: Subunit[];
};

// NEW: To handle Appendix A (Full Practice Exam) and Appendix D (Evidence-Based Questions)
export type AppendixData = {
  id: string;
  title: string;
  questions: QuizQuestion[]; 
  dbq?: {                 
     documents: string[];
     prompts: string[];
     scoringGuidelines: string;
  };
};