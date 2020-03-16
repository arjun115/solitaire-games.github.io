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
                    <p>SOLITAIRE100 Spider Solitaire is a free Solitaire card game.</p>
                    <p>Use the ‘Options’ button to choose between Spider Solitaire One Suit, Spider Solitaire Two Suits, and Spider Solitaire Four Suits.</p>
                    <h2><strong>HOW TO PLAY SOLITAIRE100 SPIDER SOLITAIRE:</strong></h2>
                    <h3>Objective</h3>
                    <p>The objective of Spider Solitaire is to create eight sequences of the same suit, starting with King and ending with Ace. The sequences are set aside to the foundations once completed.</p>
                    <h3>Building the sequences</h3>
                    <p>Beginning with the ten tableau columns, face-up cards can be placed on top of each other to build sequences if they are the same suit and have a value of one less. Each completed sequence starts with King and ends with Ace. The face-down cards in the ten tableau columns will automatically turn over when they are at the top of the pile.</p>
                    <p>Continue placing the face-up cards on top of each other in order on the tableau. When a sequence is completed, it will be moved to one of the eight foundations. Any card or sequence can be placed in an empty column. The deck on the top left is used to turn over ten cards which are placed at the top of each column. Empty columns must be filled before new cards can be dealt.</p>
                    <h3>Spider Solitaire Two Suits and Spider Solitaire Four Suits</h3>
                    <p>Spider Solitaire Two Suits and Spider Solitaire Four Suits follow the rules above. In addition, face-up cards on the tableau columns can be placed on top of each other if they are the alternate colour and have a value of one less.</p>
                    </PlainContent>
                    <PlainContent />
                </Container>
            </main>
            <Footer />
        </div>
    )
}