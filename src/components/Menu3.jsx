import { useMemo } from "react";

const Menu = ({ frameDivMarginLeft, frameDivDebugCommit }) => {
  const menuStyle = useMemo(() => {
    return {
      marginLeft: frameDivMarginLeft,
      debugCommit: frameDivDebugCommit,
    };
  }, [frameDivMarginLeft, frameDivDebugCommit]);

  return (
    <form
      className="ml-[-456px] m-0 w-[380.5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-none rounded-tr-[18.04px] rounded-br-2xl rounded-bl-none bg-limegreen-100 box-border flex flex-col items-start justify-start pt-[37px] px-[51px] pb-9 gap-[29.8px] shrink-0 [debug_commit:1de1738] max-w-full border-[1px] border-solid border-gray-01 mq450:p-5 mq450:box-border mq1350:pt-6 mq1350:pb-[23px] mq1350:box-border"
      style={menuStyle}
    >
      <div className="w-[380.5px] h-[930.6px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-none rounded-tr-[18.04px] rounded-br-2xl rounded-bl-none bg-limegreen-100 box-border hidden max-w-full border-[1px] border-solid border-gray-01" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.9px]">
        <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start py-[10.9px] px-[85.7px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[88.6px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
            Home
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.9px]">
        <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[13.9px] px-[59.6px] pb-[7.9px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[136.5px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
            Schemes
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.9px]">
        <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[13.9px] px-[59.6px] pb-[7.9px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[148.1px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
            Industries
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.9px]">
        <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[13.9px] pb-[7.9px] pr-[52.2px] pl-[59.6px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="flex-1 relative text-xl font-semibold font-poppins text-gray-01 text-left z-[2] mq450:text-base">
            Individuals
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.9px]">
        <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[13.9px] px-[59.6px] pb-[7.9px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[135.1px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
            Subsides
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[13.9px] px-[59.6px] pb-[7.9px] z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
        <div className="w-[138px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
          Dry-zone
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.9px] gap-[20.8px]">
        <button className="cursor-pointer [border:none] pt-[6.9px] pb-[38.4px] pr-[5.7px] pl-1.5 bg-gainsboro self-stretch rounded-11xl flex flex-row items-start justify-end whitespace-nowrap z-[1] hover:bg-silver">
          <div className="h-[76.3px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[229.5px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2]">
            Water management
          </div>
        </button>
        <div className="self-stretch rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[8.9px] px-[50.8px] pb-[12.9px] z-[1]">
          <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[140.9px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
            Fertilizers
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.9px]">
        <div className="flex-1 rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[13.9px] px-[59.6px] pb-[7.9px] whitespace-nowrap z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[142.3px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2]">{`Shopping `}</div>
        </div>
      </div>
      <div className="self-stretch rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[13.9px] px-[59.6px] pb-[7.9px] z-[1]">
        <div className="h-[51.5px] w-[275.9px] relative rounded-11xl bg-gainsboro hidden" />
        <div className="w-[123.4px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
          Workers
        </div>
      </div>
    </form>
  );
};

export default Menu;
