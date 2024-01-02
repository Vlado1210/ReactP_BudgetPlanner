import React from 'react'
import { TiDelete } from 'react-icons/ti'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseItem = ( {name,id,cost} ) => {
  const { dispatch } = useContext(AppContext)
  const handleClick = () =>{
    dispatch({type:'DELETE_ITEM', payload: id}) 
  }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {name}
        <div>
            <span style={{ backgroundColor: '#007bff', color: '#fff', padding: '0.3rem 0.6rem', borderRadius: '0.25rem' }} className='badge badge-secondary badge-pill mr-3'>
                ${cost}
            </span>
            <TiDelete size='1.5em' onClick={handleClick}/>
        </div>
    </li>

  )
}

export default ExpenseItem