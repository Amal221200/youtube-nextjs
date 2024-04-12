import CategoryItems from './CategoryItems'
import MobileSidebar from './MobileSidebar'

const SideBar = async () => {

  return (
    <>
      <aside className='border-r h-full md:block hidden'>
        <CategoryItems />
      </aside>
      <MobileSidebar />
    </>
  )
}

export default SideBar