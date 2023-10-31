'use client'

import React from "react"
import GlobalStyles from "@/styles/GlobalStyles"
import tw, { styled } from "twin.macro"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )
}

const Header = styled.header`
    ${tw`flex justify-between items-center`}
`

const Container = styled.div`
    ${tw`flex justify-center items-center h-screen`}
`

export default Layout