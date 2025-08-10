import Image, { StaticImageData } from "next/image";

type Props = {
  step: number;
  title: string;
  description: string;
  image: StaticImageData;
};

const CardStep = ({  title, description, image }: Props) => {
  return (
    <div className="p-5 rounded-xl overflow-hidden relative lg:h-[600px] hover:bg-gray-100/10 duration-300 hover:-translate-y-1 hover:shadow-lg shadow-teal-500/30">
      <div className="w-full flex justify-center items-center h-[300px]">
        <Image unoptimized src={image} alt="" className="mx-auto" />
      </div>
      <h5 className="mb-4 text-lg font-yekan-bold">{title}</h5>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-loose">
        {description}
      </p>
    </div>
  );
};

export default CardStep;
