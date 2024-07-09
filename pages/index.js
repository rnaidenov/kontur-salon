import { useRef, useEffect } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function Home() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const images = [
    '/images/sample.webp',
    '/images/sample.webp',
    '/images/sample.webp',
    '/images/sample.webp',
  ]

  return (
    <Layout>
      <NextSeo title="KONTUR Salon" />

      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.05,
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef}>
          <Header />

          <LazyMotion features={domAnimation}>
            <m.main
              initial="initial"
              animate="enter"
              exit="exit"
              className="bg-off-white"
            >
              <m.section
                variants={fade}
                className="relative h-screen"
                data-scroll-section
              >
                <m.div style={{ opacity }} className="absolute inset-0">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </m.div>
              </m.section>

              {images.map((image, index) => (
                <m.section
                  key={index}
                  data-scroll-section
                  className="h-screen relative overflow-hidden"
                >
                  <m.img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </m.section>
              ))}
            </m.main>
          </LazyMotion>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}