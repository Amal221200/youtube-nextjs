import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { ReactNode } from 'react'

const MainLayout = ({ children }: { children: ReactNode }) => {

    return (
        <div className='h-full'>
            <Header />
            <div className='md:grid md:grid-cols-5 h-full md:gap-x-3'>
                <SideBar />
                <div className='md:col-span-4 '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout