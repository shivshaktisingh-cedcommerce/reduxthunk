import { applyMiddleware,  legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './Reducerindex'




const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store

