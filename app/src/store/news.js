import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"


const slice = createSlice({
  name: "news",
  initialState: [],
  reducers:  {
    getAllNews : (news, action) => {
      return action.payload
    },
  }
})

export const {getAllNews} = slice.actions

export const fetchAllNews = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/news`)
  dispatch(getAllNews(data))
}

export default slice.reducer