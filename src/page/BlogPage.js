import React from 'react'
import Header from '../container/Header'
import Footer from '../container/Footer'
import PageText from '../container/PageText'
import { Container } from 'react-bootstrap'

export default () => {
    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <Header />
                <Container fluid>
                    <PageText text="SOLITAIRE100 BLOG COMING SOON!" />
                </Container>
            </main>
            <Footer />
        </div>
        
    )
}