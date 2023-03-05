import React from "react";
import { useState } from "react";
import ReactSlider from "react-slider";

type DoubleSliderType = {
  propsMin: number;
  propsMax: number;
  name: string;
};

function DoubleSlider(props: DoubleSliderType) {
  const { propsMin, propsMax, name } = props;
  const [min, setMin] = useState(propsMin);
  const [max, setMax] = useState(propsMax);
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold text-indigo-400 italic">{name}</h1>
      <div>
        <ReactSlider
          defaultValue={[min, max]}
          trackClassName="tracker"
          className="slider"
          thumbClassName="thumb"
          min={propsMin}
          max={propsMax}
          minDistance={1}
          step={1}
          withTracks={true}
          pearling={true}
          renderThumb={(
            props: JSX.IntrinsicAttributes &
              React.ClassAttributes<HTMLDivElement> &
              React.HTMLAttributes<HTMLDivElement>
          ) => {
            return <div {...props} className="thumb"></div>;
          }}
          renderTrack={(
            props: JSX.IntrinsicAttributes &
              React.ClassAttributes<HTMLDivElement> &
              React.HTMLAttributes<HTMLDivElement>
          ) => {
            return <div {...props} className="tracker"></div>;
          }}
          onChange={([min, max]: number[]) => {
            setMin(min);
            setMax(max);
          }}
        />
      </div>
      <div className="flex justify-between mt-4">
        <span className="text-indigo-400 font-medium">Min: {min}</span>
        <span className="text-indigo-400 font-medium">Max: {max}</span>
      </div>
    </div>
  );
}

export default DoubleSlider;
