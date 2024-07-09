import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="KONTUR Salon" />

      <Header />


      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="bg-off-white"
        >
          <Container>
            <m.article variants={fade} className="relative">
              {/* <div className="aspect-video w-full">
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
              </div> */}
            </m.article>
          </Container>
        </m.main>
      </LazyMotion>

      {/* <Footer className="bg-off-white text-dark-gray font-agrandir-narrow-regular" /> */}
    </Layout>
  )
}