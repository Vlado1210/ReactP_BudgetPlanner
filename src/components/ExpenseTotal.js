import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext)

  const totalExpenses = expenses.reduce((total,item)=>{
    return (total = total + item.cost)
  },0)

  return (
    <div className='alert alert-primary'>ExpenseTotal: ${totalExpenses}</div>
  )
}

export default ExpenseTotal