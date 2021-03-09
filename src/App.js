import React, { useEffect, useReducer } from 'react'
import { initState, dispatchState } from './reducer/index'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(dispatchState, initState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'demo',
        payload: {
          demo: 857
        }
      })
    }, 3000);
  }, [])

  return (
    <div className="App">
      {state.demo}
    </div>
  );
}

export default App;
