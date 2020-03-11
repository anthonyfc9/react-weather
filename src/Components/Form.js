import React from 'react';

export default class Form extends React.Component {

    render() {

        return (
            <form onSubmit={this.props.fetch}>
                <input placeholder='search by city' name='cityName'/>
                <input placeholder='search by zip' name='zipCode'/>
                <button >Search</button>
            </form>
        )
    }
}
