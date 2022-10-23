export const reducerPosts =(state,action)=>{
    switch (action.type) {
        case '@getAllPosts':
        return{
            ...state,
            posts:action.payload
        }
        case '@getAllImages':
        return{
            ...state,
            images:action.payload
        }

    }
    return state
}