// components/BlogCard.tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { BlogType } from "../sections/blogs/type";
import Link from "next/link";
// import Image from "next/image";
import { Calendar } from "lucide-react";

export default function BlogCard({
  title,
  date,
  link,
  image,
  description,
}: BlogType) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg shadow-none !pt-0 !border-0 !rounded-none">
      <AspectRatio ratio={16 / 10}>
        <img
          src={image}
          alt={title}
          // fill
          className="object-cover rounded-2xl"
        />
      </AspectRatio>
      <CardHeader className="!p-0">
        <p className="text-xs text-muted-foreground mb-1 inline-flex items-center gap-2 leading-2">
          <Calendar className="size-3" />
          {date}
        </p>
        <CardTitle className="text-xl h-[56px] line-clamp-2 leading-normal">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="!p-0">
        <p className="text-sm text-gray-600 dark:text-gray-500 line-clamp-3 leading-loose">
          {description}
        </p>
      </CardContent>
      <CardFooter className="!p-0">
        <Link href={link} target="_blank">
          <Button
            variant={"outline"}
            className="bg-teal-600/10 text-teal-400 !border-teal-500/55"
          >
            مشاهده مقاله
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
