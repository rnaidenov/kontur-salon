import { useRef } from 'react'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="KONTUR Salon" />

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>
            <Header />

            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <m.main variants={fade} className="bg-off-white">
                  <Container>
                    <m.article variants={fade} className="relative">
                      <div className="aspect-video w-full">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          <source src="/path-to-your-video.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="text-off-white bg-dark-gray bg-opacity-50 rounded-full p-4">
                            ▶
                          </button>
                        </div>
                      </div>
                    </m.article>
                  </Container>
                </m.main>

                <m.div variants={fade}>
                  <Footer className="bg-off-white text-dark-gray font-agrandir-narrow-regular" />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}