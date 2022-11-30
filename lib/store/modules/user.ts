import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import userApi, {LoginCredentials, RegisterCredentials} from '../../api/user'
import {setItem} from "../../helpers/psStorage";
import Router from 'next/router'
import {UserType} from "../../types/user";
import {hasToken} from "../../helpers/user";
import exp from "constants";

//state type
export interface UserState {
  isLoggedIn: boolean,
  errors: Array<string>
  user: UserType
}

//state
const initialState: UserState = {
  isLoggedIn: false,
  errors: [],
  user: null
}

//actions
export const login = createAsyncThunk(
  'user/login',
  async (credentials: LoginCredentials, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.login(credentials)
      return fulfillWithValue(response.data)
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
)

export const register = createAsyncThunk(
  'user/register',
  async (credentials: RegisterCredentials, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.register(credentials)
      return fulfillWithValue(response.data)
    } catch (e) {
      return rejectWithValue(e.response.data)
    }
  }
)

export const loadUser = createAsyncThunk(
  'user/loadUser',
  async (credentials, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await userApi.getCurrentUser()
      return fulfillWithValue(response.data.user)
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
        state.isLoggedIn = true
        setItem("token", action.payload.user.token);
        Router.push("/")
      })
      .addCase(login.rejected, (state, action) => {
        state.errors = Object.keys(action.payload['errors']).map(key => `That ${key} ${action.payload['errors'][key]}`)
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true
        setItem("username", action.payload.user.username)
        setItem("token", action.payload.user.token);
        Router.push("/")
      })
      .addCase(register.rejected, (state, action) => {
        state.errors = Object.keys(action.payload['errors']).map(key => `That ${key} ${action.payload['errors'][key]}`)
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
  }
})

//actions
export const {setIsLoggedIn, setErrors} = userSlice.actions

//selectors
export const selectIsLoggedIn = (state) => state.user.isLoggedIn
export const selectErrors = (state) => state.user.errors
export const selectUser = (state) => state.user.user

export default userSlice.reducer