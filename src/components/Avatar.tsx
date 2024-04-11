import Image from 'next/image'
import React from 'react'

const Avatar =  ({ src, height, width, alt }: { src: string, height?: number, width?: number,alt:string }) => {


    return (
        <Image src={src} alt={alt} height={height || 25} width={width || 25} className='rounded-full object-cover' />
    )
}

export default Avatar