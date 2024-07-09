import Container from '@/components/container'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 bg-gray-200 mb-4 md:mb-6 xl:mb-8 fixed top-0 left-0 right-0 w-full z-10" data-scroll data-scroll-sticky data-scroll-target="#scroll-container">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="font-horizon text-3xl text-dark-gray">
            KONTUR
          </Link>

          <nav>
            <ul className="flex space-x-6 font-agrandir-narrow-regular text-dark-gray">
              <li>
                <Link href="/" className="text-blue hover:underline">
                  SALON
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-blue hover:underline">
                  TEAM
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-blue hover:underline">
                  BOOK NOW
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}