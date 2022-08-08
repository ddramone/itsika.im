import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="my-10">
      <Link href="/">
        <Image src="/favicon/invader.svg" width={55} height={55} />
      </Link>
    </header>
  )
}

export default Header
