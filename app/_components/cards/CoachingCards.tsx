import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
  imageclass: string;
};

const CoachingCard = ({ title, description, image, imageclass }: Props) => {
  return (
    <div className="p-5 rounded-2xl lg:h-[600px]">
      <div className="w-full flex justify-center items-center h-[300px]">
        <Image
          unoptimized
          src={image}
          alt=""
          className={`mx-auto w-[200px] h-[200px] object-contain ${imageclass}`}
        />
      </div>
      <h5 className="mb-4 text-lg font-yekan-bold">{title}</h5>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-loose">
        {description}
      </p>
    </div>
  );
};

export default CoachingCard;
