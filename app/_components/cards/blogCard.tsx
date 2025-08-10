// components/BlogCard.tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

type BlogCardProps = {
  title: string;
  date: string;
  description: string;
  imageUrl: StaticImageData;
};

export default function BlogCard({
  title,
  date,
  description,
  imageUrl,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg shadow-none !pt-0 !border-0 !rounded-none">
      <AspectRatio ratio={16 / 10}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
      </AspectRatio>
      <CardHeader className="!p-0">
        <p className="text-sm text-muted-foreground mb-1">{date}</p>
        <CardTitle className="text-xl h-[56px] line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="!p-0">
        <p className="text-sm text-gray-600 dark:text-gray-500 line-clamp-3 leading-loose">
          {description}
        </p>
      </CardContent>
      <CardFooter className="!p-0">
        <Button
          variant={"outline"}
          className="bg-teal-600/10 text-teal-400 !border-teal-500/55"
        >
          مشاهده مقاله
        </Button>
      </CardFooter>
    </Card>
  );
}
