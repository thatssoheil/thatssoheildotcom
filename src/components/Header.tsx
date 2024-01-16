import { Libre_Barcode_128 } from 'next/font/google'

const libre = Libre_Barcode_128({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const Header = () => {
  return (
    <header className='bg-black p-4 fixed top-0 w-full z-50 flex justify-between items-start'>
      <div className='w-48 h-10 border flex justify-center items-center'>
        <p className='text-white'>Logo</p>
      </div>
      <div className='flex justify-center items-center mt-1.5'>
        <h1 className={`${libre.className} text-white text-5xl text-center leading-none`}>
          THATSSOHEIL
        </h1>
      </div>
      <div className='w-48 h-10 border flex justify-center items-center'>
        <p className='text-white'>Navigation</p>
      </div>
    </header>
  );
}

export default Header;