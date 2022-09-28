import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../'
import {CommentType} from '../../types/article'
import articleApi from '../../api/article'

//state
export interface CommentsState {
  list: Array<CommentType>,
  loading: boolean
}

//state
const initialState: CommentsState = {
  list: [],
  loading: false,
}

//actions
export const loadList = createAsyncThunk(
  'comments/fetchList',
  async(slug: string) => {
    const response = await articleApi.getComments(slug)
    return response.data.articles
  }
)

//store
export const counterSlice = createSlice({
  name: 'comments',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setList: (state, action: PayloadAction<CommentType[]>) => {
      state.list = action.payload
    },
    addItem: state => {

    },
  },
  extraReducers(builder){
    builder
      .addCase(loadList.fulfilled, (state, action) => {
        state.list = action.payload
      })
  }
})

//actions
export const {setList} = counterSlice.actions

//selectors
export const selectList = (state) => state.comments.list

export default counterSlice.reducer