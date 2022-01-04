import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [], // Initially an empty array, will fix it after we make a request
    user: {}, // Empty object by default
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState) // Like useState it's going to destructure from an array

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
