import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-t-neutral-200">
      <Container>
        <div className="font-display py-10 flex flex-col space-y-4">
          <h3 className='text-lg'>Ika Pkhakadze</h3>
          <p className='font-body font-light text-neutral-600'>
            Javascript, Technology, Personal Reflections
          </p>
          <ul className='font-body flex flex-row text-neutral-600 space-x-2'>
            <li><a href="https://www.twitter.com/itsikap">Twitter</a></li>
            <li><a href="mailto:i.pkhakadze@gmail.com">Email</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
