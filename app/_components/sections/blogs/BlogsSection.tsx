import React, { Suspense } from "react";
import Container from "@/components/shared/container";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Contents } from "./Contents";

const Blogs = () => {
  return (
    <section className="w-full py-20  z-10 border-t border-gray-600 border-b">
      <Container className="!flex-col">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between mb-8">
          <div className="w-full">
            <h5 className="text-2xl lg:text-3xl font-yekan-bold mb-4">
              آخرین بلاگ‌ها
            </h5>
            <p className="lg:w-[60%] text-gray-600 dark:text-gray-400 leading-loose">
              در وبلاگ ما، به مجموعه‌ای جامع از آموزش‌ها، مقالات و اخبار مرتبط
              با ترید در فارکس دسترسی خواهید داشت. هدف ما ارائه اطلاعات به‌روز و
              ارزشمند به شماست.
            </p>
          </div>
          <Link href={"https://propex.fund/blog/fa/"} target="_blank">
            <Button
              variant={"ghost"}
              size={"lg"}
              className="w-max text-teal-400 pt-6 lg:pt-0"
            >
              مشاهده بیشتر <MoveLeft />
            </Button>
          </Link>
        </div>
        <Suspense fallback={<>Loading...</>}>
          <Contents />
        </Suspense>
      </Container>
    </section>
  );
};

export default Blogs;
