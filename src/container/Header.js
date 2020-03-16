import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import history from '../utils/history'
import './header.css'

export default class Header extends Component {

    isCurrent(path) {
        let current = path === history.api.location.pathname
        return current ? ' current' : ''
    }

    goTo = (e) => {
        e.preventDefault()
        history.forward(e.target.getAttribute("href"))
    }

    render() {
        return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="align-items-stretch">
            <Navbar.Brand>
              <img  onClick={() => history.forward('/')}
                src="/logo.png"
                className="img-fluid logo"
                alt="SOLITAIRE100 Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between align-items-stretch w-100">
                <Nav className="menu-items navbar-nav mx-auto text-center align-items-center">
                    <Nav.Link href="/game/classic" onClick={this.goTo} className={"menu-item" + this.isCurrent('/game/classic')}>Classic Solitaire</Nav.Link>
                    <Nav.Link href="/game/spider" onClick={this.goTo} className={"menu-item" + this.isCurrent('/game/spider')}>Spider Solitaire</Nav.Link>
                    <Nav.Link href="/game/freecell" onClick={this.goTo} className={"menu-item" + this.isCurrent('/game/freecell')}>Freecell Solitaire</Nav.Link>
                    <Nav.Link href="/game/pyramid" onClick={this.goTo} className={"menu-item" + this.isCurrent('/game/pyramid')}>Pyramid Solitaire</Nav.Link>
                </Nav>
                <Nav className="flex-row justify-content-center align-items-flex-start flex-nowrap">
                    <Nav.Link rel="noopener" href="https://www.facebook.com/SOLITAIRE100official" target="_blank">
                        <img className="social-icon img-fluid" src="/social/facebook.png" alt="Facebook Link" />
                    </Nav.Link>
                    <Nav.Link rel="noopener" href="https://twitter.com/SOLITAIRE100_" target="_blank">
                        <img className="social-icon img-fluid" src="/social/twitter.png" alt="Twitter Link" />
                    </Nav.Link>
                    <Nav.Link rel="noopener" href="https://www.instagram.com/solitaire100_/" target="_blank">
                        <img className="social-icon img-fluid" src="/social/instagram.png" alt="Instagram Link" />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}