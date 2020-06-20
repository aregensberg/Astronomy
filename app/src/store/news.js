import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"

const slice = createSlice({
  name: "news",
  initialState: [],
  reducers:  {
    getAllNews : (posts, action) => {
      return action.payload
    },
    getNewsByNewsId: (posts, action) => {
      posts.push(action.payload)
    }
  }
})

export const {getNewsByNewsId, getAllNews} = slice.actions

export const fetchAllNewss = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/news`)
  dispatch(getAllNews(data))
}

export default slice.reducer