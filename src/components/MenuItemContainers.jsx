import { useMemo } from "react";

const MenuItemContainers = ({ home, propWidth }) => {
  const homeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[8.1px] text-left text-xl text-gray-01 font-poppins">
      <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start py-[11px] px-[81.7px] z-[1]">
        <div className="h-[52px] w-[263.2px] relative rounded-11xl bg-gainsboro hidden" />
        <div
          className="w-[84.5px] relative font-semibold inline-block shrink-0 z-[2] mq450:text-base"
          style={homeStyle}
        >
          {home}
        </div>
      </div>
    </div>
  );
};

export default MenuItemContainers;
