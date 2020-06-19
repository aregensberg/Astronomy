import {combineReducers} from 'redux'
import glossary from "./glossary"
import news from "./news"
import media from "./media"

export default combineReducers({glossary})
export default combineReducers({news})
export default combineReducers({media})