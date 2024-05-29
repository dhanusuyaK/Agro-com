import MenuItemContainers from "./MenuItemContainers";

const Menu2 = () => {
  return (
    <form className="m-0 flex-[0.7245] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-none rounded-tr-[18.04px] rounded-br-2xl rounded-bl-none bg-limegreen-100 box-border flex flex-col items-start justify-start pt-[37px] px-[49px] pb-9 gap-[29.9px] min-w-[236px] max-w-full border-[1px] border-solid border-gray-01 mq450:pl-5 mq450:pr-5 mq450:box-border mq800:flex-1 mq800:pt-5 mq800:pb-5 mq800:box-border mq1125:pt-6 mq1125:pb-[23px] mq1125:box-border">
      <div className="w-[363px] h-[938.2px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-none rounded-tr-[18.04px] rounded-br-2xl rounded-bl-none bg-limegreen-100 box-border hidden max-w-full border-[1px] border-solid border-gray-01" />
      <MenuItemContainers home="Home" />
      <MenuItemContainers home="Schemes" propWidth="130.2px" />
      <MenuItemContainers home="Industries" propWidth="141.3px" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2">
        <button className="cursor-pointer [border:none] pt-3.5 pb-2 pr-[50px] pl-[56.8px] bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[52px] w-[263.2px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="flex-1 relative text-xl font-semibold font-poppins text-gray-01 text-left z-[2] mq450:text-base">
            Individuals
          </div>
        </button>
      </div>
      <MenuItemContainers home="Subsides" propWidth="128.9px" />
      <div className="self-stretch rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[13.9px] px-[56.8px] pb-[8.1px] z-[1]">
        <div className="h-[52px] w-[263.2px] relative rounded-11xl bg-gainsboro hidden" />
        <div className="w-[131.6px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
          Dry-zone
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-[21px]">
        <button className="cursor-pointer [border:none] pt-[7px] pb-[38.9px] pr-[5.5px] pl-[38.8px] bg-gainsboro self-stretch rounded-11xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-silver">
          <div className="h-[76.9px] w-[263.2px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="relative text-xl font-semibold font-poppins text-gray-01 text-left z-[2]">
            Water management
          </div>
        </button>
        <div className="self-stretch rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[9px] px-[48.5px] pb-[13px] z-[1]">
          <div className="h-[52px] w-[263.2px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[134.4px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
            Fertilizers
          </div>
        </div>
      </div>
      <MenuItemContainers home="Shopping " propWidth="135.8px" />
      <div className="self-stretch rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-3.5 px-[56.8px] pb-2 z-[1]">
        <div className="h-[52px] w-[263.2px] relative rounded-11xl bg-gainsboro hidden" />
        <div className="w-[117.8px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
          Workers
        </div>
      </div>
    </form>
  );
};

export default Menu2;
