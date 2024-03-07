import Button from '@/components/core/Button'
import Link from 'next/link'

import { Paragraph } from '@/components/core/Typography'
import { Fa4, Fa0 } from 'react-icons/fa6'

export default function NotFound() {
    return (
        <main>
            <div className='flex flex-col items-center justify-center h-screen'>
                <div
                    style={{ zIndex: -1 }}
                    className='
                        flex
                        absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        m:*:text-8xl d:*:text-9xl *:text-white *:opacity-25
                    '>
                    <Fa4/>
                    <Fa0/>
                    <Fa4/>
                </div>
                <Paragraph className='text-center'>
                    The page {`you're`} looking for is part of the system.<br/>
                    A system that enslaves you.<br/>
                    A system that you must escape.
                </Paragraph>
                <div className='w-32 my-8'>
                    <Link href={'/'}>
                        <Button>
                            {`< Escape />`}
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}