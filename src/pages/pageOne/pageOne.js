import React, { useReducer } from 'react'
import { Context, initState, dispatchState } from '../../reducer/pageOneManager'

import PageOneChild from './pageOneChild'

const PageOne = () => {

	const [state, dispatch] = useReducer(dispatchState, initState)

  return (
  	<Context.Provider value={{ state, dispatch }}>
  		<div>第一页</div>
  		<PageOneChild />
  	</Context.Provider>
  )
}

export default PageOne;