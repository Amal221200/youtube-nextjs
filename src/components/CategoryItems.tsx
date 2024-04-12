import cn from '@/lib/cn'
import { categories } from '@/lib/constants'
import React, { ComponentProps } from 'react'
import PlayListCard from './PlayListCard'

interface CategoryItemsProps extends ComponentProps<'div'>{
    mobile?: boolean
}

const CategoryItems = ({ className, mobile }: CategoryItemsProps) => {

    return (
        <div className={cn("space-y-3", className)}>
            {
                categories.map((category) => (
                    <PlayListCard key={category.type} data={category} mobile={mobile}  />
                ))
            }
        </div >
    )
}

export default CategoryItems