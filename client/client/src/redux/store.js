import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// importujemy reducery
import posts from './postsRedux';


// łączymy reducery w jeden rootReducer bo funkca crateStore może przyjąć tylko jeden
const rootReducer = combineReducers({
    posts,
});
const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;