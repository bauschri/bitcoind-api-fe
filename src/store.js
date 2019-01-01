import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducersAll = combineReducers({

});

const defaultState = {

};


export default (loadingState = defaultState) => {
  let middleware = applyMiddleware(thunk);

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(
        middleware,
        devToolsExtension()
      );
    }
  }

  const store = createStore(reducersAll, loadingState, middleware);

  store.subscribe(() => {

  });

  return store;
};
