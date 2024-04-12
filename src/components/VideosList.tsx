import { VideoItemType } from "@/lib/types"
import VideoItem from "./VideoItem"


const VideosList = ({ videos }: { videos: VideoItemType[] }) => {

  return (
    <main className="grid md:grid-cols-3 sm:grid-cols-2 gap-3 gap-y-6 md:justify-between justify-center h-[90dvh] overflow-y-scroll w-full">
      {
        videos.map((video) => (
          <VideoItem data={video} key={video.id.videoId} />
        ))
      }
    </main>
  )
}

export default VideosList