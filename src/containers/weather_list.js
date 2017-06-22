import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {

    renderWeather(cityData){

        const temps=cityData.list.map((weather)=>weather.main.temp);
        const pressures=cityData.list.map((weather)=>weather.main.pressure);
        const humidities=cityData.list.map((weather)=>weather.main.humidity);

        return(
            <tr key={cityData.city.name}>
                <th>{cityData.city.name}</th>
                <th>
                   <Chart data={temps} color="red"/> 
                </th>
                <th>
                   <Chart data={pressures} color="green"/> 
                </th>
                <th>
                   <Chart data={humidities} color="blue"/> 
                </th>
            </tr>
        )
    }
    
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        weather:state.weather
        
    };
}

export default connect (mapStateToProps)(WeatherList);