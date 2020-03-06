import React from 'react'

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
            <h1>Welcome to Raindrops</h1>            
            <h1 className='exactDate'> Today is { Date() }</h1>
    
    
            </div>
        )
    }
}
