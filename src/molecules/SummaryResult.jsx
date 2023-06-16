import { styled } from "styled-components";
import Skill from "../atoms/Skills";
import data from '../../data.json';
import Button from "../atoms/Button";

const Container = styled.div`
    padding: 2em;

    @media(min-width: 768px) {
        width: 50%;
    }
`

const Title = styled.h4`
    font-weight: 18px;

    @media(min-width: 768px) {
        font-size: 22px;
    }
`

const SkillsContainer = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
`

export default function SummaryResult() {
    return (
        <>
            <Container>
                <Title>Summary</Title>
                <SkillsContainer>
                    {data.map((data, index) => {
                        return <Skill key={index} color={data.color} bgcolor={data["bg-color"]} num={data.score} title={data.category} delay={index + 0.3} />
                    })}
                    <Button>Continue</Button>
                </SkillsContainer>
            </Container>
        </>
    )
}