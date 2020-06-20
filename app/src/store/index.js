import {combineReducers} from 'redux'
import glossary from "./glossary"
import news from "./news"
import media from "./media"

export default combineReducers({glossary, news, media})