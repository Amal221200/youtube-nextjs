import CategoryItems from './CategoryItems'
import MobileSidebar from './MobileSidebar'

const SideBar = async () => {

  return (
    <>
      <aside className='border-r dark:border-r-white/30 h-full md:block hidden'>
        <CategoryItems />
      </aside>
      <MobileSidebar />
    </>
  )
}

export default SideBar