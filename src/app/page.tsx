import Footer from './components/Footer';
import Hero from './components/Hero';
import Section from './components/Section';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />

      <div className='section-divider mb-16' />

      <Section title='Who I Am'>
        <p className='text-ink/90 max-w-lg leading-[1.72]!'>
          I’m a frontend developer who creates with clarity, empathy, and steady curiosity. I approach problems through
          simple structures, clear thinking, and a focused, adaptive way of improving things. I explore small joys —
          stickers, Spanish, leadership, baking, psychology — and I grow through thoughtful work, gentle
          experimentation, and the tiny worlds I create along the way.
        </p>
      </Section>

      <div className='section-divider mb-16 md:mb-24' />

      <Section title='What I Make'>
        <div className='max-w-lg space-y-6'>
          <div>
            <h3 className='mb-3'>Frontend Development</h3>
            <p>
              I create clear, dependable frontends built on simple structures and readable logic. I care about making
              things work in a way that feels intuitive, stable, and free of unnecessary complexity.
            </p>
          </div>

          <div>
            <h3 className='mb-3'>Problem Solving with Empathy</h3>
            <p>
              I approach problems through simple structures, clear thinking, and a focused, adaptive way of improving
              things. Good solutions come from understanding — not just the code, but the people and context behind it.
            </p>
          </div>

          <div>
            <h3 className='mb-3'>Tiny Creative Worlds</h3>
            <p>
              I like exploring small ideas that quietly grow into their own little worlds — like the Toffee & Rozi
              universe. These tiny spaces help me stay curious, creative, and connected to the softer side of making
              things.
            </p>
          </div>
        </div>
      </Section>

      <div className='section-divider mb-16 md:mb-24' />

      <Section title='Selected Work'>
        <div className='max-w-lg space-y-8 md:space-y-10'>
          <div>
            <h3 className='mb-3'>Creative Projects</h3>
            <p>
              I like exploring small creative ideas that quietly grow into little worlds — like the Toffee & Rozi
              universe. Most of my projects begin as simple curiosities and become playful spaces with their own rhythm
              and personality.
            </p>
          </div>
          <div>
            <h3 className='mb-3'>Refactoring, Tools & Human-Centered Engineering</h3>
            <p>
              I enjoy improving existing systems — refactoring messy parts, simplifying flows, and creating small tools
              that make life easier for people. Some of these have grown into widely used projects, like Steam Library
              Manager. What matters to me is clarity, usefulness, and helping others through better structure.
            </p>
          </div>
        </div>
      </Section>

      <div className='section-divider mb-16 md:mb-24' />

      <Section title='How I Grow' className='pb-32! md:pb-[200px]!'>
        <div className='max-w-lg space-y-4'>
          <p>
            I’m shaped by small things — the quiet moments, the subtle shifts, and the lessons that grow slowly over
            time. I try to move in ways that feel honest, without rushing what needs space.
          </p>
          <ul className='text-ink/60 list-none space-y-1.5 md:space-y-2'>
            <li className="before:text-ink/50 before:mr-3 before:content-['-']">I grow where I care</li>
            <li className="before:text-ink/50 before:mr-3 before:content-['-']">paying attention, softly</li>
          </ul>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
