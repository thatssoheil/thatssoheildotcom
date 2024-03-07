import Link from 'next/link'
import { Paragraph } from '../core/Typography'
import BarcodeTransition from './BarcodeTransition'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {

    return (
        <header className='*:flex-1 flex justify-between items-center w-full py-6 px-4 bg-black fixed top-0 z-50'>
            <Logo/>
            <BarcodeTransition/>
            <Nav/>
        </header>
    )
}

export default Header