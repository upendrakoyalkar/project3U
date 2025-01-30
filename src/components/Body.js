import React from 'react'
import {RestaurentCards} from './RestaurentCards'
import { useState ,useEffect } from 'react'
//import resList from "./resList"
import useOnlineStatus from './useOnlineStatus'
const Body = () => {

const [resLists,setresLists] = useState([])
const [dummydata,setdummydata] = useState([])

const [searchText , setsearchText] = useState("")
 useEffect( () => {
  fetchdata()
},[])

const fetchdata= async() =>{
  const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  // setresList(json.)
  setresLists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setdummydata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 
  console.log(json)
}

const onlinestate =  useOnlineStatus()
if(onlinestate === false) return (<h1>Look at your internet connection</h1>);
return (
  <div>
 
    <div className="flex">

    <div className='p-3'>
      <button className=" px-3 py-1.5 m-2 bg-gray-200 rounded-sm cursor-pointer" onClick={() => {
        const resListfiter = resLists.filter((res) => res.info.avgRating > 4);
        setdummydata(resListfiter);
      }}>Top Restaurent</button>
      </div>

      <div className='p-3'> 
        <input className='border border-black p-1' type = "text" value = {searchText} onChange = { (e) => {setsearchText(e.target.value)}} placeholder="Search for restaurent" onKeyUp={(e) => {
        if (e.key === "Enter") {
          let resListfitered = resLists.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setdummydata(resListfitered);
        }}}>
        </input>

<button className='bg-gray-400 p-1 m-2 rounded-sm cursor-pointer' onClick={ () =>{
  const resListfitered = resLists.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
  setdummydata(resListfitered);
}}>search</button>

</div>
</div>
        
        
      <div className = "flex flex-wrap ">
      
      {dummydata.map( (i) => (
        <RestaurentCards resData = {i} />))}  
      </div>
      


      </div>
);
}

export default Body