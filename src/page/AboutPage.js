import React from 'react'
import Header from '../container/Header'
import Footer from '../container/Footer'
import { Container } from 'react-bootstrap'
import PlainContent from '../component/PlainContent'

export default () => {
    return (
        <div className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <Header />
                <Container className="howto-section">
                    <PlainContent>
                        <h2><strong>ABOUT SOLITAIRE100</strong></h2>
                        <p>SOLITAIRE100 is a new, fun, fresh website with free solitaire card games for everyone to enjoy. Please don’t hesitate to send us an email if anything isn’t working or if you have any suggestions!</p>
                        <p>
                            SOLITAIRE100<br />
                            <a href="mailto:solitaire.100@outlook.com">solitaire.100@outlook.com</a>
                        </p>
                        <p><i>By using this site, you agree to the Cookies Policy, Privacy Policy, and Terms and Conditions.</i></p>
                    </PlainContent>
                </Container>
            </main>
            <Footer />
        </div>
    )
}