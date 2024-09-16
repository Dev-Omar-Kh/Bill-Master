import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({

    name : 'darkMode',

    initialState : {

        darkMode : localStorage.getItem('DM') === 'true',

    },

    reducers : {

        toggleDarkMode : (state) => {

            state.darkMode = !state.darkMode;

            localStorage.setItem('DM' , state.darkMode);

        },

    },

});

export const {toggleDarkMode} = darkModeSlice.actions;
export const darkModeReduce = darkModeSlice.reducer;