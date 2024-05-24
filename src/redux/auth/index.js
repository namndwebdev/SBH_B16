import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: "",
  user: {}
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action)=>{
        state.token = action.payload.jwt
        state.user = action.payload.user
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions

export default authSlice.reducer