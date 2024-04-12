import VideosList from "@/components/VideosList"
import { getVideos } from "@/lib/actions"

const ChannelIdPage = async ({ params }: { params: { category: string } }) => {
  const videos = await getVideos(params.category)

  if (!videos) {
    return <h1 className="text-center font-bold text-xl">Could not fetch videos</h1>
  }
  
  return (
    <main className="h-full overflow-y-auto">
      <VideosList videos={videos} />
    </main>
  )
}

export default ChannelIdPage