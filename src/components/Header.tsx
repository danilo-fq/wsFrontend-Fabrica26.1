import Image from 'next/image'
import Link  from 'next/link'


export const Header = () => {
  return (
    <header>
      <div className='flex items-center p-3 gap-2 bg-bg-300'>
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="Rick and Morty Portal Gun favicon"
            width={35}
            height={35}
          />
        </Link>
        <h1>R&M Portal Gun</h1>
      </div>
    </header>
  );
}