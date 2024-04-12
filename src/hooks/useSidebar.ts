import { create } from "zustand";

interface SidebarData {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void,
}

const useSidebar = create<SidebarData>((set) => ({
    isOpen: false,
    onOpen() {
        set({ isOpen: true })
    },
    onClose() {
        set({ isOpen: false })
    },
}))

export default useSidebar