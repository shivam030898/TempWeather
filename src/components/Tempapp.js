import React, { useEffect, useState } from 'react';
import "./css/style.css"


// api.openweathermap.org/data/2.5/weather?q=${city name}&appid={a30ee48ea905aabcf3593b23d2eb5078}
const Tempapp = () => {

    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Delhi");

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a30ee48ea905aabcf3593b23d2eb5078`
            const response=await fetch(url);
            const resJson=await response.json();
            setCity(resJson.main);
        }
        
        
        fetchApi();
    },[search])





  return <>
  <div className='box'>
  <div className='inputData'>
      <input type="search" value={search}
      className='inputField' onChange={(event)=>{setSearch(event.target.value)}}  />
  </div>
  {
      !city ?(
          <p className='errorMsg'>No Data Found</p>
      ):(
       <>
        <div className='info'>
        <h2 className='location'>
        <i className="fas fa-street-view">{search}</i>
        </h2>
        <h1 className='temp'>
        {city.temp}
        </h1>
        <h3 className='tempmin_max'>Min :{city.temp_min}ºCel | Max : {city.temp_max}ºCel</h3>
          </div>
          <div className='wave -one'></div>
          <div className='wave -two'></div>
          <div className='wave -three'></div></>
      )
  }
  </div>
  </>;
};

export default Tempapp;
