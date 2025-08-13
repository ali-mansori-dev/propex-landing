import Herosection from "./_components/herosection/herosection";
import Benefits from "./_components/sections/benefits";
import Coaching from "./_components/sections/coaching/index";
import Challenges from "./_components/sections/challenges/index";
import UserVideos from "./_components/sections/userVideos";
import Steps from "./_components/sections/steps/steps";
import PropexSlogan from "./_components/sections/PropexSlogan";
import Blogs from "./_components/sections/blogs/BlogsSection";
import Trust from "./_components/sections/trust";
import IntroPrapex from "./_components/sections/introPrapex";

export default function Home() {
  return (
    <>
      <Herosection />
      <div className="h-20"></div>
      <PropexSlogan />
      <div className="h-12"></div>
      <Benefits />
      <div className="h-14"></div>
      <Challenges />
      <Coaching />
      <Steps />
      <IntroPrapex />
      <div className="h-20"></div>
      <Trust />
      <div className="h-20"></div>
      <Blogs />
      <div className="h-14"></div>
      <UserVideos />
    </>
  );
}
