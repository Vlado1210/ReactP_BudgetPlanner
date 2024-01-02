import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
  const {expenses, budget} = useContext(AppContext)

  const totalExpenses = expenses.reduce((total,item)=>{
    return (total = total + item.cost)
  },0)

  const totalRemaining = budget - totalExpenses
  return (
    <div className= {totalRemaining>=0? `alert alert-success` :  ` alert alert-danger` }>Remaining: ${totalRemaining}</div>
  )
}

export default Remaining