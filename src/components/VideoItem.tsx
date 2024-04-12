import { VideoItemType } from '@/lib/types'
import Image from 'next/image';
import React from 'react'

const VideoItem = async ({ data: { snippet: videoData } }: { data: VideoItemType }) => {

  return (
    <article className='rounded-xl sm:max-w-none max-w-[300px] space-y-2'>
      <div className='relative md:h-[220px] h-[200px] rounded-xl overflow-hidden'>
        <Image src={videoData.thumbnails.high.url || "https://placehold.co/600x400"} alt='image' fill className='object-cover w-full' />
      </div>
      <div className='px-3'>
        <div className='space-y-1'>
          <p className='font-bold text-sm line-clamp-2'>{videoData.title}</p>
          <p>{videoData.channelTitle}</p>
        </div>
      </div>
    </article>
  )
}

export default VideoItem