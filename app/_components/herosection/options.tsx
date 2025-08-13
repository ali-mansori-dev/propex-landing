import Image from "next/image";
import Profit90 from "@/public/benefits/profit.png";
import clock from "@/public/benefits/clock.png";
import increase from "@/public/benefits/increase.png";
import infinite from "@/public/benefits/infinite.png";

export const options = [
  {
    icon: (
      <Image
        src={Profit90}
        alt="Profit90%"
        className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] object-cover"
      />
    ),
    title: "تا 90%",
    subtitle: "تقسیم سود",
  },
  {
    icon: (
      <Image
        src={clock}
        alt="Profit90%"
        className="w-[21px] lg:w-[30px] h-[30px] lg:h-[40px] object-cover"
      />
    ),
    subtitle: "پرداخت سود",
    title: "حداکثر 6 ساعت",
  },
  {
    icon: (
      <Image
        src={increase}
        alt="Profit90%"
        className="w-[24px] lg:w-[40px] h-[30px] lg:h-[40px] object-cover"
      />
    ),
    title: "افزایش سرمایه",
    subtitle: "تا سقف 100,000 $",
  },
  {
    icon: (
      <span className="w-[40px] lg:w-[40px] h-[30px] lg:h-[40px] py-1 ">
        <Image
          src={infinite}
          alt="Profit90%"
          className="w-[40px] lg:w-[40px] h-[20px] lg:h-[20px] object-cover"
        />
      </span>
    ),
    title: "نامحدود",
    subtitle: "روز های معاملاتی",
  },
];
