import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa6";
import { GrArchlinux } from "react-icons/gr";
import "@/styles/loader.css";
import Connect from "./Network";

const Profile = () => {
  return (
    <div className="bg-prime-two text-prime-one h-screen flex items-center">
      <main className="container h-[95%] border-2 border-border-one flex flex-col rounded-tr-2xl rounded-bl-2xl relative">
        <section className="h-[40%] flex flex-col justify-end items-center gap-1 [&>*]:leading-14">
          <p className="text-txt-prime font-semibold flex items-center gap-2">
            <FaHandPeace className="icon-sm -rotate-6 text-accent-g" />
            <span>Hello, I'm</span>
          </p>
          <h1 className="text-center text-lg font-bold">Roshan Anand</h1>
          <h3 className="text-balance text-center font-semibold text-txt-prime mt-3">
            Let's build something amazing together!
          </h3>
        </section>

        <section className="p-2 grow flex">
          <figure className="hidden md:flex  justify-center items-center grow">
            <Connect />
          </figure>

          <figure className="grow flex flex-col justify-center items-center">
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

              <article className="flex items-center gap-3">
                <GrArchlinux className="icon-sm text-accent-g" />
                <p>
                  I use <span className="text-accent-g font-bold">Arch</span>{" "}
                  btw
                </p>
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
            </div>
          </figure>
        </section>

        <div className="climb-loader"></div>
      </main>
    </div>
  );
};

export default Profile;
