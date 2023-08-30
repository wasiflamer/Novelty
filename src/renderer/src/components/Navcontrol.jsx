import { useState } from 'react'

import {
  Slider,
  Sketch,
  Material,
  Colorful,
  Compact,
  Circle,
  Wheel,
  Block,
  Github,
  Chrome
} from '@uiw/react-color'
import { Alpha, Hue, ShadeSlider, Saturation, hsvaToHslaString } from '@uiw/react-color'
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color'

function Demo() {
  const [hex, setHex] = useState('#fff')
  return <Github color="#24242424" />
}

function Searchbar() {
  return (
    <div className="form-control">
      <div className="input-group">
        <input type="text" placeholder="Search…" className="input" />
        <button className="btn btn-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

function Navcontrol() {
  return (
    <div className="mt-5 ml-2 DD text-white fixed top-50 z-20">
      <div className="flex justify-center items-start flex-col">
        <div className="btn btn-ghost hover:bg-inherit my-2">Catagory</div>
        <div className=" flex flex-row">
          <div className="join">
            <input
              className="join-item btn btn-secondary"
              type="radio"
              name="options"
              aria-label="General"
            />
            <input
              className="join-item btn btn-secondary "
              type="radio"
              name="options"
              aria-label="Anime"
            />
            <input
              className="join-item btn btn-secondary"
              type="radio"
              name="options"
              aria-label="People"
            />
          </div>
        </div>
        <div className="btn btn-ghost">Colors</div>
        <div className=" flex flex-row">
          <Demo />
        </div>

        <div className="btn btn-ghost">Purity</div>
      </div>
    </div>
  )
}
export default Navcontrol
