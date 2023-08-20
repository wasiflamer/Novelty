import { useState } from 'react'

const axios = require('axios')

function Test() {
  const [data, setdata] = useState([])

  axios
    .get('https://wallhaven.cc/api/v1/search?q=car', {
      params: {}
    })
    .then(function (response) {
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      // always executed
    })

  return <p></p>
}

function Card() {
  return (
    <div className="card rounded-lg bg-base-100 shadow-xl -z-50 DD  ">
      <figure>
        <img src="#" alt="img" className="w-96 h-60 rounded-lg shadow-xl " />
      </figure>
    </div>
  )
}

function Pagecontent() {
  return (
    <div className=" grid grid-cols-3  gap-6 m-10 justify-items-center grid-flow-row-dense ED ">
      <Test />
    </div>
  )
}
export default Pagecontent
