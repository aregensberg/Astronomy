import {combineReducers} from 'redux'
import glossary from "./glossary"
import news from "./news"
import media from "./media"
import videos from "./video"

export default combineReducers({glossary, news, media, videos})