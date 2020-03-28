import React from 'react'

export default class Welcome extends React.Component {
    render() {
        let date = new Date();
        return (
            
            
            <div>
                <h1 className='welcome'>Welcome to Raindrops</h1>
                <h1 className='exactDate'>
                    Today is {date.toDateString()}</h1>
            </div>
        )
    }
}