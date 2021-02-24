import { render, screen } from '@testing-library/react';
import App from './App';
import Selector from './components/selector';
import WeatherPanel from './components/WeatherPanel';
import ForecastPanel from './components/ForecastPanel';

describe('Probar Selector', ()=>{
  test('renderiza selector', ()=>{
    render(<Selector/>);
    screen.debug();
  })
})

describe('Probar carga de Panel Clima', ()=>{
  test('renderizar', ()=>{
    render(<WeatherPanel city="Salta"/>);
    screen.debug();
  })
})

describe('Probar carga de Panel Pronóstico', ()=>{
  test('renderizar', ()=>{
    render(<ForecastPanel city="Salta"/>);
    screen.debug();
  })
})

