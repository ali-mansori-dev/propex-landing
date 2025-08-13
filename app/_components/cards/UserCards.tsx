import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface userCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
}

const UserCard = ({ image, name, description, title }: userCardProps) => {
  return (
    <div className="flex flex-col pt-[90px] lg:pt-[30px] hover:-translate-y-2  transition-all transition-300 cursor-pointer">
      <div className="h-[250px] bg-teal-700/70 rounded-t-2xl relative">
        <Image
          src={image}
          alt={name}
          className="absolute w-[90%] lg:w-[80%] max-w-[370px] h-[350px] mx-auto object-cover bottom-0 left-1/2 -translate-x-1/2"
          width={500}
          height={250}
        />
      </div>
      <div className="flex flex-col gap-3 bg-gray-800 p-8 rounded-b-2xl">
        <div className="w-full inline-flex items-start justify-between gap-4 ">
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-yekan-bold">{name}</h4>
            <h6 className="text-sm text-gray-300">{title}</h6>
          </div>
          <span className="bg-teal-600/20 text-teal-500 p-2 rounded-lg">
            <InstagramIcon className="size-5" />
          </span>
        </div>
        <p className="text-xs mt-4 text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default UserCard;
