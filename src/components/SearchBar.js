import React from 'react'

const SearchBar = ({handleSearchText}) => {
  return (
    <div>
        <input  className='form-control mb-3'onChange={(event)=> handleSearchText(event.target.value)}type='text' placeholder='Search Expense'/>
    </div>
  )
}

export default SearchBar