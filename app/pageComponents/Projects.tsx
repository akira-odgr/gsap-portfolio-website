"use client"
import { gsap, useGSAP, ScrollTrigger } from '@/libs/gsap-util'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { projectItems } from '@/data/data'
import { cn } from '@/libs/cn'
import Image from 'next/image'

const Projects = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const panels = gsap.utils.toArray<HTMLDivElement>(".project-panel")
        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                pinSpacing: false
            })
        })
    }, { scope: containerRef })

    return (
        <section ref={containerRef} className={cn("mb-[100vh]")}>
            <div>
                {/* Title */}
                <div className={cn("project-panel", "container flex-center", "min-h-svh flex-col space-y-1")}>
                    <h2 className={cn("text-5xl", "md:text-7xl")}>my recent projects</h2>
                    <p>scroll to explore</p>
                </div>

                {/* Wrapper */}
                <div>
                    {projectItems.map(item => (
                        <div key={item.id} className={cn("project-panel", "h-screen w-full text-white p-10 grid gap-9 mx-auto", "sm:px-16", "lg:px-24 lg:grid-cols-2 lg:items-center")} style={{ background: item.backgroundClr }}>
                            {/* content */}
                            <div className={cn("space-y-4")}>
                                <span className={cn("size-10 border  rounded-full inline-flex items-center justify-center text-lg")}>{item.id}</span>
                                <p>{item.text}</p>
                                <h3 className={cn("text-4xl", "sm:text-5xl", "lg:text-9xl")}>{item.title}</h3>
                                <Button label='Live Demo' />
                            </div>
                            {/* Image */}
                            <div className={cn("flex-center", "mx-auto")}>
                                <Image src={item.img} alt={item.title} width={500} height={300} className={cn("w-full h-full object-cover")} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects