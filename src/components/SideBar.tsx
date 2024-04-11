import PlayListCard from './PlayListCard'
import { categories } from '@/lib/constants'

const SideBar = async () => {

  return (
    <aside className='border-r h-full'>
      <div className='space-y-3'>
        {
          categories.map((category) => (
            <PlayListCard key={category.type} data={category} />
          ))
        }
      </div>
    </aside>
  )
}

export default SideBar