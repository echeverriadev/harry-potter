import { NextPage } from "next";
import Image from "next/image";
interface Props {
  name: string;
  house: string;
  img: string;
}

export const CardCharacter: NextPage<Props> = ({ name, house, img }) => {
  return (
    <div className="group relative flex h-100 w-100 rounded-xl shadow-xl">
      <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
        <Image
          src={img}
          className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
          alt={name}
          width={200}
          height={200}
        />
      </div>
      <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h1 className="font-serif text-2xl font-bold text-white shadow-xl">
          {name}
        </h1>
        <h1 className="text-sm font-light text-gray-200 shadow-xl">{house}</h1>
      </div>
    </div>
  );
};
