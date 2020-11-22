// import { routerMiddleware } from 'connected-react-router';
// import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import { createStore } from 'redux';

import createRootReducers from "./reducers";

// const history = createBrowserHistory();

let store;

export function configureStore(preloadedState? :any){
    const middlewares =[
        thunkMiddleware,
        // routerMiddleware(history)   
    ].filter(Boolean);

    store = createStore(createRootReducers(), preloadedState)

    // for (const initializer of initializers) {
    //     initializer(store);
    //   }

    return store;
    
}

export function getHistory() {
    return history;
  }
