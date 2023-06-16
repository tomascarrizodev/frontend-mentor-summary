import { motion } from 'framer-motion'
import { styled } from 'styled-components'

const Container = styled.div`
    background: linear-gradient(180deg, #2421ca, #4e21ca00);
    border-radius: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 8em;
    height: 8em;
    padding: 1em;
    margin-bottom: 1em;

    @media(min-width: 768px) {
        width: 12em;
        height: 12em;
    }
`

const MyScore = styled.span`
    font-size: 50px;
    color: #fff;
    font-weight: 900;

    @media(min-width: 768px) {
        font-size: 64px;
    }
`

const TotalScore = styled.span`
    color: #bbbb;
    font-size: 14px;

    @media(min-width: 768px) {
        font-size: 18px;
    }
`

export default function Score({ score }) {
    return (
        <>
            <Container>
                <MyScore as={motion.span} animate={ score == 76 ? { scale: [1, 1.2, 1] } : {}} >{ score }</MyScore>
                <TotalScore>of 100</TotalScore>
            </Container>
        </>
    )
}