"use client"
import useSidebar from "@/hooks/useSidebar"
import cn from "@/lib/cn"
import { CircleX } from "lucide-react"
import PlayListCard from "./PlayListCard"
import { categories } from "@/lib/constants"

const MobileSidebar = () => {
    const { isOpen, onClose } = useSidebar()

    return (
        <aside className={cn('absolute top-0 left-0 w-full h-full bg-white/40 z-50 transition duration-500 transform', isOpen ? "translate-x-0" : "-translate-x-full")}>
            <div className="relative h-full max-w-[300px] bg-white border">
                <button type="button" onClick={onClose} className="absolute top-3 right-3 hover:opacity-70 transition">
                    <CircleX />
                </button>
                <div className='space-y-3 mt-10'>
                    {
                        categories.map((category) => (
                            <PlayListCard key={category.type} data={category} />
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}

export default MobileSidebar