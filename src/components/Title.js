import React, { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <div>
                <h1 className= " title-container__title">Weather Finder</h1>
                <p className= " title-container__subtitle">Find Out Temperature,Conditions and more...</p>
            </div>
        )
    }
}
export default Title;