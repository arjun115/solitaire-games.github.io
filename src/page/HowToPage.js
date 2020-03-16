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
                    <p>SOLITAIRE100 Classic Solitaire is a free Solitaire card game. Classic Solitaire is also known as Klondike Solitaire.</p>
                    <p>Use the ‘Options’ button to choose between Classic Solitaire Turn 1 and Classic Solitaire Turn 3.</p>
                    <h2><strong>HOW TO PLAY SOLITAIRE100 CLASSIC SOLITAIRE:</strong></h2>
                    <h3>Objective</h3>
                    <p>The objective of Classic Solitaire is to create four piles of cards, one pile for each suit, in ascending order, starting with Ace and ending with King. The piles are created on the four foundations on the upper right of the game.</p>
                    <h3>Building the piles</h3>
                    <p>Beginning with the seven tableau columns, move single cards onto the four foundations starting with Ace and ending with King. The face-up cards on the tableau columns can be placed on top of each other if they are the alternate colour and have a value of one less. The face-down cards in the seven tableau columns will automatically turn over when they are at the top of the pile.</p>
                    <p>Continue placing the face-up cards on top of each other in order on the tableau while moving single cards into the four foundations if possible. Empty columns on the tableau can be filled with a King of any suit. The deck on the top left is used to turn over cards if you don’t have any more moves. The Turn 1 version will turn over 1 card and the Turn 3 version will turn over 3 cards.</p>
                    </PlainContent>
                    <PlainContent />
                </Container>
            </main>
            <Footer />
        </div>
    )
}