import { styled } from "styled-components";
import { motion } from "framer-motion";
import ScoreResult from "../molecules/ScoreResult";
import SummaryResult from "../molecules/SummaryResult";
import { useState, useEffect } from "react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 768px) {
        height: 100vh;
    }
`

const Card = styled.div`
    @media(min-width: 768px) {
        border-radius: 2em;
        box-shadow: 0 1em 1em hsla(256, 72%, 46%, 30%);
        display: flex;
        align-items: stretch;
        width: 700px;
    }
`

export default function Summary() {
    const [score, setScore] = useState(0)

    useEffect(() => {
        if (score < 76)
            setScore(score + 1)
    }, [score])

    return (
        <>
            <Container>
                <Card as={ motion.div } initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                    <ScoreResult score={ score } />
                    <SummaryResult score={ score } />
                </Card>
            </Container>
        </>
    )
}