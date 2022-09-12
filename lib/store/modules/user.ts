import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import userApi, {LoginCredentials} from '../../api/user'
import {setItem} from "../../helpers/psStorage";
import Router from 'next/router'

//state type
export interface UserState {
  isLoggedIn: boolean,
  errors: Array<string>
}

//state
const initialState: UserState = {
  isLoggedIn: false,
  errors: []
}

//actions
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await userApi.login(credentials)
      setItem("token", response.data.user.token);
      return response.data
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
)

//store
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    setErrors: (state, action: PayloadAction<string[]>) => {
      state.errors = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload
        Router.push("/")
      })
      .addCase(login.rejected, (state, action) => {
        state.errors = Object.keys(action.payload['errors']).map(key => `That ${key} ${action.payload['errors'][key]}`)
      })
  }
})

//actions
export const {setIsLoggedIn, setErrors} = userSlice.actions

//selectors
export const selectIsLoggedIn = (state) => state.user.isLoggedIn
export const selectErrors = (state) => state.user.errors

export default userSlice.reducer