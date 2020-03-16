import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import history from '../utils/history'
import './footer.css'

export default class Footer extends Component {
    
    goTo = (e) => {
        e.preventDefault()
        history.forward(e.target.getAttribute("href"))
    }

    render() {
        return (
            <Navbar variant="dark" className="mt-auto">
                <Nav className="navbar-nav text-center w-100 footer-menu justify-content-end">
                    <Nav.Link href="/about" onClick={this.goTo} className="menu-item">About</Nav.Link>
                    <Nav.Link href="/blog" onClick={this.goTo} className="menu-item">Blog</Nav.Link>
                    <Nav.Link href="/cookies" onClick={this.goTo} className="menu-item">Cookies</Nav.Link>
                    <Nav.Link href="/privacy" onClick={this.goTo} className="menu-item">Privacy</Nav.Link>
                    <Nav.Link href="/terms" onClick={this.goTo} className="menu-item">Terms</Nav.Link>
                </Nav>
          </Navbar>
        )
    }
}