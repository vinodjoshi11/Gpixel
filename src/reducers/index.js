import { combineReducers } from 'redux';
import { 
    userRepos,
    currentUserData,
    currentUser,
} from './User';

const rootReducer = combineReducers({
    currentUser,
    currentUserData,
    userRepos,
});

export default rootReducer;
