// components/SlideshowCarousel.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SlideshowCarouselProps {
  images: string[];
  buttonLabel?: string;
}

export default function SlideshowCarousel({ images, buttonLabel = "View Slideshow" }: SlideshowCarouselProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonLabel}</Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl w-full">
        <Carousel>
          <CarouselContent>
            {images.map((src, idx) => (
              <CarouselItem key={idx} className="flex justify-center">
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="rounded max-h-[500px] object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
