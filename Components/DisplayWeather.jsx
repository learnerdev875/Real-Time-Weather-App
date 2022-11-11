import React from 'react'
import {useState,useEffect}  from 'react'
import Axios from 'axios'

function DisplayWeather({location}) {

    const [info,setInfo] = useState({
        time:'',
        condition:'',
        celcius:'',
        airQuality:'',
        wind:''
        ,location:'',country:""
    })
    const [lat,setLat] = useState(null);
    const [lang,setLang] = useState(null);

    const getLocation = () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                setLang(position.coords.longitude)
                setLat(position.coords.latitude)
            })
        }
    }
    useEffect(()=>{
        getLocation();

        Axios.get(`http://api.weatherapi.com/v1/current.json?key=8701baaeb32242d79f762639222310&q=${lat},${lang}&aqi=no`)
        .then(response =>{
            const {localtime,name,country} = response.data.location;
            const {condition,feelslike_c,wind_kph} = response.data.current;
            return setInfo({time:localtime,
            location:name,
            country:country,
            condition:condition.text,
            celcius:feelslike_c,
            airQuality:'Excellent',
            wind:wind_kph})}
        )

    },[lang,lat])

    useEffect(()=>{
        Axios.get(`https://api.weatherapi.com/v1/current.json?key=8701baaeb32242d79f762639222310&q=${location}&aqi=no`)
        .then(response =>{
            const {localtime,name,country} = response.data.location;
            const {condition,feelslike_c,wind_kph} = response.data.current;
            return setInfo({time:localtime,
            location:name,
            country:country,
            condition:condition.text,
            celcius:feelslike_c,
            airQuality:'Excellent',
            wind:wind_kph})}
        )
    },[{location}])
  return (
    <div className='weather-card'>
        <div className='top-section'>
        <p>CURRENT WEATHER</p>
        <h1>{info.location},{info.country}</h1>
        <p className='bold'>{info.time}</p>
        <p className='bold'>{info.condition}</p>
        </div>
        <div className="bottom-section">
            <div className="temperature-info">
                <p>{info.celcius}&deg;<small>c</small></p>
            </div>
            <div className="additional-info">
                <div className="air-info">
                    <span>Air Quality</span>
                    <span>{info.airQuality}</span>
                </div>
                <div className="wind-info">
                    <span>Wind</span>
                    <span>{info.wind} kph</span>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default DisplayWeather