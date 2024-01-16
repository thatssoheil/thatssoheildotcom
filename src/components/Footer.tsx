const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-black p-4 border-t fixed bottom-0 w-full z-50 flex justify-between items-center'>
      <p className='text-white'>Thatssooheil {year} &copy;</p>
      <p className='text-white'>Developed w/ love</p>
    </footer>
  )
}

export default Footer