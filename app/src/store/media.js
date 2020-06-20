import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"
import {media} from '/apis/utils/media'


const slice = createSlice({
  name: "media",
  initialState: [],
  reducers:  {
    getAllMedia : () => {
      return action.payload
    },
    getMediaByMediaId: () => {
      posts.push(action.payload)
    }
  }
})

export const {getMediaByMediaId, getAllMedia} = slice.actions

export const getAllMedia = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/media/`)
  dispatch(getAllMedia(data))
}

export default slice.reducer