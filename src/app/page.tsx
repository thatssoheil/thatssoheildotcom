/** @jsxImportSource @emotion/react */
'use client'
import tw, { styled } from "twin.macro"

export default function Home() {
  return (
    <main>
      <div tw='flex justify-center items-center h-screen'>
        <Title>Coming Soon</Title>
      </div>
    </main>
  )
}

const Title = styled.h1`
  ${tw`text-4xl font-bold text-center`}
`
