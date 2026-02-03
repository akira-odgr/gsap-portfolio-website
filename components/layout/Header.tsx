"use client"

import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/libs/gsap-util"
import { navItems } from "@/data/data"
import { cn } from "@/libs/cn"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Button from "../ui/Button"
import { useState, useRef } from "react"

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const MenuRef = useRef<HTMLUListElement | null>(null)
    const tlRef = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        if (!MenuRef.current) return

        tlRef.current = gsap
            .timeline({ paused: true })
            .fromTo(MenuRef.current, {
                y: -20,
                autoAlpha: 0
            },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: "power3.out"
                },
            )
            .from('.link', {
                y: 20,
                opacity: 0,
                stagger: 0.08,
                duration: 0.4,
                ease: "power3.out"
            },
                "-=0.2"
            )
    })

    const handleClick = () => {
        setIsOpen((prev) => {
            const next = !prev
            if (next) { tlRef.current?.play() } else { tlRef.current?.reverse() }
            return next
        })

    }

    return (
        <header className={cn("fixed top-0 left-0 w-full bg-stone-100/20 backdrop-blur-sm z-50")}>
            <div className={cn("container", "flex items-center justify-between py-4")}>
                {/* Logo */}
                <Link href="/" className={cn("font-bebasNeue text-[32px]")}>JM</Link>

                {/* Mobile Menu */}
                <nav className={cn("lg:hidden")}>
                    {/* menu btn */}
                    <button onClick={handleClick} className={cn("bg-black size-10 text-white flex items-center justify-center rounded-xl transition", "hover:bg-black/80")}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                    {/* list */}
                    <ul ref={MenuRef} className={cn("fixed top-full left-0 w-full h-62.5 text-stone-50 bg-stone-900 flex items-center justify-center flex-col opacity-0 invisible")}>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <Link href={item.href} className={cn("link", "block font-bebasNeue text-4xl")} onClick={handleClick}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* DescTop Menu */}
                <nav className={cn("hidden items-center gap-5", "lg:flex")}>
                    {/* list */}
                    <ul className={cn("flex items-center gap-11")}>
                        {navItems.map(item => (
                            <li key={item.id}>
                                <Link href={item.href} className={cn("uppercase", "hover:text-black/70")}>{item.label}</Link></li>
                        ))}
                    </ul>
                    <Button label={"Contact"} />
                </nav>
            </div>
        </header>
    )
}

export default Header