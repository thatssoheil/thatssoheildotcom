import { Heading } from '@/components/core/Typography'

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center h-screen py-24'>
        <Heading className='text-center'>{`I'm`} busy building something awesome!</Heading>
        <Heading>Come back later.</Heading>
      </div>
    </main>
  )
}
