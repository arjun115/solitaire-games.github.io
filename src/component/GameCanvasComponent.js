import React, { Component } from 'react'
import './gameCanvas.css'

export default class GameCanvasComponent extends Component {
    
    game = null

    _games = {
        klondike: {
            run: window.createKlondikeGame,
            howToUrl: '/game/classic/tutorial',
            baseURL: '/assets/klondike'
        },
        spider: {
            run: window.createSpiderGame,
            howToUrl: '/game/spider/tutorial',
            baseURL: '/assets/spider'
        },
        freecell: {
            run: window.createFreecellGame,
            howToUrl: '/game/freecell/tutorial',
            baseURL: '/assets/freecell'
        },
        pyramid: {
            run: window.createPyramidGame,
            howToUrl: '/game/pyramid/tutorial',
            baseURL: '/assets/pyramid'
        }
    }

    componentDidMount() {
        let { type } = this.props
        let gameOpts = this._games[type]
        if (gameOpts) {
            setTimeout(() => this._runGame(gameOpts.run, gameOpts.howToUrl, gameOpts.baseURL), 10)
        } else {
            throw Error(`[GameCanvasComponent] Invalid type :: available options [${Object.keys(this._games).join()}]`)
        }
    }

    componentWillUnmount() {
        if (this.game) {
            this.game.destroy(true)
        }
    }

    render() {
        return (
            <div id="game" className="game-canvas"></div>
        )
    }

    _runGame(run, howtoUrl, baseURL) {
        this.game = run({
            onHowTo: () => window.open(howtoUrl, '_blank'),
            baseURL
        })
    }
}