import React, { Component } from 'react'
import './pageText.css'

export default class PageText extends Component {
    
    render() {
        return (
            <div className="page-simple-content">
                <div className="page-text">{this.props.text}</div>
            </div>
        )
    }
}