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
  features?: string[];
  benefits?: string[];
  imageUrl: string; 
  videoUrl: string; 
}
