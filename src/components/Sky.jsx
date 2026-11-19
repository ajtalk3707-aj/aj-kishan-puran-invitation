import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Sky({ fixedParallax = true }) {
  const stars = useMemo(() => Array.from({ length: 90 }, () => ({
    x: Math.random() * 100, y: Math.random() * 100, s: 1 + Math.random() * 2.2,
    d: 2 + Math.random() * 4, dl: Math.random() * 5,
  })), [])
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 3000], [0, fixedParallax ? -260 : 0])
  return (
    <div className="sky" aria-hidden="true">
      <div className="moon" />
      <motion.div className="stars" style={{ y }}>
        {stars.map((s, i) => (
          <i key={i} className="star" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, animationDuration: `${s.d}s`, animationDelay: `${s.dl}s` }} />
        ))}
      </motion.div>
      <i className="shoot" /><i className="shoot s2" />
    </div>
  )
}
