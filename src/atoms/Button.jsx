import { styled } from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Btn = styled.button`
    border-radius: 2em;
    background: linear-gradient(hsl(224, 30%, 27%), #4e21caee, #2421caee);
    background-size: 1px 400px;
    color: #fff;
    border: none;
    padding: 1em;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    transition: background .5s;

    &:hover {
        background-position: 500px; 
    }

    @media(min-width: 768px) {
        margin-top: 1em;
    }
`

export default function Button() {
    return (
        <>
            <Container>
                <Btn>Continue</Btn>
            </Container>
        </>
    )
}