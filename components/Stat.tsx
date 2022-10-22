interface Props {
  title: string;
  info: string;
}

const Stat = ({ title, info }: Props) => {
  return (
    <div className="w-[255px] h-[128px] py-[20px] px-[23px] flex flex-col justify-between border-white/[.2] border-[1px] font-spartan">
      <p className="text-white/[.5] font-spartan font-bold text-[11px] leading-[25px] tracking-[1px] uppercase">
        {title}
      </p>

      <p className="font-antonio text-white font-normal text-[40px] leading-[52px] tracking-[-1.5px] uppercase">
        {info}
      </p>
    </div>
  );
};

export default Stat;
