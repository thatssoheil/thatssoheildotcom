import { Heading, Paragraph } from '@/components/core/Typography'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center h-screen py-24'>
        <Heading className='text-center'>{`I'm`} busy building something awesome!</Heading>
        <Paragraph>Come back later.</Paragraph>
      </div>
    </main>
  )
}
