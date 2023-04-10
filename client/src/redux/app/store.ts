import { configureStore } from "@reduxjs/toolkit";
import flipProfileCardReducer from '../feature/flip-profile-card/flip-profile-card';

export const store = configureStore({
    reducer: {
        flipProfileCard: flipProfileCardReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>