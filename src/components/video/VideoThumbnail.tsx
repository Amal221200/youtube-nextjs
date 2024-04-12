"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const VideoThumbnail = ({ src, alt }: { src: string, alt: string }) => {
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false)
    }, [src])

    return (
        <Image src={error ? "https://placehold.co/600x400" : src} alt={alt} onError={() => setError(true)} fill className='object-cover w-full'  />
    )
}

export default VideoThumbnail