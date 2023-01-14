import React from 'react'

function Sorts () {
  return (
    <div className="w-[100%] flex justify-between">
      <div>
        <select name="sorts-select" className="outline-none border border-indigo-400 text-indigo-500 text-sm rounded-md focus:bg-[#ffffff] focus:border-indigo-400 block w-full p-2.5">
          <option value="1">By Price (increasing)</option>
          <option value="2">By Price (decreasing)</option>
          <option value="3">By Rating (increasing)</option>
          <option value="4">By Rating (decreasing)</option>
        </select>
      </div>
      <div className="flex items-center text-indigo-400 font-semibold">Found 4 products</div>
      <div className="flex items-center cursor-pointer">
        <div className="border py-1.5 px-1.5 rounded-tl-md rounded-bl-md border-indigo-400">
          <div className="grid grid-cols-2 grid-rows-2 gap-1">
            <div className="border border-indigo-400 p-[4px] rounded-sm bg-indigo-400"></div>
            <div className="border border-indigo-400 p-[4px] rounded-sm bg-indigo-400"></div>
            <div className="border border-indigo-400 p-[4px] rounded-sm bg-indigo-400"></div>
            <div className="border border-indigo-400 p-[4px] rounded-sm bg-indigo-400"></div>
          </div>
        </div>
        <div className="border py-1.5 px-1.5 rounded-tr-md rounded-br-md  border-indigo-400">
            <div className="flex flex-col gap-[4px] py-[2px]">
              <div className="bg-indigo-400 h-[1px] w-[80%] px-[13px] py-[2px] rounded-sm"></div>
              <div className="bg-indigo-400 h-[1px] w-[80%] px-[13px] py-[2px] rounded-sm"></div>
              <div className="bg-indigo-400 h-[1px] w-[80%] px-[13px] py-[2px] rounded-sm"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sorts