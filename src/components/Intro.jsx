import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Sky from './Sky.jsx'
import LangToggle from './LangToggle.jsx'
import { useLang } from '../lang.jsx'

const START = 1500, STEP = 3300
const PROGRESS = [0.12, 0.42, 0.76, 1]
// a heart made of stars
const PTS = [[100, 164], [44, 106], [30, 64], [54, 34], [86, 40], [100, 64], [114, 40], [146, 34], [170, 64], [156, 106], [100, 164]]
const PATH = 'M' + PTS.map(p => p.join(' ')).join(' L')

const wordV = {
  hidden: { opacity: 0, y: 14, filter: 'blur(12px)' },
  show: (i) => ({ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: i * 0.14, duration: 1, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Intro({ onOpen, onZoom, onDone }) {
  const { t } = useLang()
  const [line, setLine] = useState(-1)
  const [ready, setReady] = useState(false)
  const [stage, setStage] = useState('wait') // wait | flap | card | zoom
  const skipped = useRef(false)
  const lines = t.intro.suspense
  const last = lines.length - 1

  useEffect(() => {
    const ts = lines.map((_, k) => setTimeout(() => !skipped.current && setLine(k), START + k * STEP))
    ts.push(setTimeout(() => { if (!skipped.current) { setLine(-1); setReady(true) } }, START + lines.length * STEP + 400))
    return () => ts.forEach(clearTimeout)
    // eslint-disable-next-line
  }, [])

  const progress = ready ? 1 : (PROGRESS[line] ?? 0)
  const skip = () => { skipped.current = true; setLine(-1); setReady(true) }
  const open = () => {
    if (!ready || stage !== 'wait') return
    onOpen()
    setStage('flap')
    setTimeout(() => setStage('card'), 1100)
    setTimeout(() => { setStage('zoom'); onZoom() }, 3000)
    setTimeout(onDone, 5600)
  }
  const opened = stage !== 'wait'

  return (
    <motion.div className="intro" animate={{ opacity: stage === 'zoom' ? 0 : 1 }} transition={{ duration: 2.2, delay: stage === 'zoom' ? 0.5 : 0 }}>
      <Sky fixedParallax={false} />
      <div className="intro-lang"><LangToggle /></div>

      <div className="intro-col">
        {/* suspense lines — all share one grid cell so nothing jumps */}
        {!ready && (
          <div className="lines" aria-live="polite">
            <AnimatePresence mode="sync">
              {line >= 0 && (
                <motion.p key={line} className={`sline ${line === last ? 'final' : ''}`} initial="hidden" animate="show"
                  exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.05, transition: { duration: 0.8 } }}>
                  {lines[line].split(' ').map((w, i) => (
                    <motion.span key={i} custom={i} variants={wordV} className="w">{w}</motion.span>
                  ))}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )}

        <div className="heart-scene">
          {/* constellation that slowly forms a heart */}
          <motion.svg className="const" viewBox="0 0 200 190" aria-hidden="true"
            animate={{ scale: ready ? [1, 1.04, 1] : 1 }} transition={{ duration: 3, repeat: ready ? Infinity : 0 }}>
            <motion.path d={PATH} fill="none" stroke="url(#rg)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: progress }} transition={{ duration: 2.6, ease: 'easeInOut' }} />
            <defs><linearGradient id="rg" x1="0" x2="1"><stop offset="0" stopColor="#f6d6c6" /><stop offset="1" stopColor="#e9a98f" /></linearGradient></defs>
            {PTS.slice(0, -1).map(([x, y], i) => {
              const lit = i / (PTS.length - 1) <= progress + 0.001 && (line >= 0 || ready)
              return (
                <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={lit ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.22, duration: 0.8 }} style={{ transformOrigin: `${x}px ${y}px` }}>
                  <circle cx={x} cy={y} r="7" fill="rgba(246,214,198,.16)" />
                  <circle cx={x} cy={y} r="2.4" fill="#fff4ea" />
                </motion.g>
              )
            })}
          </motion.svg>

          {/* envelope centered within the heart */}
          <motion.div className="envwrap" initial="hidden" animate={!ready ? 'hidden' : stage === 'zoom' ? 'zoom' : 'show'}
            variants={{
              hidden: { y: 110, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } },
              zoom: { scale: 9, opacity: 0, transition: { duration: 2.2, ease: 'easeIn' } },
            }}>
            <motion.button className="env" onClick={open} aria-label={t.intro.tap} style={{ pointerEvents: ready && !opened ? 'auto' : 'none' }}
              animate={!opened && ready ? { y: [0, -9, 0], rotate: [-1, 1, -1] } : { y: 0 }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              whileTap={{ scale: 0.96 }}>
              <div className="env-back" />
              <motion.div className="env-card" animate={{ y: stage === 'card' || stage === 'zoom' ? '-64%' : '0%' }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}>
                <span className="mono">{t.hero.initials}</span>
                <span className="cap">{t.hero.eyebrow}</span>
              </motion.div>
              <div className="env-front" />
              <motion.div className="env-flap" style={{ zIndex: opened ? 1 : 4 }}
                animate={{ rotateX: opened ? 180 : 0 }} transition={{ duration: 1.1, ease: 'easeInOut' }} />
              <motion.div className="wax" animate={opened ? { scale: [1, 1.25, 0], rotate: [0, 20, -40], opacity: [1, 1, 0] } : { scale: 1 }}
                transition={{ duration: 0.7 }}>♥</motion.div>
            </motion.button>
          </motion.div>
        </div>

        {ready && !opened && (
          <motion.p className="tap" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.5, 1] }} transition={{ delay: 1.4, duration: 2.4 }}>
            {t.intro.tap}
          </motion.p>
        )}
      </div>

      {!ready && <button className="skip" onClick={skip}>{t.intro.skip}</button>}
    </motion.div>
  )
}
