import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="max-w-[1440px] mx-auto text-white flex items-center justify-between border-b-gray/[.2] border-b-[1px] px-[32px]">
      <Link href="/">
        <h1 className="uppercase text-white font-antonio font-normal text-[28px] tracking-[-1.05px] cursor-pointer">
          The planets
        </h1>
      </Link>

      <div className="flex space-x-[33px] uppercase font-spartan text-white font-bold text-[11px] tracking-[1px] leading-[25px]">
        <Link href="/mercury" passHref>
          <a
            className={`py-[32px] flex justify-center align-center border-t-[4px] ${
              currentRoute === "/mercury"
                ? "border-t-dark-cyan"
                : "border-t-universe-blue"
            }`}
          >
            Mercury
          </a>
        </Link>
        <Link href="/venus">
          <a
            className={`py-[32px] flex justify-center align-center border-t-[4px] ${
              currentRoute === "/venus"
                ? "border-t-light-orange "
                : "border-t-universe-blue"
            }`}
          >
            Venus
          </a>
        </Link>
        <Link href="/earth">
          <a
            className={`py-[32px] flex justify-center align-center border-t-[4px] ${
              currentRoute === "/earth"
                ? "border-t-purple "
                : "border-t-universe-blue"
            }`}
          >
            Earth
          </a>
        </Link>
        <Link href="/mars">
          <a
            className={`py-[32px] flex justify-center align-center border-t-[4px] ${
              currentRoute === "/mars"
                ? "border-t-light-red "
                : "border-t-universe-blue"
            }`}
          >
            Mars
          </a>
        </Link>
        <Link href="/jupiter">
          <a
            className={`py-[32px] flex justify-center align-center border-t-[4px] ${
              currentRoute === "/jupiter"
                ? "border-t-red "
                : "border-t-universe-blue"
            }`}
          >
            Jupiter
          </a>
        </Link>
        <Link href="/saturn">
          <a
            className={`py-[32px] flex justify-center align-center border-t-[4px] ${
              currentRoute === "/saturn"
                ? "border-t-dark-orange "
                : "border-t-universe-blue"
            }`}
          >
            Saturn
          </a>
        </Link>
        <Link href="/uranus">
          <a
            className={`py-[32px] flex justify-center align-center border-t-[4px] ${
              currentRoute === "/uranus"
                ? "border-t-cyan "
                : "border-t-universe-blue"
            }`}
          >
            Uranus
          </a>
        </Link>
        <Link href="/neptune">
          <a
            className={`py-[32px] flex justify-center align-center border-t-[4px] ${
              currentRoute === "/neptune"
                ? "border-t-dark-blue "
                : "border-t-universe-blue"
            }`}
          >
            Neptune
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
