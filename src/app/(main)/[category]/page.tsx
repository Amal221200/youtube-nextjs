import VideosList from "@/components/VideosList"
import { getVideos } from "@/lib/actions"

const ChannelIdPage = async ({ params }: { params: { category: string } }) => {
  const videos = await getVideos(params.category)

  if (!videos) {
    return <h1>Videos not found</h1>
  }
  
  return (
    <main className="h-full w-full overflow-y-auto">
      <VideosList videos={videos} />
    </main>
  )
}

export default ChannelIdPage