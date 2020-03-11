import React from 'react'

export default function Weather(props) {

    if (props.weatherdata) {
        let icon = 'http://openweathermap.org/img/wn/' + props
            .weatherdata
            .weather[0]
            .icon + '@2x.png';
        return (
            <div>
                <h1 id='location'>weather at: {props.weatherdata.name}</h1>
                <h1 id='description'>{props.weatherdata.weather[0].description}</h1>
                <img src={icon} alt='icon'/>
                <h1 id='temp-feels'>The temperature is {props.weatherdata.main.temp}&#8457;</h1>
                <h1 id='temp-feels'>the temperature Feels like {props.weatherdata.main.feels_like}&#8457;</h1>
                <h1 id='min-max'>Todays minimum: {props.weatherdata.main.temp_min}&#8457;</h1>
                <h1 id='min-max'>Todays maximumn: {props.weatherdata.main.temp_min}&#8457;</h1>

            </div>
        )
    } else {
        return (<h1>Search by zip or city name for the weather</h1>)
    }
}