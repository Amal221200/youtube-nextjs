"use client"
import Avatar from "../Avatar"
import { LogOut } from "lucide-react"
import cn from "@/lib/cn"
import { useCallback, useState } from "react"
import { signOut } from "next-auth/react"

const UserButton = ({ imageUrl, name }: { imageUrl: string, name: string }) => {
    const [open, setOpen] = useState(false);

    const onOpen = useCallback(() => {
        setOpen((current) => !current)
    }, [])
    
    return (
        <div className="relative z-10">
            <button type="button" onClick={onOpen}>
                <Avatar height={30} width={30} src={imageUrl} alt={name} />
            </button>
            <div className={cn("absolute -bottom-10 right-0 w-fit dark:bg-white rounded", open ? "block" : "hidden")}>
                <button type="button" className="flex gap-2 text-black p-2 hover:bg-black/10 transition" onClick={async () => {
                    await signOut()
                }}>
                    Logout <LogOut className="text-black" />
                </button>
            </div>
        </div>
    )
}

export default UserButton