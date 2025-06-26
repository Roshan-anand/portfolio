import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { FaFileAlt, FaLinkedinIn } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa6";
import "@/styles/loader.css";
import Connect from "./Network";
import { Button } from "./ui/button";

const Profile = () => {
  return (
    <main className="container h-[95vh] border-2 border-border-one flex flex-col rounded-tr-2xl rounded-bl-2xl relative">
      <section className="flex h-[40%]">
        <div className="mb:w-fit w-full flex flex-col">
          <figure className="grow flex flex-col justify-center md:gap-2 items-center mb:items-start p-2  border-border-one mb:border-r-2 border-b-2 ">
            <p className="text-txt-prime font-semibold flex justify-center items-center gap-2 leading-2 w-fit">
              <FaHandPeace className="icon-sm -rotate-6 text-accent-g" />
              <span>Hello, I'm</span>
            </p>
            <h1 className="text-lg font-bold leading-20">Roshan Anand</h1>
          </figure>

          <figure className="grow flex flex-col justify-center border-b-2 border-border-one">
            <div className="flex flex-col gap-4">
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

              <article className="flex items-center gap-3 mt-6">
                <Button className="flex gap-3 border-2">
                  <FaFileAlt className="icon-sm" />
                  <p>Resume</p>
                </Button>
              </article>
            </div>
          </figure>
        </div>

        <figure className="border-b-2 border-l-2 border-border-one grow hidden mb:flex justify-center items-center">
          <Connect />
        </figure>
      </section>

      <section className="p-2 flex justify-end"></section>

      <div className="climb-loader bg-prime-two border-2 border-prime-two"></div>
    </main>
  );
};

export default Profile;
