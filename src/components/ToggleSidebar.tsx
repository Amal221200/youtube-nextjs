"use client"

import useSidebar from '@/hooks/useSidebar'
import { Menu } from 'lucide-react'
import React from 'react'

const ToggleSidebar = () => {
    const { onOpen } = useSidebar()

    return (
        <button type="button" onClick={onOpen} className="cursor-pointer md:hidden block hover:opacity-70 transition">
            <Menu />
        </button>
    )
}

export default ToggleSidebar