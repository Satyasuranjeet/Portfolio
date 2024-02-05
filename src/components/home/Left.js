import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FiInstagram, FiSend } from "react-icons/fi";
import CV from "../../assets/Satya_Suranjeet_Jena.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer" , "AI/ML Enthusiast"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
    const redirectToForm = () => {
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfr7K-m2gPBOVnbg7-Dr-2n5dy2RdUXYWN_D2aeVaXInjlPaA/viewform?pli=1';
    };
  
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-1/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-3xl font-semibold">Satya Suranjeet Jena</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://github.com/Satyasuranjeet"><FaGithub /></a> 
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
             <a href="https://www.linkedin.com/in/satya-suranjeet-jena-b85277222/"> <FaLinkedin /></a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
             <a href="https://www.facebook.com/rock.satya.1447/"> <BsFacebook /></a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://www.instagram.com/satyasuranjeet/"><FiInstagram /></a>
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <a href="https://twitter.com/satyasurnjeet"><AiFillTwitterCircle /></a>
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300" onClick={redirectToForm}>
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
