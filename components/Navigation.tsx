import Image from "next/image";
import Link from "next/link";
import icons from "../constants/icons";

interface Props {
  title: string;
  toPath: string;
  color: string;
  navBtnClicked: any;
}

const Navigation = ({ title, toPath, color, navBtnClicked }: Props) => {
  return (
    <div onClick={navBtnClicked}>
      <Link href={`/${toPath}`}>
        <div className="flex flex-row justify-between border-b-[1px] border-b-white/[.1] py-[20px] w-[100%] top-0 right-0 bg-universe-blue cursor-pointer">
          <div className="flex space-x-[24px]">
            <div className={`w-[20px] h-[20px] rounded-full bg-${color}`}></div>

            <div className="font-spartan font-bold text-[15px] leading-[25px] tracking-[1.36364px] uppercase">
              {title}
            </div>
          </div>

          <div className="w-[6px] h-[8px] cursor-pointer mr-[8px]">
            <Image
              className="w-[6px] h-[8px]"
              src={icons.iconChevron}
              alt="Chevron icon"
              width="6px"
              height="8px"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
