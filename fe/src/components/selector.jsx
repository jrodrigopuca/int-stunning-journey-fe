import React, {useState} from 'react';
import WeatherPanel from './WeatherPanel';
import ForecastPanel from './ForecastPanel';

function Selector(){

    const [location, updateLocation]=useState("");
    const [view, updateView]=useState("");

    return (
        <React.Fragment>
            <select id="location" onChange={e=>updateLocation(e.target.value)} value={location}>
                <option value="" selected disabled>Seleccione una ubicación</option>
                <option value="Actual">Actual</option>
                <option value="Jujuy">Jujuy</option>
                <option value="Winnipeg">Winnipeg</option>
                <option value="Mendoza">Mendoza</option>
                <option value="London">Londres</option>
                <option value="Tokyo">Tokyo</option>
            </select>

            <select id="view"  onChange={e=>updateView(e.target.value)} value={view}>
                <option value="" selected disabled>Seleccione una vista</option>
                <option value="weather">Tiempo</option>
                <option value="forecast">Prónostico</option>
            </select>

            {view==='weather' && location && (<WeatherPanel city={location}></WeatherPanel>)}
            {view==='forecast' && location && (<ForecastPanel city={location}></ForecastPanel>)}
        </React.Fragment>
    )

}

export default Selector;