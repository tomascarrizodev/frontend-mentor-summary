import { useState } from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import imgs from './Imgs' 

const Container = styled.div`
    background-color: ${props => props.bgcolor};
    border-radius: 0.8em;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 1em;
`

const SVG = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`

const Title = styled.span`
    color: ${props => props.color};
`

const ScoreContainer = styled.div`
    margin-left: auto;
`

const Score = styled.span`
    color: #333;
    font-weight: 700;
    margin-right: 8px;
`

const Bar = styled.span`
    font-weight: 700;
    margin-right: 8px;
    color: #bbb;
`

const Total = styled.span`
    color: #bbb;
    font-weight: 700;
`

export default function Skill({ num, title, delay, ...rest }) {
    return (
        <>
            <Container { ...rest } as={ motion.div } initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: delay }}>
                <SVG>
                    <img src={ imgs[title] } alt={`Icon-${title}`}></img>
                </SVG>
                <Title { ...rest }>{title}</Title>
                <ScoreContainer>
                    <Score>{num}</Score>
                    <Bar>/</Bar>
                    <Total>100</Total>
                </ScoreContainer>
            </Container>
        </>
    )
}