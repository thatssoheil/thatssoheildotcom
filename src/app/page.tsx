import { Heading, Paragraph } from '@/components/core/Typography'
import { FaAnglesDown } from 'react-icons/fa6'
import Button from '@/components/core/Button'
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <div className='flex flex-col items-center justify-center h-screen py-24 px-4'>
                <Heading className='text-center'>{`I'm`} busy building something awesome!</Heading>
                <Paragraph>Come back later.</Paragraph>
                <div className={'my-12 animate-bounce'}>
                    <FaAnglesDown className='text-2xl text-white'/>
                </div>
                <Paragraph>Meanwhile</Paragraph>
                <Paragraph>
                    Connect with me on <span className={'font-black text-gray-50'}>LinkedIn</span> below
                </Paragraph>
                <div className='w-32 my-2'>
                    <Button>
                        <Link href={'https://www.linkedin.com/in/soheilfakour/'}>
                            Connect
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
