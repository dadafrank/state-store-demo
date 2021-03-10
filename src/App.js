import React, { useEffect, useReducer } from 'react'
import { initState, dispatchState } from './reducer/index'
import PageOne from './pages/pageOne/pageOne.js'
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
      <div
        style={{
          marginTop: '30px'
        }}
      >
        <PageOne />
      </div>
    </div>
  );
}

export default App;
