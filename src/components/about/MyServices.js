import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Elevate your online presence with our top-tier web development services. We specialize in creating visually appealing and high-performance websites."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Transform visions into captivating designs with our Figma web design services. We craft visually stunning interfaces, ensuring seamless user experiences and pixel-perfect precision for your digital success."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Elevate your mobile app with our Figma design expertise. We create sleek interfaces, ensuring seamless interactions and pixel-perfect precision for optimal user experiences."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
      title="Logo Design"
        subTitle="Transform your brand identity with our logo design expertise. We craft distinctive logos on Figma, ensuring uniqueness and visual appeal that resonates with your brand's essence."
      />
    </div>
  );
};

export default MyServices;
