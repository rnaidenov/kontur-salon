// pages/team.tsx
import { useRef, useState, useEffect } from 'react';
import Layout from '@/components/layout'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'framer-motion'
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Vlado',
    role: 'Founder & Master Stylist',
    image: '/images/vlado.webp',
    description: 'Renowned for his precision cuts and innovative styling, our Creative Director and Founder at Kontur Salon blends bold creativity with minimalistic elegance. He specializes in personalized transformations that enhance your unique features, ensuring every look is both ambitious and effortlessly chic.'
  },
  {
    name: 'Tsveti',
    role: 'Founder & Master Stylist',
    image: '/images/tsveti.webp',
    description: "With a vision that transcends trends, Tsveti brings a unique blend of creativity and precision to every cut, color, and style. Her expertise and passion for hair design make her an industry leader, transforming clients' looks with bold confidence and minimalistic elegance."
  },
  {
    name: 'Dimi',
    role: 'Master Hairartist',
    image: '/images/dimi.webp',
    description: 'Dimi is a master of transformation and innovation in hairdressing. His approach blends craft and artistry to create styles that are both bold and timeless. With a keen eye for detail and a passion for creative expression, Dimi turns every haircut into a unique masterpiece.'
  }
];

export default function Team() {
  const scrollRef = useRef(null);
  const [showMeet, setShowMeet] = useState(false);
  const [showThe, setShowThe] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    if (locomotiveScroll) {
      locomotiveScroll.on('scroll', (obj) => {
        const { scroll, limit } = obj;
        const progress = scroll.y / limit.y;
        setScrollProgress(progress);
        console.log('Scroll Progress:', progress);

        if (progress > 0.05) setShowMeet(true);
        if (progress > 0.1) setShowThe(true);
        if (progress > 0.15) setShowTeam(true);
      });
    }
  }, [locomotiveScroll]);

  useEffect(() => {
    console.log('showMeet:', showMeet);
    console.log('showThe:', showThe);
    console.log('showTeam:', showTeam);
  }, [showMeet, showThe, showTeam]);

  const imageTransform = `translateY(${Math.min(0, (scrollProgress - 0.2) * -100)}vh)`;
  const imageOpacity = 1 - Math.min(1, Math.max(0, (scrollProgress - 0.2) / 0.3));
  const textOpacity = scrollProgress <= 0.4 ? 1 : 1 - Math.min(1, Math.max(0, (scrollProgress - 0.4) / 0.1));

  return (
    <Layout title="KONTUR Team">
      <div
        className="fixed inset-0 z-0 w-1/2 left-1/4"
        style={{
          transform: imageTransform,
          opacity: imageOpacity,
          top: "80px"
        }}
      >
        <Image
          className='w-full h-full m-auto object-cover'
          src="/images/team.jpg"
          height={800}
          width={1200}
          alt="KONTUR Team"
        />
      </div>
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center"
        style={{ opacity: textOpacity }}
      >
        <h1 className="text-8xl font-greycliff-bold text-white">
          {showMeet && <span className="block">Meet</span>}
          {showThe && <span className="block">The</span>}
          {showTeam && <span className="block">Team</span>}
        </h1>
      </div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.025,
          smartphone: { smooth: true },
          tablet: { smooth: true }
        }}
        containerRef={scrollRef}
        watch={[]}
        onUpdate={(scroll) => setLocomotiveScroll(scroll)}
      >
        <div
          data-scroll-container
          ref={scrollRef}
          className="snap-y snap-mandatory overflow-y-scroll"
        >
          <section className='h-[200vh] w-full' data-scroll-section />

          {/* Team members section */}
          <LazyMotion features={domAnimation}>
            {teamMembers.map((member, index) => (
              <section
                key={member.name}
                data-scroll-section
                className="h-screen flex items-center justify-center py-16 snap-center"
              >
                <div className="max-w-6xl w-full flex flex-row items-start space-x-12">
                  <div
                    className="w-1/2"
                    data-scroll
                    data-scroll-speed="1"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div
                    className="w-1/2 pt-12"
                    data-scroll
                    data-scroll-speed="2"
                  >
                    <h2 className="font-greycliff-bold text-5xl mb-2">{member.name}</h2>
                    <h3 className="font-greycliff-medium text-2xl text-gray-600 mb-6">{member.role}</h3>
                    <p className="font-greycliff-medium text-lg leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </section>
            ))}
          </LazyMotion>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}