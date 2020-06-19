import { createAction, createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"
import * as posts from 'formik'
import {glossary} from '/apis/utils/glossary'


const slice = createSlice({
  name: "glossary",
  initialState: [],
  reducers:  {
    getAllGlossaries : () => {
      return action.payload
    },
    getGlossaryByGlossaryId: () => {
      posts.push(action.payload)
    }
  }
})

export const {getGlossaryByGlossaryId, getAllGlossaries} = slice.actions

export const fetchAllGlossaries = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/glossary`)
  dispatch(getAllMisquotes(data))
}

export default slice.reducer