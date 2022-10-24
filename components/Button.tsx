interface Props {
  num: string;
  text: string;
  color: string;
}

const Button = ({ num, text, color }: Props) => {
  return (
    <div
      className={`w-[350px] text-white flex py-[12px] px-[28px] items-center border-white/[.2] border-[1px] cursor-pointer hover:bg-[#D8D8D8]/[.2] tracking-[2.57143px] 2bp:px-[20px] 2bp:w-[281px] bg-${color ? color : ""}`}
    >
      <p className="text-white/[.5] text-[12px] font-spartan font-bold mr-[28px] 2bp:text-[9px] 2bp:tracking-[1.92857px] 2bp:mr-[14px]">
        {num}
      </p>

      <p className="text-[12px] text-white uppercase font-spartan font-bold tracking-[2.57143px] leading-[25px] 2bp:text-[9px] 2bp:tracking-[1.92857px]">
        {text}
      </p>
    </div>
  );
};

export default Button;
