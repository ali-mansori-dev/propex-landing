import Image from "next/image";
import coching from "@/public/images/coching.png";
import broker from "@/public/images/broker.png";
import lows from "@/public/images/lows.png";
import wallet from "@/public/images/wallet.png";
import Container from "@/components/shared/container";

const Benefits = () => {
  const items = [
    {
      image: coching,
      title: "کوچینگ اختصاصی",
      desc: "یک مربی خصوصی برای رشد مالی تو",
    },
    { image: broker, title: "بروکر شخصی شما ", desc: "تصمیم گیرنده خودت باش" },
    {
      image: lows,
      title: "بدون قوانین محدود‌کننده",
      desc: "قوانین دست‌وپا گیر اینجا جایی ندارند",
    },
    {
      image: wallet,
      title: "تضمین حقوقی پرداخت سود",
      desc: "اگر واریز سود شما از 6 ساعت بیشتر شد، به ازای هر یک ساعت تاخیر 100دلار خسارت دریافت کنید.",
    },
  ];

  return (
    <section className={`w-full py-8 relative`}>
      <Container className="!flex-col items-center">
        <div
          className="w-full grid grid-cols-2 lg:grid-cols-4 flex-wrap justify-center lg:justify-between overflow-hidden items-center gap-6"
          style={{ justifyContent: "space-around" }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`group w-full h-max flex flex-col items-center justify-between relative py-8 bg-dot-blure bg-no-repeat bg-cover bg-center transition-all hover:scale-110  duration-300`}
            >
              <div className="flex flex-col gap-6 items-center justify-between group-hover:blur-xl">
                <Image
                  src={item.image}
                  width={150}
                  height={150}
                  alt=""
                  className="w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] object-cover"
                />
                <p className="w-full text-teal-600 dark:text-white text-center lg:text-lg">
                  {item.title}
                </p>
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 w-full flex items-center justify-center text-teal-600 dark:text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-sm text-center leading-relaxed mx-8">
                  {item?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
