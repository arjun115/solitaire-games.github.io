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
                    <p>SOLITAIRE100 FreeCell Solitaire is a free Solitaire card game.</p>
                    <h2><strong>HOW TO PLAY SOLITAIRE100 FREECELL SOLITAIRE:</strong></h2>
                    <h3>Objective</h3>
                    <p>The objective of FreeCell Solitaire is to create four piles of cards, one pile for each suit, in ascending order, starting with Ace and ending with King. The piles are created on the four foundations on the upper right of the game.</p>
                    <h3>Building the sequences</h3>
                    <p>Using the eight tableau columns, move single cards onto the four foundations starting with Ace and ending with King. There are four “free cells” on the upper left of the game which can hold one card each. Any top card of any column may be moved to an empty free cell, an empty column, its foundation, or moved to build on a tableau column. The tableau must be built by placing cards on top of each other if they are the alternate colour and have a value of one less. Complete or partial tableaus may be moved to build on existing tableaus or empty columns. If you want to move a sequence of cards (in descending order), it depends on how many free cells you have. If you have:</p>
                    <ul>
                        <li>Four empty free cells, you can move a sequence of five cards</li>
                        <li>Three empty free cells, you can move a sequence of four cards</li>
                        <li>Two empty free cells, you can move a sequence of three cards</li>
                        <li>One empty free cell, you can move a sequence of two cards</li>
                    </ul>
                    </PlainContent>
                    <PlainContent />
                </Container>
            </main>
            <Footer />
        </div>
    )
}