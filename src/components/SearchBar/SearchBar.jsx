import { useState } from 'react'
import './searchBar.scss'

const types=["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery]=useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0,
  })
  const switchType=(val)=>{
      setQuery((prev)=>({...prev, type:val}));
  }
  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type)=>(
          <button type='button' key={type} onClick={()=>switchType(type)} className={query.type===type ? "active":""}>{type}</button>
        ))}
      </div>
      <form action="">
        <input type='text' name='loaction' placeholder='City Location'/>
        <input type='number' name='minPrice' min={0} max={1000000} placeholder='Min Price'/>
        <input type='number' name='maxPrice' min={0} max={1000000} placeholder='Max Price'/>
        <button type='submit'>
          <img src='../../../src/assets/search.png' alt=''/>
        </button>
      </form>
    </div>
  )
}

export default SearchBar
