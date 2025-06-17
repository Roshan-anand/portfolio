import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import "@/styles/loader.css";

const Profile = () => {
  return (
    <div className="bg-prime-two text-prime-one h-screen flex items-center">
      <main className="container h-[95%] border-2 border-border-one flex flex-col rounded-tr-2xl rounded-bl-2xl relative">
        <section className="h-[40%] flex flex-col justify-end">
          <h1 className="text-center text-lg font-bold ">ROSHAN ANAND</h1>
          <h3 className="text-balance text-center font-semibold text-txt-prime">
            Let's build something amazing together!
          </h3>
        </section>

        <section className="p-2 grow flex">
          <figure className="grow flex justify-center items-center">
            <div className="size-[200px] rounded-full border-2">a</div>
          </figure>

          <figure className="grow">
            <article className="flex items-center">
              <span className="drop-loader"></span>
              <p>OPEN TO WORK</p>
            </article>
            <ul className="flex justify-between text-txt-g [&>a]:hover:scale-110 [&>a]:hover:rotate-3 [&>a]:hover:cursor-pointer">
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
        </section>

        <div className="climb-loader"></div>
      </main>
    </div>
  );
};

export default Profile;
