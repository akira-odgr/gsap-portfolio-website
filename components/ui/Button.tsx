import { cn } from "@/libs/cn"
import { ArrowUpRight } from "lucide-react"

const Button = ({ label }: { label: string }) => {
    return (
        <div className={cn("inline-flex items-center group")}>
            <button className={cn("relative bg-black text-white overflow-hidden rounded-full px-4 py-2.5 z-10 border", "hover:text-black", "before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-0 before:transition-all", "group-hover:before:w-full group-hover:text-black")}>
                <span className={cn("relative z-20")}>{label}</span>
            </button>
            <button className={cn("relative size-10 bg-black text-white rounded-full flex items-center justify-center overflow-hidden z-10 border", "before:absolute before:top-0 before:left-0 before:bg-white before:h-full before:w-0 before:transition-all", "group-hover:text-black group-hover:before:w-full")}>
                <span className={cn("relative z-20")}>
                    <ArrowUpRight />
                </span>
            </button>

        </div>
    )
}

export default Button