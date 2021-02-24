import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WeatherPanel extends Component{
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

        fetch(`http://localhost:3001/v1/current/${city}`)
            .then(response=>response.json())
            .then(myJSON=>{
                if (myJSON.result){this.setState({data:myJSON.data})}
            })
    }

    render(){
        const {data}=this.state;
        return(
            <React.Fragment>
                {data?(
                <div>
                    <p>{data.city} - {data.region} en {data.country}</p>
                    <section>
                        <img src={data.icon} alt="imagen"></img>
                        <p>Clima hoy: {data.weather}</p>
                        <p>Temperatura: {data.temperature}° C</p>
                        <p>Última actualización: {data.lastUpdate}</p>
                    </section>
                </div>):'Cargando..'}

            </React.Fragment>
        )
    }
}

WeatherPanel.propTypes={
    city: PropTypes.string
}

export default WeatherPanel;
