import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../'
import {ArticleType} from '../../types/article'
import articleApi, {ArticlesQuery} from '../../api/article'


//state
export interface ArticleState {
  list: ArticleType[],
  tags: string[],
  loading: boolean
}

//state
const initialState: ArticleState = {
  list: [],
  loading: false,
  tags: []
}

//actions
export const loadList = createAsyncThunk(
  'articles/fetchList',
  async(query: ArticlesQuery) => {
    const response = await articleApi.getArticles(query)
    return response.data.articles
  }
)

export const loadTags = createAsyncThunk(
  'articles/fetchTags',
  async() => {
    const response = await articleApi.getTags()
    return response.data.tags
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
      .addCase(loadTags.fulfilled, (state, action) => {
        state.tags = action.payload
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
export const selectTags = (state) => state.articles.tags

export default articleSlice.reducer