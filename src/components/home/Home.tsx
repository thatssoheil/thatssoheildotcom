'use client'

import tw, { styled } from 'twin.macro'

const Home = () => {
    return (
        <Container>
            <Title>Coming Soon</Title>
        </Container>
    )
}

const Title = styled.h1`
    ${tw`text-4xl font-bold`}
`

const Container = styled.div`
    ${tw`flex justify-center items-center h-screen`}
`

export default Home