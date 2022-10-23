import { createStore } from 'redux'
import { reducerPosts } from './reducers'

const initialState={
    posts:[],
    images:[]
}

const rewindows =() => {
    if (typeof window !== "undefined") {
       return  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      }
}  

  
export const store = createStore(
    reducerPosts,
    initialState,
    rewindows()
) 