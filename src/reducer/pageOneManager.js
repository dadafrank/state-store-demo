import React from 'react'

export const Context = React.createContext()

export const initState = {
  pageOneDemo: 123
}

export const dispatchState = (state, action) => {
  let newState = state

  switch (action.type) {
    default:
      break;
  }

  return newState
}