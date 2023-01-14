import React from 'react'

function Search () {
  return (
    <div className="w-[100%]">
      <input type="text" placeholder="Please, write something..." className="w-[90%] outline outline-[1.5px] rounded-md p-1.5 outline-indigo-400 shadow-md pl-4"/>
      <button type="submit" className="outline outline-1 w-[9%] ml-2 p-1.5 rounded-md bg-indigo-400 text-[#ffffff] shadow-md outline-none hover:shadow-3xl ease-in transition-shadow">Search</button>
    </div>
  )
}

export default Search