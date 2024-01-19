import Link from 'next/link'
import { Paragraph } from '../core/Typography'
import Button from '../core/Button'


const Nav = () => {
    return (
        <div className='h-9 gap-6 flex justify-end items-center'>
            {/* <Link href={'/vault'}>
                <Paragraph clickable>Vault</Paragraph>
            </Link>
            <Link href={'/about'}>
                <Paragraph clickable>About</Paragraph>
            </Link> */}
            <div className='w-32 m:hidden t:block d:block'>
                <Button>
                    <Link href={'https://www.linkedin.com/in/soheilfakour/'}>
                        Connect
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Nav