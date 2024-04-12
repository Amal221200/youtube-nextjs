import MobileSidebar from './MobileSidebar'
import PlayListCard from './PlayListCard'
import { categories } from '@/lib/constants'

const SideBar = async () => {

  return (
    <>
      <aside className='border-r h-full md:block hidden'>
        <div className='space-y-3'>
          {
            categories.map((category) => (
              <PlayListCard key={category.type} data={category} />
            ))
          }
        </div>
      </aside>
      <MobileSidebar />
    </>
  )
}

export default SideBar