import { legacy_createStore as createStore} from 'redux'
import reducer from "./reducer";


// we can use combined reducer to link 
export let store = createStore(reducer)