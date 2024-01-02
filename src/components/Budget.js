import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'

const Budget = () => {

  const [newBudget,setNewBudget] = useState('');

  const [enableChange, setEnablechange] = useState(false);

  const [btnText,setBtnText] = useState("EDIT");

  const handleClick = () =>{
    setEnablechange(!enableChange)
    setBtnText("OK")
    if(enableChange===true){
      dispatch( {type:'CHANGE_BUDGET', payload: newBudget})
      setBtnText("EDIT")
    }
    console.log(enableChange)
  }

  const { budget,dispatch } = useContext(AppContext)


  return (
    <div className='d-flex justify-content-between align-items-center alert alert-secondary'>Budget:${budget}
    <button onClick={handleClick}className='mt-1 btn btn-primary'>{btnText}</button>
    <input required='required' id='newBudget' type='text' className= {enableChange === true ?  `form-control ` :  `form-control d-none `} value={newBudget} onChange={(event)=>{setNewBudget(event.target.value)}}></input>
    </div>
  )
}

export default Budget