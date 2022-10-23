import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    isAuth: false,
    type: '',
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        },
        setType(state, action) {
            state.type = action.payload;
        }
    }
});
export const { setUser, setIsAuth, setType } = userSlice.actions;
export default userSlice.reducer;