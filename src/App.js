import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {incrementar, reduzir} from './store/contador';

function App() {

  const state = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch(incrementar())} >Incrementar</button>
      <button onClick={() => dispatch(reduzir())} >Incrementar</button>
    </>
  );
}

export default App;
