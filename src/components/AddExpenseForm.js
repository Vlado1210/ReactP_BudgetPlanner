import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4 } from 'uuid'


const AddExpenseForm = () => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')

  const { dispatch } = useContext(AppContext);

  const OnSubmit = (event) =>{
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost)
    }

    dispatch( {type:'ADD_EXPENSE', payload: expense})

  }

  return (
    <form onSubmit={OnSubmit}>
      <div className='row'>
        <div className='col-sm'>
          <label for='name'>Name</label>
          <input required='required' id='name' type='text' className='form-control' value={name} onChange={(event)=>{setName(event.target.value)}}>
          </input>
        </div>
        <div className='col-sm'>
        <label for='cost'>Cost</label>
          <input id='cost' type='text' className='form-control' required='required' value={cost} onChange={(event)=>{setCost(event.target.value)}}>
          </input>
        </div>
        <div className='col-sm'>
        <button type='submit' className='btn btn-primary mt-4'>Save</button>
        </div>
      </div>
    </form>
  )
}

export default AddExpenseForm