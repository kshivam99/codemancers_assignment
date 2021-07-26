import { createContext, useContext, useReducer } from "react";



export const postsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      break;
  }
  return state;
};


const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postsReducer, 
        {
            posts: [],
        });
    return (
      <PostContext.Provider
        value={{
          state,
          dispatch
        }}
      >
        {children}
      </PostContext.Provider>
    );
  };
  
  export const usePost = () => useContext(PostContext);