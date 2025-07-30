
import type { Video } from "../types";

interface VideoPlayerProps {
  video: Video | null;
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  if (!video) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
      <video controls width="100%" className="rounded shadow">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
