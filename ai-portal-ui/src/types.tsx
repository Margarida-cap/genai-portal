export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnailUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;  // for gallery
  videoUrl: string;  // for demo
}
