import React from "react"
import GlobalStyles from "@/styles/GlobalStyles"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )
}

export default Layout