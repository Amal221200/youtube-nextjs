"use client"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useState } from "react";


const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, } = useTheme()

    const onToggle = useCallback(() => {
        setTheme(theme === "light" ? "dark" : "light")
    }, [setTheme, theme])

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button type="button" onClick={onToggle} className="dark:hover:bg-white/20 hover:bg-black/10 p-1.5 rounded transition">
            {
                theme === "light" ?
                    <Moon />
                    :
                    <Sun />
            }
        </button>
    )
}

export default ThemeToggler