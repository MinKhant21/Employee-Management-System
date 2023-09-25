import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
        user: "",
        token:null
    }
  
    export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state,actions){
            state.user = actions.payload.user
            state.token = actions.payload.token
        },
        logout(state){
            console.log(state)
        }
    },
    })
  
  // Action creators are generated for each case reducer function
  export const { login, logout } = userSlice.actions
  
  export default userSlice.reducer