import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const Profile = () => {
  return (
    <figure className="bg-sec rounded-md w-full mb:max-w-[344px] mb:h-[600px] px-[25px] py-[20px]">
      <div className="h-full flex flex-col justify-between ">
        <section className="flex flex-col items-center gap-4">
          <div className="rounded-md overflow-hidden w-[240px] h-[280px] ">
            <img
              className="object-cover size-full"
              src="https://avatars.githubusercontent.com/u/12345678?v=4"
              alt="Profile"
            />
          </div>
          <div >
            <h3 className="text-center text-lg font-semibold mt-2">
              ROSHAN ANAND
            </h3>
            <p className="text-balance text-center font-semibold opacity-80">
              Let's build something amazing together!
            </p>
          </div>
        </section>
        <ul className="flex justify-between min-w-[200px] w-[70%] mx-auto gap-1 text-accent-two [&>a]:hover:scale-110 [&>a]:hover:rotate-3 [&>a]:hover:cursor-pointer">
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
  );
};

export default Profile;
