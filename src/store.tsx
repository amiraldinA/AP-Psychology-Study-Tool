import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type State = {
  unitMastery: Record<string, number>; // unitId -> 0-100 score
  quizScores: Record<string, boolean>; // questionId -> true/false
  flashcardsReviewed: Record<string, number>; // cardId -> times reviewed
};

type Action =
  | { type: 'UPDATE_MASTERY'; unitId: string; score: number }
  | { type: 'RECORD_QUIZ'; questionId: string; correct: boolean }
  | { type: 'REVIEW_FLASHCARD'; cardId: string }
  | { type: 'RESET' };

const initialState: State = {
  unitMastery: {},
  quizScores: {},
  flashcardsReviewed: {},
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_MASTERY':
      return {
        ...state,
        unitMastery: {
          ...state.unitMastery,
          [action.unitId]: Math.max(state.unitMastery[action.unitId] || 0, action.score),
        },
      };
    case 'RECORD_QUIZ':
      return {
        ...state,
        quizScores: {
          ...state.quizScores,
          [action.questionId]: action.correct,
        },
      };
    case 'REVIEW_FLASHCARD':
      return {
        ...state,
        flashcardsReviewed: {
          ...state.flashcardsReviewed,
          [action.cardId]: (state.flashcardsReviewed[action.cardId] || 0) + 1,
        },
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const StoreContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
