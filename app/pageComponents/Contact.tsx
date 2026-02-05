"use client"
import { useState } from "react"
import { cn } from "@/libs/cn"
import { RiGithubFill, RiLinkedinBoxFill, RiWhatsappFill } from "@remixicon/react"
import { Copy } from "lucide-react"

const Contact = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false)
    const email = "hello@julianvanmees.dev"
    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }
    return (
        <section className={cn("py-20 border-t border-stone-300")}>
            <div className={cn("container", "flex flex-col items-center justify-between")}>
                <h2 className={cn("text-4xl", "lg:text-8xl")}>get in touch</h2>
                {/* Wrapper */}
                <div className={cn("flex flex-col items-center gap-3")}>
                    {/* copy email */}
                    <button className={cn("border max-w-max flex items-center px-4 py-2 gap-1.5 bg-white")} onClick={handleCopy}>
                        <span>
                            <Copy />
                        </span>
                        <h3 className={cn("text-2xl", "md:text-4xl")}>
                            {isCopied ? "Copied!" : "Copy Email"}
                        </h3>
                    </button>

                    {/* social links */}
                    <div className={cn("flex items-center gap-2")}>
                        {[RiLinkedinBoxFill, RiWhatsappFill, RiGithubFill].map((Icon, index) => (
                            <a href="#" key={index} className={cn("transition-transform", "hover:scale-105")} target="_blank">
                                <Icon size={30} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact