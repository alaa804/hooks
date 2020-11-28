import React from 'react'
import Rate from "./Rate"

const Search = ({rate , changeRate, searchHandler}) => {
  
  return (
    <div>
      <form>
        <label className="title"> Search Movie </label>
        <input type="text" onChange={e => searchHandler(e.target.value)}  />
        <Rate rate = {rate} rateChange={changeRate} />
      </form>
    </div>
  )
}

export default Search
