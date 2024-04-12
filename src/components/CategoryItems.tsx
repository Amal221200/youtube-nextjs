import cn from '@/lib/cn'
import { categories } from '@/lib/constants'
import React, { ComponentProps } from 'react'
import PlayListCard from './PlayListCard'

const CategoryItems = ({ className }: ComponentProps<'div'>) => {

    return (
        <div className={cn("space-y-3", className)}>
            {
                categories.map((category) => (
                    <PlayListCard key={category.type} data={category} />
                ))
            }
        </div >
    )
}

export default CategoryItems