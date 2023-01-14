import React from 'react'
import ReactSlider from 'react-slider'
import {useState} from 'react'
import './Filters.css'

function Filters () {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const arr = []
  for (let i = 0; i < 20; i++) {
    arr[i] = 'Smartphones'
  }
  return (
    <div className="flex flex-col pr-8">
      <div className="flex justify-center items-center gap-6">
        <button className="outline outline-1 py-2 px-2.5 rounded-md bg-indigo-400 text-[#ffffff] shadow-md outline-none hover:shadow-4xl ease-in transition-shadow">Reset filters</button>
        <button className="outline outline-1 py-2 px-2.5 rounded-md bg-indigo-400 text-[#ffffff] shadow-md outline-none hover:shadow-4xl ease-in transition-shadow">Copy link</button>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-indigo-400 italic">Price</h1>
        <div>
          <ReactSlider 
            defaultValue={[min, max]}
            trackClassName="tracker"
            className="slider"
            thumbClassName="thumb"
            min={0}
            max={100}
            minDistance={1}
            step={1}
            withTracks={true}
            pearling={true}
            renderThumb={(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => {
              return <div {...props} className="thumb"></div>
            }}
            renderTrack={(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => {
              return <div {...props} className="tracker"></div>
            }}
            onChange={([min, max]: number[]) => {
              setMin(min)
              setMax(max)
            }}
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-indigo-400 font-medium">Min: {min}</span>
        <span className="text-indigo-400 font-medium">Max: {max}</span>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-indigo-400 italic">Category</h1>
        <div className="categories">
          {arr.map(item => {return(
            <div className="flex justify-between px-2">
              <div>
                <input type="checkbox" name="checkbox-input" className="mt-[7px] custom-checkbox"></input>
                <label></label>
                <span className="ml-2 text-indigo-400 font-medium">{item}</span>
              </div>
              <span className="italic text-indigo-300">2/2</span>
            </div>
          )})}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-indigo-400 italic">Brand</h1>
        <div className="categories">
          {arr.map(item => {return(
            <div className="flex justify-between px-2">
              <div>
                <input type="checkbox" name="checkbox-input" className="mt-[7px] custom-checkbox"></input>
                <label></label>
                <span className="ml-2 text-indigo-400 font-medium">{item}</span>
              </div>
              <span className="italic text-indigo-300">2/2</span>
            </div>
          )})}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl font-bold text-indigo-400 italic">Stock</h1>
        <div>
          <ReactSlider 
            defaultValue={[min, max]}
            trackClassName="tracker"
            className="slider"
            thumbClassName="thumb"
            min={0}
            max={100}
            minDistance={1}
            step={1}
            withTracks={true}
            pearling={true}
            renderThumb={(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => {
              return <div {...props} className="thumb"></div>
            }}
            renderTrack={(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => {
              return <div {...props} className="tracker"></div>
            }}
            onChange={([min, max]: number[]) => {
              setMin(min)
              setMax(max)
            }}
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-indigo-400 font-medium">Min: {min}</span>
        <span className="text-indigo-400 font-medium">Max: {max}</span>
      </div>
    </div>
  )
}

export default Filters