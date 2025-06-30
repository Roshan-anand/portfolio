import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { FaFileAlt, FaLinkedinIn } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa6";
import "@/styles/loader.css";
import Connect from "./Network";
import { Button } from "./ui/button";
import Tech from "./tech";
import DigitalClock from "./Clock";

const Profile = () => {
  return (
    <main className="container h-[95vh] border-2 border-border-one rounded-tr-2xl rounded-bl-2xl relative grid grid-cols-[30%_30%_40%] grid-rows-[30%_20%_20%_30%]">
      <figure className="flex flex-col justify-center items-center col-span-3 row-span-1">
        <p className="text-txt-prime font-bold flex justify-center items-center gap-2 leading-2">
          <FaHandPeace className="icon-sm -rotate-6 text-accent-g" />
          <span>Hello, I'm</span>
        </p>
        <h1 className="text-lg font-bold leading-20">Roshan Anand</h1>
      </figure>

      <figure className="col-span-2 row-span-1 flex gap-4 flex-col justify-center border-b-2 border-border-one p-2">
        <article className="flex  items-center gap-2">
          <span className="drop-loader icon-sm"></span>
          <p>
            OPEN TO WORK [
            <span className="text-accent-g font-bold">BACKEND</span>/
            <span className="text-accent-g font-bold">FULLSTACK</span>]
          </p>
        </article>

        <article className="flex items-center gap-3">
          <div className="loc-shape icon-sm"></div>
          <p>FROM INDIA</p>
        </article>

        <article className="flex items-center gap-3 mt-6">
          <Button className="flex gap-3 border-2">
            <FaFileAlt className="icon-sm" />
            <p>Resume</p>
          </Button>
        </article>
        <ul className="flex md:hidden justify-between text-accent-g [&>a]:hover:scale-110 [&>a]:hover:rotate-3 [&>a]:hover:cursor-pointer">
          <a href="">
            <FiGithub className="icon-sm" />
          </a>
          <a href="">
            <FiTwitter className="icon-sm" />
          </a>
          <a href="">
            <FiMail className="icon-sm" />
          </a>
          <a href="">
            <FaLinkedinIn className="icon-sm" />
          </a>
        </ul>
      </figure>

      <figure className="col-span-1 row-span-2 border-2 border-r-0 border-border-one hidden mb:flex justify-center items-center">
        <Connect />
      </figure>

      <Tech />

      <DigitalClock />

      <div className="climb-loader bg-prime-two border-2 border-prime-two"></div>
    </main>
  );
};

export default Profile;
