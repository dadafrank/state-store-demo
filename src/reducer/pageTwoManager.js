import React from 'react'

export const Context = React.createContext()

export const initState = {
  demo: 0
}

export const dispatchState = (state, action) => {
  let newState = state

  switch (action.type) {
    case 'demo':
      newState = {
        ...state,
        demo: action.payload.demo
      }
      break;
    default:
      break;
  }

  return newState
}