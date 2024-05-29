import { useMemo } from "react";

const MenuOptions1 = ({ home, propWidth }) => {
  const home1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 text-left text-xl text-gray-01 font-poppins">
      <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start py-[11px] px-[92.4px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[52px] w-[297.5px] relative rounded-11xl bg-gainsboro hidden" />
        <div
          className="w-[95.5px] relative font-semibold inline-block shrink-0 z-[2] mq450:text-base"
          style={home1Style}
        >
          {home}
        </div>
      </div>
    </div>
  );
};

export default MenuOptions1;
