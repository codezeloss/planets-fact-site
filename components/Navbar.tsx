import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import icons from "../constants/icons";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [navClicked, setNavClicked] = useState(false);

  const navClickHandler = () => {
    setNavClicked((prevState) => !prevState);
  };

  return (
    <>
      <nav className="max-w-[1440px] mx-auto text-white flex items-center justify-between border-b-gray/[.2] border-b-[1px] px-[32px] 1bp:flex-col 1bp:mt-[32px] 1bp:gap-[22px] 3bp:flex-row 3bp:mt-0 3bp:py-[17px] 3bp:items-center">
        <Link href="/">
          <h1 className="uppercase text-white font-antonio font-normal text-[28px] tracking-[-1.05px] cursor-pointer">
            The planets
          </h1>
        </Link>

        <div className="flex space-x-[33px] uppercase font-spartan text-white font-bold text-[11px] tracking-[1px] leading-[25px] 3bp:hidden">
          <Link href="/mercury" passHref>
            <a
              className={`py-[32px] 1bp:py-[12px] flex justify-center align-center border-t-[4px] 1bp:border-t-0 1bp:border-b-[4px] ${
                currentRoute === "/mercury"
                  ? "border-t-dark-cyan 1bp:border-b-dark-cyan"
                  : "border-t-universe-blue 1bp:border-b-universe-blue"
              }`}
            >
              Mercury
            </a>
          </Link>
          <Link href="/venus" passHref>
            <a
              className={`py-[32px] 1bp:py-[12px] flex justify-center align-center border-t-[4px] border-t-[4px] 1bp:border-t-0 1bp:border-b-[4px] ${
                currentRoute === "/venus"
                  ? "border-t-light-orange 1bp:border-b-light-orange"
                  : "border-t-universe-blue 1bp:border-b-universe-blue"
              }`}
            >
              Venus
            </a>
          </Link>
          <Link href="/earth" passHref>
            <a
              className={`py-[32px] 1bp:py-[12px] flex justify-center align-center border-t-[4px] 1bp:border-t-0 1bp:border-b-[4px] ${
                currentRoute === "/earth"
                  ? "border-t-purple 1bp:border-b-purple"
                  : "border-t-universe-blue 1bp:border-b-universe-blue"
              }`}
            >
              Earth
            </a>
          </Link>
          <Link href="/mars" passHref>
            <a
              className={`py-[32px] 1bp:py-[12px] flex justify-center align-center border-t-[4px] 1bp:border-t-0 1bp:border-b-[4px] ${
                currentRoute === "/mars"
                  ? "border-t-light-red 1bp:border-b-light-red"
                  : "border-t-universe-blue 1bp:border-b-universe-blue"
              }`}
            >
              Mars
            </a>
          </Link>
          <Link href="/jupiter" passHref>
            <a
              className={`py-[32px] 1bp:py-[12px] flex justify-center align-center border-t-[4px] 1bp:border-t-0 1bp:border-b-[4px] ${
                currentRoute === "/jupiter"
                  ? "border-t-red 1bp:border-b-red"
                  : "border-t-universe-blue 1bp:border-b-universe-blue"
              }`}
            >
              Jupiter
            </a>
          </Link>
          <Link href="/saturn" passHref>
            <a
              className={`py-[32px] 1bp:py-[12px] flex justify-center align-center border-t-[4px] 1bp:border-t-0 1bp:border-b-[4px] ${
                currentRoute === "/saturn"
                  ? "border-t-dark-orange 1bp:border-b-dark-orange"
                  : "border-t-universe-blue 1bp:border-b-universe-blue"
              }`}
            >
              Saturn
            </a>
          </Link>
          <Link href="/uranus" passHref>
            <a
              className={`py-[32px] 1bp:py-[12px] flex justify-center align-center border-t-[4px] 1bp:border-t-0 1bp:border-b-[4px] ${
                currentRoute === "/uranus"
                  ? "border-t-cyan 1bp:border-b-cyan"
                  : "border-t-universe-blue 1bp:border-b-universe-blue"
              }`}
            >
              Uranus
            </a>
          </Link>
          <Link href="/neptune" passHref>
            <a
              className={`py-[32px] 1bp:py-[12px] flex justify-center align-center border-t-[4px] 1bp:border-t-0 1bp:border-b-[4px] ${
                currentRoute === "/neptune"
                  ? "border-t-dark-blue 1bp:border-b-dark-blue"
                  : "border-t-universe-blue 1bp:border-b-universe-blue"
              }`}
            >
              Neptune
            </a>
          </Link>
        </div>

        {/* Mobile nav */}
        <div
          className="hidden 3bp:inline cursor-pointer"
          onClick={navClickHandler}
        >
          <Image src={icons.iconHamburger} alt="" width="24px" height="17px" />
        </div>
      </nav>
      {navClicked && <NavMobile navBtnClicked={navClickHandler} />}
    </>
  );
};

export default Navbar;
