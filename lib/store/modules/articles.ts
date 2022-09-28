import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../'
import {ArticleType} from '../../types/article'
import articleApi from '../../api/article'

//state
export interface ArticleState {
  list: ArticleType[],
  loading: boolean
}

//state
const initialState: ArticleState = {
  list: [],
  loading: false,
}

//actions
export const loadList = createAsyncThunk(
  'articles/fetchList',
  async() => {
    const response = await articleApi.getArticles()
    return response.data.articles
  }
)

export const favArticle = createAsyncThunk(
  'articles/favArticle',
  async(slug: string) => {
    const response = await articleApi.favArticle(slug)
    return response.data.article
  }
)

export const unfavArticle = createAsyncThunk(
  'articles/unfavArticle',
  async(slug: string) => {
    const response = await articleApi.unfavArticle(slug)
    return response.data.article
  }
)

//store
export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<ArticleType[]>) => {
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
      .addCase(favArticle.fulfilled, (state, action) => {
        state.list = state.list.map(article => {
          if(action.payload.slug === article.slug){
            article = action.payload
          }
          return article
        })
      })
      .addCase(unfavArticle.fulfilled, (state, action) => {
        state.list = state.list.map(article => {
          if(action.payload.slug === article.slug){
            article = action.payload
          }
          return article
        })
      })
  }
})

//actions
export const {setList} = articleSlice.actions

//selectors
export const selectList = (state) => state.articles.list

export default articleSlice.reducer