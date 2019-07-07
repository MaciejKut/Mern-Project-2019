import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// importujemy reducery
import posts from './postsRedux';


// łączymy reducery w jeden rootReducer bo funkca crateStore może przyjąć tylko jeden
const rootReducer = combineReducers({
    posts,
});
const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;