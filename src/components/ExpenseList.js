import React from 'react'
import ExpenseItem from './ExpenseItem'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import SearchBar from './SearchBar'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [searchText,setSearchText] = useState('')
  return (
    <div>
      <SearchBar handleSearchText={setSearchText}/>
    <ul className='list-group'>
        {
        expenses
        .filter((expense) => expense.name.toLowerCase().includes(searchText)).map((expense)=>{
            return(
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
            )
        })}
    </ul>
    </div>
  )
}
// notes.filter((note) => note.text.toLowerCase().includes(searchText) )

export default ExpenseList