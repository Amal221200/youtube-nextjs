import { VideoItemType } from "@/lib/types"
import VideoItem from "./VideoItem"


const VideosList = ({ videos }: { videos: VideoItemType[] }) => {

  return (
    <main className="grid grid-cols-3 gap-3 justify-between h-[90dvh] overflow-y-scroll">
      {
        videos.map((video) => (
          <VideoItem data={video} key={video.id.videoId} />
        ))
      }
    </main>
  )
}

export default VideosList