import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import icons from "../constants/icons";
import Button from "./Button";
import Stat from "./Stat";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
interface Props {
  imageOverview: string;
  imageStructure: string;
  imageGeology: any;
  title: string;
  textOverview: string;
  textStructure: string;
  textGeology: string;
  source: string;
  sourceName: string;
  rotationInfo: string;
  revolutionInfo: string;
  radiusInfo: string;
  tempInfo: string;
  bgColor: string;
}

const Planet = ({
  imageOverview,
  imageStructure,
  imageGeology,
  title,
  textOverview,
  textStructure,
  textGeology,
  source,
  sourceName,
  rotationInfo,
  revolutionInfo,
  radiusInfo,
  tempInfo,
  bgColor,
}: Props) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [overviewClicked, setOverviewIsClicked] = useState(true);
  const [structureClicked, setStructureIsClicked] = useState(false);
  const [geologyClicked, setGeologyIsClicked] = useState(false);

  const overviewClickHandler = () => {
    setOverviewIsClicked(true);

    setStructureIsClicked(false);
    setGeologyIsClicked(false);
  };

  const structureClickHandler = () => {
    setStructureIsClicked(true);

    setOverviewIsClicked(false);
    setGeologyIsClicked(false);
  };

  const geologyClickHandler = () => {
    setGeologyIsClicked(true);

    setOverviewIsClicked(false);
    setStructureIsClicked(false);
  };

  const colors = `py-[20px] ${
    overviewClicked
      ? `${currentRoute === "/mercury" ? "bg-dark-cyan" : ""} ${
          currentRoute === "/venus" ? "bg-light-orange" : ""
        } ${currentRoute === "/earth" ? "bg-purple" : ""} ${
          currentRoute === "/mars" ? "bg-light-red" : ""
        } ${currentRoute === "/jupiter" ? "bg-red" : ""} ${
          currentRoute === "/saturn" ? "bg-dark-orange" : ""
        } ${currentRoute === "/uranus" ? "bg-cyan" : ""} ${
          currentRoute === "/neptune" ? "bg-dark-blue" : ""
        }`
      : ""
  }`;

  const navClasses = `py-[20px] ${
    currentRoute === "/mercury"
      ? "border-b-dark-cyan border-b-[4px] text-white"
      : "border-b-purple border-b-[4px] text-white"
  } ${
    currentRoute === "/venus"
      ? "border-b-light-orange border-b-[4px] text-white"
      : ""
  } ${
    currentRoute === "/earth" ? "border-b-purple border-b-[4px] text-white" : ""
  } ${
    currentRoute === "/mars"
      ? "border-b-light-red border-b-[4px] text-white"
      : ""
  } ${
    currentRoute === "/jupiter" ? "border-b-red border-b-[4px] text-white" : ""
  } ${
    currentRoute === "/saturn"
      ? "border-b-dark-orange border-b-[4px] text-white"
      : ""
  } ${
    currentRoute === "/uranus"
      ? "border-b-cyan border-b-[4px] text-white cyan"
      : ""
  } ${
    currentRoute === "/neptune"
      ? "border-b-dark-blue border-b-[4px] text-white "
      : ""
  }`;

  return (
    <>
      <div className="hidden 3bp:flex flex-row font-spartan font-bold text-[14px] leading-[10px] tracking-[1.92857px] uppercase text-white/[.5] px-[32px] justify-between items-center border-b-[1px] border-b-gray/[.2]">
        <div className="cursor-pointer" onClick={overviewClickHandler}>
          <p className={overviewClicked ? navClasses : ""}>Overview</p>
        </div>
        <div className="cursor-pointer" onClick={structureClickHandler}>
          <p className={structureClicked ? navClasses : ""}>Structure</p>
        </div>
        <div className="cursor-pointer" onClick={geologyClickHandler}>
          <p className={geologyClicked ? navClasses : ""}>Surface</p>
        </div>
      </div>
      <div className="w-[1108px] mx-auto p-[1.8rem] mt-[150px] mb-[56px] 1bp:mt-[146px] 1bp:w-[100%] relative z-[20] 3bp:mt-[50px]">
        <div className="mb-[87px] flex justify-between 1bp:flex-col 1bp:gap-[130px] 1bp:w-[100%] 2bp:mb-[27px] 3bp:gap-[50px]">
          <div className="flex justify-center items-center w-[100%]">
            <div>
              {overviewClicked && (
                <motion.div
                  className="3bp:max-w-[290px] 3bp:max-h-[290px] box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Image
                    className="animate-[wiggle_1s_ease-in-out_infinite]"
                    src={imageOverview ? imageOverview : ""}
                    alt="Overview image"
                    width="400px"
                    height="400px"
                  />
                </motion.div>
              )}
            </div>
            <div>
              {structureClicked && (
                <motion.div
                  className="3bp:max-w-[290px] 3bp:max-h-[290px] box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <Image
                    className="animate-[wiggle_1s_ease-in-out_infinite]"
                    src={imageStructure ? imageStructure : ""}
                    alt="Structure Image"
                    width="400px"
                    height="400px"
                  />
                </motion.div>
              )}
            </div>
            <div>
              {geologyClicked && (
                <div className="flex justify-center 3bp:mb-[80px]">
                  <div className="3bp:max-w-[290px] 3bp:max-h-[290px]">
                    <Image
                      src={imageOverview ? imageOverview : ""}
                      alt="Overview Image"
                      width="400px"
                      height="400px"
                    />
                  </div>
                  <motion.div
                    className="absolute z-[10] mt-[275px] box 3bp:mt-[190px]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Image
                      src={imageGeology ? imageGeology : ""}
                      alt="Surface Image"
                      width="163px"
                      height="199px"
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </div>

          <div className="w-[350px] 1bp:w-[100%] 1bp:flex 1bp:gap-[69px] 1bp:flex-row 1bp:items-center 1bp:justify-between">
            <section className="1bp:w-[100%] 3bp:text-center">
              <h2 className="font-antonio font-normal text-[80px] leading-[104px] uppercase text-white mb-[24px] 2bp:text-[48px]">
                {title}
              </h2>

              <p className="font-spartan font-normal text-white text-[14px] leading-[25px] mb-[24px]">
                {overviewClicked && textOverview}
                {structureClicked && textStructure}
                {geologyClicked && textGeology}
              </p>

              <div className="flex font-spartan text-white/[.5] mb-[39px] 2bp:mb-0 3bp:w-fit 3bp:mx-auto">
                <p className="mr-[4px]">Source : </p>
                <Link href={source}>
                  <a
                    target="_blank"
                    className="font-bold underline mr-[8px] cursor-pointer"
                  >
                    {sourceName}
                  </a>
                </Link>
                <div className="max-w-[12px max-h-[12px]">
                  <Image
                    className="w-[12px h-[12px]"
                    src={icons?.iconSource}
                    alt="source icon"
                    width="12px"
                    height="12px"
                  />
                </div>
              </div>
            </section>

            <div className={`flex flex-col space-y-[16px] 3bp:hidden`}>
              <div onClick={overviewClickHandler}>
                <Button
                  num="01"
                  text="Overview"
                  color={`${overviewClicked ? `${bgColor}` : ""}`}
                />
              </div>
              <div onClick={structureClickHandler}>
                <Button
                  num="02"
                  text="Internal Structure"
                  color={`${structureClicked ? `${bgColor}` : ""}`}
                />
              </div>
              <div onClick={geologyClickHandler}>
                <Button
                  num="03"
                  text="Surface Geology"
                  color={`${geologyClicked ? `${bgColor}` : ""}`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-[30px] 1bp:space-x-[11px] 4bp:flex-col 4bp:space-x-0 4bp:space-y-[8px]">
          <Stat title="Rotation time" info={rotationInfo} />
          <Stat title="Revolution time" info={revolutionInfo} />
          <Stat title="Radius" info={radiusInfo} />
          <Stat title="Average temp." info={tempInfo} />
        </div>
      </div>
    </>
  );
};

export default Planet;
