import { styled } from 'styled-components'
import Score from "../atoms/Score";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: linear-gradient(#4e21caee, #2421caee);
    padding: 2em 4em;
    border-radius: 0 0 2em 2em;

    @media(min-width: 768px) {
        border-radius: 2em;
        width: 50%;
        justify-content: space-between;
    }
`

const YourResult = styled.p`
    color: #cccb;
    font-weight: 700;
    margin-bottom: 1em;

    @media(min-width: 768px) {
        font-size: 22px;
    }
`

const Great = styled.h4`
    font-size: 18px;
    color: #FFF;

    @media(min-width: 768px) {
        font-size: 26px;
    }
`

const Description = styled.p`
    color: #cccb;
    font-size: 14px;
    text-align: center;
    font-weight: 700;

    @media(min-width: 768px) {
        font-size: 18px;
    }
`

export default function ScoreResult({ score }) {
    return (
        <>
            <Container>
                <YourResult>Your result</YourResult>
                <Score score={ score } />
                <Great>Great</Great>
                <Description>You score higher than 65% of the people who have taken this tests.</Description>
            </Container>
        </>
    )
}