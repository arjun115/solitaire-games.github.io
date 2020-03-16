import React from 'react'
import Header from '../container/Header'
import Game from '../container/Game'
import Footer from '../container/Footer'
import { Container } from 'react-bootstrap'

export default () => {
    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <Header />
                <Container fluid>
                    <Game type="spider" />
                </Container>
            </main>
            <Footer />
        </div>
    )
}