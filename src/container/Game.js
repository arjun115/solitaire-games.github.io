import React, { Component } from 'react'
import GameCanvasComponent from '../component/GameCanvasComponent'

export default class Game extends Component {
    
    render() {
        return (<GameCanvasComponent type={this.props.type} />)
    }
}