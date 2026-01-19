import React, { useRef, useEffect, useState, useMemo } from "react";
import moonImg from '../assets/moon.svg'
import sunImg from '../assets/sun.svg'
import starImg from '../assets/star.svg'
import cometImg from '../assets/comet.svg'

function useMemoryGame() {
    const cardsData = [
        { cardType: "Moon", imgSource: moonImg },
        { cardType: "Sun", imgSource: sunImg },
        { cardType: "Star", imgSource: starImg },
        { cardType: "Comet", imgSource: cometImg }
    ]

    function shuffleCards(cards) {
        const shuffledCards = [...cards];
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        return shuffledCards;
    }

    const [cards, setCards] = useState(() => shuffleCards(cardsData.concat(cardsData)));
    const [gameCompleted, setGameCompleted] = useState(false);
    const [flippedCards, setFlippedCards] = useState([])
    const [isMatch, setIsMatch] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [matchedCards, setMatchCards] = useState([])
    const timeout = useRef(null);


    const handleSelectCard = (index) => {
        if (flippedCards.length === 1) {
            setFlippedCards((prev) => [...prev, index]);
        } else {
            clearTimeout(timeout.current);
            setFlippedCards([index]);
        }
    };

    const verifyIsPaired = () => {
        const [first, second] = flippedCards;
        if (cards[first].cardType === cards[second].cardType) {
            const newMatchedCards = [...matchedCards, cards[first], cards[second]];
            setMatchCards(newMatchedCards);
            setFlippedCards([]);
            setIsMatch(true);
            // Optional: Only show modal on game complete, not every match. 
            // For now, let's keep it less intrusive or remove modal for simple matches if desired.
            // keeping existing behavior but cleaning it:
            setShowModal(true); 
        } else {
            setIsMatch(false);
            // User feedback: Wait a bit then flip back
            timeout.current = setTimeout(() => {
                setFlippedCards([]);
            }, 1000); 
        }
    };

    useEffect(() => {
        if (flippedCards.length === 2) {
            // Prevent immediate verify to allow user to see the second card
            const timer = setTimeout(verifyIsPaired, 500);
            return () => clearTimeout(timer);
        }
    }, [flippedCards]);

    const isCardFlipped = useMemo(() => {
        return (index) => flippedCards.includes(index) || matchedCards.includes(cards[index]);
    }, [flippedCards]);

    // useEffect(() => {
    //     setFlippedCards([])
    // },[showModal]);

    const isGameCompleted = () => {
        return matchedCards.length === cards.length;
    }

    useEffect(() => {
        setGameCompleted(isGameCompleted());
    }, [matchedCards]);



    return {
        cards,
        handleSelectCard,
        isCardFlipped,
        isMatch,
        setIsMatch,
        showModal,
        setShowModal,
        setFlippedCards,
        gameCompleted,
    }
}

export default useMemoryGame;
