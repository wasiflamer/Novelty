import React, { useState } from 'react'
import Github from '@uiw/react-color-github'

function Color_choose() {
  const [hex, setHex] = useState('#fff')
  return (
    <>
      <Github
        color={hex}
        style={{
          '--github-background-color': '#242424'
        }}
        className="DD"
        onChange={(color) => {
          setHex(color.hex)
        }}
      />
    </>
  )
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
    <div className="mt-5 DD text-white fixed top-50 z-20 ml-4">
      <div className="flex justify-center items-start flex-col ED">
        <div className="btn btn-ghost hover:bg-inherit my-2">Catagory</div>
        <div className=" flex flex-row">
          <div className="join">
            <input
              className="join-item btn btn-secondary DD"
              type="radio"
              name="options"
              aria-label="General"
            />
            <input
              className="join-item btn btn-secondary DD"
              type="radio"
              name="options"
              aria-label="Anime"
            />
            <input
              className="join-item btn btn-secondary DD"
              type="radio"
              name="options"
              aria-label="People"
            />
          </div>
        </div>
        <div className="btn btn-ghost hover:bg-inherit my-2">Colors</div>
        <div className=" flex flex-col">
          <Color_choose />
        </div>

        <div className="btn btn-ghost hover:bg-inherit my-2 ED">Purity</div>
        <div className=" flex flex-col">
          <div className="form-control w-52 mx-4">
            <label className="cursor-pointer label">
              <span className="label-text">NSFW</span>
              <input type="checkbox" className="toggle toggle-primary DD" unchecked />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navcontrol
