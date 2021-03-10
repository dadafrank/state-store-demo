import React, { useContext } from 'react'
import { Context } from '../../reducer/pageOneManager'

const PageOneChild = (props) => {
	const { state, dispatch } = useContext(Context)
	return (
		<div>
			第一页的子组件
			<div>{state.pageOneDemo}</div>
		</div>
	)
}

export default PageOneChild;