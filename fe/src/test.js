import React from 'react';
import ReactDOM from 'react-dom';
import Selector from './components/selector';
import WeatherPanel from './components/WeatherPanel';
import ForecastPanel from './components/ForecastPanel';


it('renderiza selector', ()=>{
    const div= document.createElement('div');
    ReactDOM.render(<Selector/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renderiza componente de tiempo actual', ()=>{
    const div= document.createElement('div');
    ReactDOM.render(<WeatherPanel city="Salta"/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renderiza componente de pronóstico', ()=>{
    const div= document.createElement('div');
    ReactDOM.render(<ForecastPanel city="Salta"/>, div);
    ReactDOM.unmountComponentAtNode(div);
})