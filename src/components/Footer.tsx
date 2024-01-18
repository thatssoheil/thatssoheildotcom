import { Paragraph } from './core/Typography';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className='
        bg-black 
        p-4 
        border-t 
        fixed bottom-0 
        w-full 
        z-50 
        flex justify-between items-center
        *:flex-1
      '>
      <Paragraph className='text-left text-xs'>Thatssoheil {year} &copy;</Paragraph>
      <Paragraph className='text-right text-xs'>{'Developed w/ love by thatssoheil'}</Paragraph>
    </footer >
  )
}

export default Footer