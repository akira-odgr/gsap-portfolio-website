"use client"

import { gsap, useGSAP } from '@/libs/gsap-util'
import { useRef } from 'react'
import { cn } from '@/libs/cn'

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.set(cursorRef.current, {
            yPercent: -50,
            xPercent: -50
        })

        const xTo = gsap.quickTo(cursorRef.current, "x", {
            duration: 0.6,
            ease: "power3"
        })

        const yTo = gsap.quickTo(cursorRef.current, "y", {
            duration: 0.6,
            ease: "power3"
        })

        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX)
            yTo(e.clientY)
        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => window.removeEventListener("mousemove", handleMouseMove)
    })
    return (
        <div ref={cursorRef} className={cn("fixed top-0 left-0 size-12 bg-white rounded-full pointer-events-none mix-blend-difference z-80")} />
    )
}

export default CustomCursor