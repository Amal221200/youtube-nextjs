import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div className='h-full'>
            <Header />
            <div className='md:grid grid-cols-5 h-full w-full gap-x-3'>
                <SideBar />
                <div className='md:col-span-4 w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout