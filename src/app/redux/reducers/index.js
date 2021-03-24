import { combineReducers } from 'redux'
import youtubeReducers from './youtubeReducers';

const rootReducer = combineReducers({
    youtubeReducers   //Combibining all reducers here but we have only one here we can add as many required

})
export default rootReducer