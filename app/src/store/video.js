import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"


const slice = createSlice({
  name: "video",
  initialState: [],
  reducers:  {
    getRandomVideo : (video, action) => {
      return action.payload
    },
  }
})

export const { getRandomVideo} = slice.actions

export const fetchRandomVideo = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/media/mediaIsVideo/1`)
  dispatch(getRandomVideo(data))
}

export default slice.reducer