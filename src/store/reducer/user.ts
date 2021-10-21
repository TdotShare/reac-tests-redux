import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  value: string
}

const initialState: UserState = {
  value: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state) => {
      state.value = "tdotdev !!"
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions

export default userSlice.reducer