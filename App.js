import { useState } from 'react';
import './App.css';
import DisplayWeather from './Components/DisplayWeather';
import InputLocation from './Components/InputLocation';
function App() {
  const [location,setLocation] = useState('');
  return (
    <div className="App">
      <InputLocation setLocation={setLocation}/>
      <DisplayWeather location={location}/>
    </div>
  );
}

export default App;
