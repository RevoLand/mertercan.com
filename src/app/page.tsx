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
          I create with clarity, empathy, and steady curiosity. I enjoy approaching challenges through thoughtful
          thinking, simple structures, and careful iteration. Outside of work, I explore small joys like stickers,
          Spanish, leadership, baking, and psychology. I grow through gentle experimentation and the tiny worlds I
          create along the way.
        </p>
      </Section>

      <div className='section-divider mb-16 md:mb-24' />

      <Section title='What I Make'>
        <div className='max-w-lg space-y-6'>
          <div>
            <h3 className='mb-3'>Frontends with clarity</h3>
            <p>
              I create frontends with clear structures and readable logic. I care about making things work in ways that
              feel intuitive, stable, and free of unnecessary complexity.
            </p>
          </div>

          <div>
            <h3 className='mb-3'>Problem Solving with Empathy</h3>
            <p>
              I approach problems by understanding the people and context behind them. Good solutions come from care,
              clarity, and thoughtful consideration — not just code.
            </p>
          </div>

          <div>
            <h3 className='mb-3'>Tiny Creative Worlds</h3>
            <p>
              Some characters begin as quiet gestures of care. Over time, they grow into gentle, character-led worlds —
              like Toffee, Rozi, and Fluffy. They stay close to tenderness, curiosity, and a softer way of making.
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
              I like exploring small creative ideas that grow into little worlds — character-led projects like Toffee,
              Rozi, and Fluffy. Most begin quietly, then take shape and develop their own rhythm and personality.
            </p>
          </div>
          <div>
            <h3 className='mb-3'>Refactoring & tools with people in mind</h3>
            <p>
              I enjoy improving systems — refactoring messy parts, simplifying flows, and creating small tools that make
              life easier for people. Some of these have grown into widely used projects like Steam Library Manager.
              What matters to me is usefulness and helping others through better structure.
            </p>
          </div>
        </div>
      </Section>

      <div className='section-divider mb-16 md:mb-24' />

      <Section title='How I Grow' className='pb-32! md:pb-[200px]!'>
        <div className='max-w-lg space-y-4'>
          <p>
            I’m shaped by small things — the quiet moments, the subtle shifts, and the lessons that arrive slowly over
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
