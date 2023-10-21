import { configureStore } from '@reduxjs/toolkit';

import playReducer from './features/play/playSlice';
import creatorReducer from './features/questions/creatorSlice';
import questionReducer from './features/questions/questionsSlice';
import authReducer from './features/user/authSlice';
import gameReducer from './features/play/gameSlice';

export const store = configureStore({
  reducer: {
    authentication: authReducer,
    play: playReducer,
    game: gameReducer,
    questions: questionReducer,
    creator: creatorReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
