import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'user',
    initialState: {
      emailUser: "",
      passwordUser: ""
    },
    reducers: {
      setEmailUser: (state, action) => {
        state.emailUser = action.payload;
      },
      setPasswordUser: (state, action) => {
        state.passwordUser = action.payload
      }
    }
});

export const { setEmailUser, setPasswordUser } = loginSlice.actions;
export default loginSlice.reducer;