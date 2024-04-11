import { VideoItemType } from '@/lib/types'
import Image from 'next/image';
import React from 'react'
import Avatar from './Avatar';
import { getChannelDetail } from '@/lib/actions';

const VideoItem = async ({ data: { snippet: videoData } }: { data: VideoItemType }) => {
  const channelDetail = await getChannelDetail(videoData.channelId)

  return (
    <article className='border rounded-xl space-y-2'>
      <div className='relative h-[220px] rounded-xl overflow-hidden'>
        <Image src={videoData.thumbnails.high.url || "https://placehold.co/600x400"} alt='image' fill className='object-cover w-full' />
      </div>
      <div className='flex gap-x-4 items-center justify-start px-3'>
        <div>
            <Avatar src={channelDetail.snippet.thumbnails.high.url} height={40} width={40} alt={channelDetail.snippet.title} />
        </div>
        <div className='space-y-1'>
          <p className='font-bold text-sm line-clamp-2'>{videoData.title}</p>
          <p>{videoData.channelTitle}</p>
        </div>
      </div>
    </article>
  )
}

export default VideoItem