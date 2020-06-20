import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"


const slice = createSlice({
  name: "media",
  initialState: [],
  reducers:  {
    getAllMedia : (media, action) => {
      return action.payload
    },
    // getMediaByMediaId: () => {
    //   media.push(action.payload)
    // }
  }
})

export const { getAllMedia} = slice.actions

export const fetchAllMedia = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/media/`)
  dispatch(getAllMedia(data))
}

export default slice.reducer