import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function useParallax(strength = 0.3) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength * 100}%`, `${strength * 100}%`])
  return { ref, y }
}
