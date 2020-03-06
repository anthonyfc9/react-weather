import React from 'react'

export default function Weather(props) {
    if (props.weatherdata) {
        return (
            <div>
            <h1>weather at the:{props.weatherdata.name}</h1>
            <img src='/icons/clear.svg' alt='icon'/>
        <h1>{props.weatherdata.main.temp}&#8457;</h1>
            <h1>{props.weatherdata.main.feels_like}&#8457;</h1>
            <h3>todays minimum:{props.weatherdata.main.temp_min}&#8457;</h3>
            <h3>todays maximumn:{props.weatherdata.main.temp_min}&#8457;</h3>

            </div>            
        )
    } else {
        return (<h1>search for a place for weathers
        </h1>)
    }
}
