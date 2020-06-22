import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"


const slice = createSlice({
  name: "glossary",
  initialState: [],
  reducers:  {
    getAllGlossaries : (glossary, action) => {
      return action.payload
    },
    // getGlossaryByGlossaryId: () => {
    //  glossary.push(action.payload)
    // }
  }
})

export const { getAllGlossaries} = slice.actions

export const fetchAllGlossaries = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/glossary/`)
  dispatch(getAllGlossaries(data))
}

export default slice.reducer