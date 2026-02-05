"use client"
import { gsap, useGSAP, SplitText } from '@/libs/gsap-util'
import { useRef } from 'react'
import Button from '@/components/ui/Button'
import { aboutStatusItmes } from '@/data/data'
import { cn } from '@/libs/cn'

const About = () => {
    const containerRef = useRef<HTMLDListElement | null>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words, lines",
            linesClass: "text-line"
        })

        const textSplitTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-wrapper",
                start: "top 50%"
            }
        })

        textSplitTl.from(textSplit.words, {
            yPercent: 100,
            duration: 1,
            stagger: 0.02,
            ease: "power2.inOut"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: 'bottom center',
                scrub: 1,
                // markers: true
            }
        })

        tl.to(wrapperRef.current, {
            maxWidth: "100%",
            duration: 1,
            ease: "power3.out"
        })

    }, { scope: containerRef })
    return (
        <section ref={containerRef} className={cn("bg-stone-900 min-h-svh pt-14")}>
            <div className={cn("text-center space-y-5", "sm:space-y-7")}>
                {/* Wrapper */}
                <div ref={wrapperRef} className={cn("about-wrapper", "bg-stone-100 mx-auto max-w-[90%] px-8 py-20 h-dvh space-y-5 rounded-t-[100px]", "sm:max-w-[70%]")}>
                    <h2 className={cn("text", "text-4xl", "sm:text-5xl", "lg:text-7xl")}>about me</h2>
                    <p className={cn("text", "text-lg max-w-3xl mx-auto", "lg:text-xl")}>
                        I&apos;m Julian van Mees, a full-stack developer building scalable,
                        lightning-fast, and digital experiences where meets
                        code.
                    </p>
                    <p className={cn("text", "max-w-3xl mx-auto")}>
                        I specialize in modern technologies, creating that
                        are not only functional but beautiful and intuitive. Every line
                        of code I write is meant to problems efficiently, while
                        delivering a smooth user experience.
                    </p>

                    {/* Btn */}
                    <Button label='View Projects' />

                    {/* Status */}
                    <div className={cn("grid gap-4 mt-10 max-w-4xl mx-auto", "sm:grid-cols-2")}>
                        {aboutStatusItmes.map(item => (
                            <div key={item.id} className={cn("border border-stone-300 p-4")}>
                                <span className={cn("text-xl font-bebasNeue", "sm:text-2xl", "md:text-3xl")}>{item.value}</span>
                                <p className={cn("text", "text-stone-600")}>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About