import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn, FaDiscord, FaGlobe } from "react-icons/fa";

const RootSvg = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 264 200" fill="none">
      <path
        d="M132 196L100 148M132 196L196 100M132 196H68L100 148M132 196L228 148L260 100H196M100 148H36M100 148L132 100M36 148L4 100H132M36 148L132 100M196 100L164 52.1752L196 4M100 52L132 100M100 52L196 4M100 52L36 52.1752M132 100L228 52L196 4"
        stroke="#3A3A3A"
      ></path>
      <path
        d="M36 52.1752V148L132 196V100L228 148H164L196 196M196 4H132L100 52L68 100V4"
        stroke="#3A3A3A"
      ></path>
      <circle fill="#666666" r="4" cx="132" cy="4"></circle>
      <circle fill="#666666" r="4" cx="196" cy="4"></circle>
      <circle fill="#666666" r="4" cx="36.7559" cy="53.5156"></circle>
      <circle fill="#666666" r="4" cx="98.0947" cy="53.5156"></circle>
      <circle fill="#666666" r="4" cx="164" cy="52"></circle>
      <circle fill="#3cd9b3" r="4" cx="228" cy="52"></circle>
      <circle fill="#666666" r="4" cx="4" cy="100"></circle>
      <circle fill="#3cd9b3" r="4" cx="68" cy="99.9922"></circle>
      <circle fill="#666666" r="4" cx="196" cy="100"></circle>
      <circle fill="#666666" r="4" cx="36" cy="148"></circle>
      <circle fill="#3cd9b3" r="4" cx="100" cy="148"></circle>
      <circle fill="#3cd9b3" r="4" cx="164" cy="148"></circle>
      <circle fill="#3cd9b3" r="4" cx="228" cy="148"></circle>
      <circle fill="#666666" r="4" cx="132" cy="196"></circle>
    </svg>
  );
};

const Connect = () => {
  return (
    <div className="relative p-2 [&>a]:hover:scale-110 [&>a]:hover:cursor-pointer">
      <RootSvg />

      <FaGlobe className="absolute top-1/2 left-1/2 -translate-1/2 bg-prime-two text-accent-g icon-sm" />

      <a
        href="https://github.com/roshan-anand/"
        target="_blank"
        className="absolute top-0 left-[22%] bg-prime-two rounded-full border-2 border-accent-g p-1"
      >
        <FiGithub className="icon-sm text-accent-g" />
      </a>
      <a
        href="https://x.com/R0SHAN_ANAND"
        target="_blank"
        className="absolute top-[45%] right-0 bg-prime-two rounded-full border-2 border-accent-g p-1"
      >
        <FiTwitter className="icon-sm text-accent-g" />
      </a>

      <a
        href="mailto:roshan4nand@gmail.com"
        target="_blank"
        className="absolute -bottom-[5%] left-[21%] bg-prime-two rounded-full border-2 border-accent-g p-1"
      >
        <FiMail className="icon-sm text-accent-g" />
      </a>
      <a
        href="https://www.linkedin.com/in/roshan-anand-a92b1a23a/"
        target="_blank"
        className="absolute -bottom-[7%] right-[19%] bg-prime-two rounded-full border-2 border-accent-g p-1"
      >
        <FaLinkedinIn className="icon-sm text-accent-g" />
      </a>

      <a
        href="#"
        target="_blank"
        className="absolute -top-[2%] right-[20%] bg-prime-two rounded-full border-2 border-accent-g p-1"
      >
        <FaDiscord className="icon-sm text-accent-g" />
      </a>
    </div>
  );
};

export default Connect;
