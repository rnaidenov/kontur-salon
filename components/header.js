import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/container';
import Link from 'next/link';

const NavItem = ({ href, children, isActive, onHover, isExternal }) => {
  const LinkComponent = isExternal ? 'a' : Link;
  const linkProps = isExternal ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

  return (
    <li className="text-dark-gray hover:text-blue" onMouseEnter={() => onHover(href)} onMouseLeave={() => onHover(null)}>
      <LinkComponent {...linkProps} className="text-dark-gray hover:text-blue">
        <motion.span
          className="relative"
          whileHover="hover"
          animate={{
            opacity: isActive ? 1 : 0.5
          }}
          transition={{ duration: 0.6, ease: 'circIn' }}
        >
          {children}
          <motion.div
            className="absolute left-0 -bottom-2 h-[1px] bg-blue opacity-0"
            initial={{ width: 0 }}
            variants={{
              hover: { width: '100%', opacity: 1 }
            }}
            transition={{ duration: 0.4, ease: 'circOut' }}
          />
        </motion.span>
      </LinkComponent>
    </li>
  );
};

export default function Header() {
  const [activeItem, setActiveItem] = useState(null);

  const navItems = [
    { href: '/', label: 'SALON' },
    { href: '/team', label: 'TEAM' },
    { href: 'https://www.fresha.com/a/kontur-salon-sofia-ulitsa-lyuben-karavelov-24-c3i43yw2', label: 'BOOK NOW', isExternal: true }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-off-white py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="font-horizon text-3xl text-dark-gray">
            KONTUR
          </Link>

          <nav>
            <ul className="flex space-x-6 font-greycliff-medium text-dark-gray">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  isActive={activeItem == null || activeItem === item.href}
                  onHover={setActiveItem}
                  isExternal={item.isExternal}
                >
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </motion.header>
  );
}