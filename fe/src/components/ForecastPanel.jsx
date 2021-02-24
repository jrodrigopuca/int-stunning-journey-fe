import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ForecastPanel extends Component{
    constructor(){
        super();
        this.state={
            data:null
        }
    }

    componentDidMount(){
        this._loadData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.city !== this.props.city){
            this._loadData();
        }    
    }

    /**
     * @function _loadData
     * @description  cargar datos desde el api considerando la ciudad actual o seleccionable
     */
    _loadData(){
        const city=this.props.city==='Actual'?'':this.props.city;

        fetch(`http://localhost:3001/v1/forecast/${city}`)
            .then(response=>response.json())
            .then(myJSON=>{
                if (myJSON.result){this.setState({data:myJSON.data})}
            })
    }

    /**
     * @function _showForecast
     * @param {*} item elemento del array del forecast
     * @param {*} index índice, me sirve para saber que día es.
     * @returns un item que muestra el pronósitico para un día
     */
    _showForecast(item, index){
        const dias=["Hoy", "Mañana", "Pasado mañana"];
        return(
            <React.Fragment>
                <h4>{dias[index]}</h4>
                <img src={item.icon} alt="imagen"/>
                <p>Temperatura máx: {item.maxTemp}° C</p>
                <p>Temperatura min: {item.minTemp}° C</p>
                <p>Condición: {item.condition}</p> 
            </React.Fragment>
        )
    }

    render(){
        const {data}=this.state;
        return(
            <React.Fragment>
                {data?(
                <div>
                    <p>{data.city} - {data.region} en {data.country}</p>
                    <h1>Tiempo Ahora</h1>
                    <section>
                        <img src={data.icon} alt="imagen"></img>
                        <p>Clima hoy: {data.weather}</p>
                        <p>Temperatura: {data.temperature}° C</p>
                        <p>Última actualización: {data.lastUpdate}</p>
                    </section>

                    <h1>Pronóstico</h1>
                    <section>
                        {data.forecast.map(this._showForecast)}
                    </section>
                </div>):'Cargando..'}

            </React.Fragment>
        )
    }
}

ForecastPanel.propTypes={
    city: PropTypes.string
}

export default ForecastPanel;
