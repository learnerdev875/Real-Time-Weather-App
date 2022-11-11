import React from 'react'
import {useState} from 'react'
function InputLocation(props) {
    const [location,setLocation] = useState('');
  return (
    <div className='input-location_container'>
        <div className="input-location">
        <input type='text' placeholder='Enter Location' onChange={e=> setLocation(e.target.value)}/>
        <i className="ri-search-line search-icon" onClick = {()=> props.setLocation(location)}></i>
        </div>
    </div>
  )
}

export default InputLocation