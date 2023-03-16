import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FlipState{
    value: boolean;
}

const initialState: FlipState = {
    value: false,
}; 

const flipProfileCardSlice = createSlice({
    name: 'flip-profile-card',
    initialState,
    reducers:{
        flipCard(state){
            state.value = true;
        },
        unFlipCard(state){
            state.value = false;
        }
    }
});

export const {flipCard, unFlipCard} = flipProfileCardSlice.actions;
export default flipProfileCardSlice.reducer;