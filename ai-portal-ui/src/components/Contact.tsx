// components/Contact.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ContactProps {
  name: string;
  email: string;
  imageUrl?: string;
}

export default function Contact({ name, email, imageUrl }: ContactProps) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-md hover:bg-gray-100 transition">
      <Avatar>
        {imageUrl ? (
          <AvatarImage src={imageUrl} alt={name} />
        ) : (
          <AvatarFallback>{name[0]}</AvatarFallback>
        )}
      </Avatar>

      <div>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
    </div>
  );
}
