import { VideoItemType } from '@/lib/types'
import Image from 'next/image';
import React from 'react'
import VideoThumbnail from './VideoThumbnail';

const VideoItem = ({ data: { snippet: videoData } }: { data: VideoItemType }) => {

  return (
    <article className='rounded-xl sm:max-w-none max-w-[300px] space-y-2 cursor-pointer transition-all group hover:bg-black/10 dark:hover:bg-white/20'>
      <div className='relative md:h-[220px] h-[200px] rounded-xl overflow-hidden group-hover:rounded'>
        <VideoThumbnail src={videoData.thumbnails.high.url || "https://placehold.co/600x400"} alt={videoData.title} />
      </div>
      <div className='px-3'>
        <div className='flex flex-col justify-between h-full'>
          <p className='font-bold text-sm line-clamp-2'>{videoData.title}</p>
          <small className='text-gray-400'>{videoData.channelTitle}</small>
        </div>
      </div>
    </article>
  )
}

export default VideoItem