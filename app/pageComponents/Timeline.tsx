import { timelineItems } from '@/data/data'
import { cn } from '@/libs/cn'
import { Dot } from 'lucide-react'

const Timeline = () => {
    return (
        <section className={cn("py-20", "sm:py-24", "lg:py-32")}>
            <div className={cn("container")}>
                {/* Title */}
                <div>
                    <h2 className={cn("text-3xl text-center", "sm:text-4xl", "lg:text-6xl")}>Professional Journey</h2>
                    <p className={cn("text-stone-600 mt-2 text-center")}>A timeline of my roles, projects, and growth</p>
                </div>
                {/* Wrapper */}
                <ul className={cn("relative mx-auto max-w-3xl mt-20", "lg:mt-24")}>
                    {timelineItems.map(item => (
                        <li key={item.id} className={cn("grid group", "lg:grid-cols-2")}>
                            {/* content */}
                            <div className={cn("group-odd:order-1 p-5", "lg:group-even:text-right")}>
                                <div className={cn("inline-flex items-center font-bold mt-2")}>
                                    <span>{item.category}</span>
                                    <span>
                                        <Dot />
                                    </span>
                                    <span>{item.date}</span>
                                </div>
                                <h3 className={cn("text-2xl font-bold", "text-3xl")}>{item.title}</h3>
                                <p className={cn("text-neutral-600")}>{item.description}</p>
                            </div>
                            {/* Empty div */}
                            <div className={cn("hidden h-36 w-ful", "lg:block")} />
                        </li>
                    ))}
                    {/* center divider */}
                    <div className={cn("h-full w-0.5 bg-black absolute top-0 left-0 -translate-x-1/2", "lg:left-1/2")}>
                        <span>
                            {[1, 2, 3, 4, 5].map(dot => (
                                <span key={dot} className={cn(
                                    "size-3.5 bg-black rounded-full absolute left-1/2 -translate-x-1/2",
                                    "nth-[1]:top-14 nth-[2]:top-47.5 nth-[3]:top-80 nth-[4]:top-117.5 nth-[5]:top-155",
                                    "sm:nth-[2]:top-48 sm:nth-[3]:top-82.5 sm:nth-[4]:top-115 sm:nth-[5]:top-147.5",
                                    "lg:nth-[2]:top-54 lg:nth-[3]:top-93 lg:nth-[4]:top-132.5 lg:nth-[5]:top-171.5")}>
                                    {dot}
                                </span>
                            ))}
                        </span>
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default Timeline