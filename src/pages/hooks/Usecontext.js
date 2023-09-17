import React, { useContext, useState } from 'react'
import { CountContext } from '../../context/CountContext';

export default function Usecontext() {

  const {count, increment, decrement} =useContext(CountContext);

  return (
  <div className="container">
    <div className="row">
      <div className="col">
        <button onClick={increment} type="button" className='btn btn-success'> Increment </button>
        <h2> {count}</h2>
        <button onClick={decrement} type='button' className='btn btn-danger'>Drecrement</button>
      </div>
    </div>
  </div>
  )
}
