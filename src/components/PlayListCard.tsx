"use client";
import Link from 'next/link'
import React from 'react'
import { useParams } from 'next/navigation';
import cn from '@/lib/cn';

interface PlayListCardProps {
    data: {
        name: string;
        icon: JSX.Element;
        type: string;
    }
}

const PlayListCard = ({ data: { type, name, icon } }: PlayListCardProps) => {
    const params = useParams()
    return (
        <Link href={`/${type}`}>
            <button type="button" className={cn('flex gap-2 justify-start items-center rounded p-2 transition hover:bg-black/10 w-full group', params.category === type && "bg-black/10")}>
                <span className={cn("text-black group-hover:text-red-600", params.category === type && "text-red-600")}>
                    {icon}
                </span>
                <h1>{name}</h1>
            </button>
        </Link >
    )
}

export default PlayListCard