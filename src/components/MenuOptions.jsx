import { useMemo } from "react";

const MenuOptions = ({ industries, propWidth, propDisplay, propFlex }) => {
  const industriesStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      flex: propFlex,
    };
  }, [propWidth, propDisplay, propFlex]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2">
      <button className="cursor-pointer [border:none] pt-3.5 px-[64.2px] pb-2 bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[52px] w-[297.5px] relative rounded-11xl bg-gainsboro hidden" />
        <div
          className="w-[159.7px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base"
          style={industriesStyle}
        >
          {industries}
        </div>
      </button>
    </div>
  );
};

export default MenuOptions;
