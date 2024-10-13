// store.ts
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // You can use redux-thunk for async actions
import { Provider } from 'react-redux';
import programsReducer from './Reducer'; // Define your reducers

// Combine reducers if you have multiple
const rootReducer = combineReducers({
  // Add your individual reducers here
  programsReducer
});

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
