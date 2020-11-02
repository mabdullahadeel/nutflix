import { createSlice } from '@reduxjs/toolkit';
// Helper (utility) Functions
import { addToLocalStorage, removeFromLocalStorage } from './utility';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        logIn: (state, action) => {
            state.user = action.payload;
            addToLocalStorage(action.payload)
        },
        logOut: (state) => {
            state.user = null;
            removeFromLocalStorage();
        }

    },
});

export const { logIn, logOut } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
