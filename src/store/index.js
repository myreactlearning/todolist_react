import {createStore} from 'redux'
import reduder from './reducer'

const store = createStore(reduder, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;