import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import commentsReducer from './modules/comments'
import userReducer from './modules/user'

export function makeStore() {
  return configureStore({
    reducer: { comments: commentsReducer, user: userReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
  >

export default store