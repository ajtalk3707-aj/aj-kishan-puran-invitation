import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Countdown from './Countdown.jsx'
import { useLang } from '../lang.jsx'
import { CFG } from '../copy.js'
import couplePhoto from '../assests/kishan-puran.png'

const rv = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
}
const Reveal = ({ children, className, as = 'div', amount = 0.3 }) => {
  const C = motion[as]
  return <C className={className} variants={rv} initial="hidden" whileInView="show" viewport={{ once: true, amount }}>{children}</C>
}
const Stagger = ({ children, className, gap = 0.12 }) => (
  <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}>{children}</motion.div>
)
const Title = ({ children }) => (
  <Reveal className="sec-title"><h2>{children}</h2><span className="orn"><i /><b>✦</b><i /></span></Reveal>
)
const word = {
  hidden: { opacity: 0, y: 30, filter: 'blur(14px)' },
  show: (i) => ({ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 0.5 + i * 0.35, duration: 1.3, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Story() {
  const { t } = useLang()
  const tlRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: tlRef, offset: ['start 70%', 'end 80%'] })
  const mapUrl = `${CFG.mapQuery}`
  const mapUrl1 = `${CFG.mapQuery1}`

  return (
    <main className="story">
      {/* ───────── HERO ───────── */}
      <section className="hero">
        <motion.svg className="halo" viewBox="0 0 400 400" aria-hidden="true" animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}>
          <circle cx="200" cy="200" r="190" /><circle cx="200" cy="200" r="168" strokeDasharray="2 10" /><circle cx="200" cy="200" r="140" strokeDasharray="30 6 2 6" />
        </motion.svg>
        <motion.p className="eyebrow" custom={0} variants={word} initial="hidden" animate="show">{t.hero.eyebrow}</motion.p>
        <motion.img className="couple-photo" src={couplePhoto} alt={`${t.hero.g} & ${t.hero.b}`}
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }} />
        <h1>
          <motion.span className="nm" custom={1} variants={word} initial="hidden" animate="show">{t.hero.g}</motion.span>
          <motion.span className="amp" custom={2} variants={word} initial="hidden" animate="show">{t.hero.and}</motion.span>
          <motion.span className="nm" custom={3} variants={word} initial="hidden" animate="show">{t.hero.b}</motion.span>
        </h1>
        <motion.p className="hdate" custom={4.4} variants={word} initial="hidden" animate="show">{t.hero.date} · {t.hero.place}</motion.p>
        <motion.div custom={5.4} variants={word} initial="hidden" animate="show" style={{ width: '100%' }}><Countdown /></motion.div>
        <motion.div className="cue" animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.4, repeat: Infinity }}>
          <span>{t.hero.scroll}</span><i>⌄</i>
        </motion.div>
      </section>

      {/* ───────── INVITATION ───────── */}
      <section className="sec center">
        <Reveal className="sh">{t.invite.ganesh}</Reveal>
        <Reveal className="sh dim">{t.invite.sh1}</Reveal>
        <Title>{t.invite.title}</Title>
        <Reveal as="p" className="lead">{t.invite.intro}</Reveal>
        <Reveal className="namecard">
          <span>{t.hero.g}</span><em>{t.hero.and}</em><span>{t.hero.b}</span>
        </Reveal>
        <Reveal as="p" className="lead">{t.invite.blessing}</Reveal>
        <Reveal className="sh dim">{t.invite.sh2}</Reveal>
      </section>

      <section className="sec quote">
        <Reveal as="blockquote">“{t.invite.quote}”</Reveal>
      </section>

      {/* ───────── SCHEDULE TIMELINE ───────── */}
      <section className="sec">
        <Title>{t.schedule.title}</Title>
        <div className="tl" ref={tlRef}>
          <div className="tl-track" /><motion.div className="tl-prog" style={{ scaleY: scrollYProgress }} />
          {t.schedule.days.map((day) => (
            <div key={day.label} className="tl-day">
              <Reveal className="tl-head"><b>{day.label}</b><span>{day.date}</span></Reveal>
              {day.items.map((it) => (
                <motion.article key={it.title + it.time} className="tl-item" variants={rv} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                  <motion.span className="dot" variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 14, delay: 0.2 } } }} />
                  <div className="tl-card">
                    <span className="ico">{it.icon}</span>
                    <div><time>{it.time}</time><h3>{it.title}</h3>{it.desc && <p>{it.desc}</p>}</div>
                  </div>
                </motion.article>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ───────── KALRAV ───────── */}
      <section className="sec center">
        <Title>{t.kalrav.title}</Title>
        <Reveal as="p" className="lead">{t.kalrav.msg}</Reveal>
        <Reveal as="p" className="dim">{t.kalrav.sender}</Reveal>
      </section>

      {/* ───────── VENUE ───────── */}
      <section className="sec center">
        <Title>{t.venue.title}</Title>
        <Reveal className="venue">
          <div className="pin">
            <motion.i animate={{ scale: [1, 2.6], opacity: [0.6, 0] }} transition={{ duration: 2.2, repeat: Infinity }} />
            <motion.i animate={{ scale: [1, 2.6], opacity: [0.6, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: 1.1 }} />
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>📍</motion.span>
          </div>
          <h3>{t.venue.name}</h3>
          {t.venue.lines.map(l => <p key={l}>{l}</p>)}
          <motion.a className="btn solid" href={mapUrl} target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.96 }}>{t.venue.btnMap}</motion.a>
        </Reveal>
      </section>

      {/* ───────── VENUE2 ───────── */}
      <section className="sec center">
        <Title>{t.venue2.title}</Title>
        <Reveal className="venue">
          <div className="pin">
            <motion.i animate={{ scale: [1, 2.6], opacity: [0.6, 0] }} transition={{ duration: 2.2, repeat: Infinity }} />
            <motion.i animate={{ scale: [1, 2.6], opacity: [0.6, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: 1.1 }} />
            <motion.span animate={{ y: [0, -8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>📍</motion.span>
          </div>
          <h3>{t.venue2.name}</h3>
          {t.venue2.lines.map(l => <p key={l}>{l}</p>)}
          <motion.a className="btn solid" href={mapUrl1} target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.96 }}>{t.venue2.btnMap}</motion.a>
        </Reveal>
      </section>

      {/* ───────── FAMILY ───────── */}
      <section className="sec">
        <Title>{t.family.title}</Title>
        <Stagger className="fam">
          {t.family.cards.map(c => (
            <motion.div key={c.t} className="fam-card" variants={rv}>
              <h3>{c.t}</h3>{c.list.map(n => <p key={n}>{n}</p>)}
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* ───────── RSVP ───────── */}
      <section className="sec center rsvp">
        <Title>{t.rsvp.title}</Title>
        <Reveal as="p" className="lead">{t.rsvp.sub}</Reveal>
        <Reveal>
          <motion.a className="btn solid" target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.96 }}
            href={`https://wa.me/91${CFG.phone}?text=${encodeURIComponent(t.rsvp.msg)}`}>{t.rsvp.wa}</motion.a>
          <motion.a className="btn ghost" href={`tel:+91${CFG.phone}`} whileTap={{ scale: 0.96 }}>{t.rsvp.call}: +91 {CFG.phone}</motion.a>
        </Reveal>
        <Reveal as="p" className="foot">{t.footer}<br /><b>{t.hero.initials}</b></Reveal>
      </section>
    </main>
  )
}
