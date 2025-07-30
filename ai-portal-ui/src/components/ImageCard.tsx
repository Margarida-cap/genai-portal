import { Link } from "react-router-dom";

interface ImageCardProps {
  title: string;
  imageUrl: string;
  to?: string;
  onClick?: () => void;
}
export default function ImageCard({ title, imageUrl, to, onClick }: ImageCardProps) {
  const card = (
    <div
      onClick={onClick}
      className="relative aspect-square overflow-hidden rounded shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-2 text-sm font-semibold">
        {title}
      </div>
    </div>
  );

  return to ? <Link to={to}>{card}</Link> : card;
}

