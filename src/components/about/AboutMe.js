import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Satya Suranjeet Jena</h2>
          <p className="text-base leading-6 ">
          Passionate Full-Stack Web AI/ML & Cloud Solutions Novice from Bhubaneswar. Dedicated to crafting innovative digital solutions with cutting-edge tech. Eager to contribute to the synergy of AI, ML, and cloud computing. Let's collaborate for a tech-driven future!
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            21
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Bhubaneswar 
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Odisha, India
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
