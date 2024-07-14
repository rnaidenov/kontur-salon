import { NextSeo } from 'next-seo';
import Header from './header';
import { motion } from 'framer-motion';

export default function Layout({ children, title }) {
  return (
    <>
      <Header />
      <NextSeo title={title} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.main>
    </>
  )
}