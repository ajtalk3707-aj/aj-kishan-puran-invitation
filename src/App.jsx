import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Intro from './components/Intro.jsx'
import Story from './components/Story.jsx'
import TopBar from './components/TopBar.jsx'
import Sky from './components/Sky.jsx'
import { useMusic } from './useMusic.js'

export default function App() {
  const music = useMusic()
  const [started, setStarted] = useState(false) // Story mounts as the envelope zooms
  const [gone, setGone] = useState(false)

  useEffect(() => { document.body.style.overflow = gone ? '' : 'hidden' }, [gone])

  return (
    <>
      {started && (<><Sky /><Story /><TopBar music={music} /></>)}
      <AnimatePresence>
        {!gone && <Intro onOpen={music.start} onZoom={() => setStarted(true)} onDone={() => setGone(true)} />}
      </AnimatePresence>
    </>
  )
}
