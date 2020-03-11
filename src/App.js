import React from 'react';
import Welcome from './Components/Welcome.js'
import Form from './Components/Form.js'
import Weather from './Components/Weather'
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            weatherdata: null
        }
    }
    getlink = (city, zip) => {
        if (city) {
            return (
                'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',us&units=imperi' +
                'al&appid='
            )
        } else {
            return (
                'https://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&units=imper' +
                'ial&appid='
            )
        }
    }

    apiCall = (event) => {

        event.preventDefault();
        const API_KEY ='5512d18505fd81c34dd3a281d9215947';
        let city = event.target.elements.cityName.value;
        let zip = event.target.elements.zipCode.value;
        let link = this.getlink(city, zip) + API_KEY;
        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("data: ", data);
                this.setState({weatherdata: data})
            })
            .catch(err => console.error("fetch error: ", err));
    }

    render() {

        return (
            <div className="App">
                <Welcome/>
                <div className='overflows'>
                <Form fetch={this.apiCall}/>
                <Weather weatherdata={this.state.weatherdata}/>
                </div>
            </div>
        )
    }
}

export default App;
