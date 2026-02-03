"use client"
import { gsap, useGSAP, SplitText } from "@/libs/gsap-util"
import { useRef } from "react"
import { cn } from "@/libs/cn"
import { RiLinkedinBoxFill, RiWhatsappFill, RiGithubFill, RiArrowDownSLine } from "@remixicon/react"

const Hero = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const textSplit = SplitText.create(".text", {
            type: "words, lines",
            linesClass: "text-line"
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-wrapper",
                start: "top center"
            }
        })
        tl.from(textSplit.words, {
            yPercent: 100,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.inOut"
        })
    }, { scope: containerRef })
    return (
        <section ref={containerRef} className={cn("relative")}>
            <div className={cn("container", "flex items-center justify-center flex-col min-h-svh")}>
                {/* Wrapper */}
                <div className={cn("hero-wrapper", "text-center my-auto")}>
                    <p className={cn("text", "uppercase")}>hi, i'm julian van mees</p>
                    <h1 className={cn("text", "text-4xl mt-1.5", "sm:text-5xl", "lg:text-9xl")}>Full-stack developer</h1>
                    <h2 className={cn("text", "text-4xl mt-1.5", "sm:text-5xl", "lg:text-9xl")}>ui & ux designer.</h2>
                </div>
                {/* Social links */}
                <div className={cn("absolute bottom-32 left-8 grid gap-2")}>
                    {[RiLinkedinBoxFill, RiWhatsappFill, RiGithubFill].map((Icon, index) => (
                        <a href="#" key={index} className={cn("transition-transform", "hover:scale-105")} target="_blank">
                            <Icon size={30} />
                        </a>
                    ))}
                </div>
                {/* Scroll down */}
                <div className={cn("flex items-center gap-2 mb-5")}>
                    <span className={cn("animate-bounce")}>
                        <RiArrowDownSLine />
                    </span>
                    <p className={cn("text-lg uppercase")}>Scroll down</p>
                </div>
            </div>
        </section >
    )
}

export default Hero