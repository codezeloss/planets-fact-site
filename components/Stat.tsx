interface Props {
  title: string;
  info: string;
}

const Stat = ({ title, info }: Props) => {
  return (
    <div className="w-[255px] h-[128px] py-[20px] px-[23px] flex flex-col border-white/[.2] border-[1px] font-spartan 2bp:h-[88px] 2bp:px-[15px] 2bp:py-[19px] 2bp:justify-center 2bp:gap-[4px]">
      <p className="text-white/[.5] font-spartan font-bold text-[11px] leading-[25px] tracking-[1px] uppercase 2bp:text-[8px] 2bp:leading-[16px]">
        {title}
      </p>

      <p className="font-antonio text-white font-normal text-[40px] leading-[52px] tracking-[-1.5px] uppercase 2bp:text-[24px] 2bp:leading-[31px]">
        {info}
      </p>
    </div>
  );
};

export default Stat;
