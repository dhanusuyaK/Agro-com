import { useNavigate } from 'react-router-dom';


const Menu = () => {
  const navigate = useNavigate();

  const handleButtonClickHome = () => {
    navigate('/home');
  };

  const handleButtonClickSchemes = () => {
    navigate('/schemes');
  };

  const handleButtonClickInduc = () => {
    navigate('/industries');
  };

  const handleButtonClickIndi = () => {
    navigate('/individuals');
  };

  const handleButtonClickSub = () => {
    navigate('/subsidies');
  };

  const handleButtonClickDry = () => {
    navigate('/dryzone');
  };

  const handleButtonClickWater = () => {
    navigate('/wm');
  };

  const handleButtonClickFerti = () => {
    navigate('/fertilizers');
  };

  const handleButtonClickShop = () => {
    navigate('/shopping');
  };

  const handleButtonClickWork = () => {
    navigate('/work');
  };


  return (
    <div className="w-[287.8px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-none rounded-tr-[18.04px] rounded-br-2xl rounded-bl-none bg-darkslategray box-border flex flex-col items-start justify-start pt-[30px] pb-[753px] pr-[38px] pl-[39.5px] gap-[27.8px] shrink-0 text-left text-xl text-gray-01 font-poppins border-[1px] border-solid border-gray-01 lg:hidden mq825:pb-[318px] mq825:box-border mq1450:pt-5 mq1450:pb-[489px] mq1450:box-border">
      <div className="w-[287.8px] h-[1584px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-tl-none rounded-tr-[18.04px] rounded-br-2xl rounded-bl-none bg-darkslategray box-border hidden border-[1px] border-solid border-gray-01" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.4px]">
        <button className="cursor-pointer [border:none] pt-[10.2px] px-[64.9px] pb-[6.9px] bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver" onClick={handleButtonClickHome}>
          <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block min-w-[67px] z-[2] mq450:text-base">
            Home
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.4px]">
        <button className="cursor-pointer [border:none] pt-[13px] px-[45.1px] pb-[4.1px] bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver" onClick={handleButtonClickSchemes}>
          <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block min-w-[103.3px] z-[2] mq450:text-base">
            Schemes
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.4px]">
        <button className="cursor-pointer [border:none] pt-[13px] px-[45.1px] pb-[4.1px] bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver"onClick={handleButtonClickInduc}>
          <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[112.1px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
            Industries
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.5px]">
        <button className="cursor-pointer [border:none] pt-[13px] pb-[4.1px] pr-[39.5px] pl-[45.1px] bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver"onClick={handleButtonClickIndi}>
          <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="flex-1 relative text-xl font-semibold font-poppins text-gray-01 text-left z-[2] mq450:text-base">
            Individuals
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.4px]">
        <button className="cursor-pointer [border:none] pt-[12.9px] px-[45.1px] pb-[4.2px] bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver" 
        onClick={handleButtonClickSub}>
          <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block min-w-[102.2px] z-[2] mq450:text-base" >
            Subsides
          </div>
        </button>
      </div>
      <button className="cursor-pointer [border:none] pt-[12.9px] px-[45.1px] pb-[4.2px] bg-gainsboro self-stretch rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver" onClick={handleButtonClickDry}>
        <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
        <div className="w-[104.4px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
          Dry-zone
        </div>
      </button>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7.4px] gap-[19.4px]">
        <div className="self-stretch rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[6.5px] pb-[2.8px] pr-[4.3px] pl-[30.8px] z-[1]" onClick={handleButtonClickWater}>
          <div className="h-[71.3px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="flex-1 relative font-semibold z-[2] mq450:text-base">
            Water management
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[8.3px] px-[38.5px] pb-[8.8px] bg-gainsboro self-stretch rounded-11xl flex flex-row items-start justify-start z-[1] hover:bg-silver"onClick={handleButtonClickFerti}>
          <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[106.6px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2] mq450:text-base">
            Fertilizers
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.5px]">
        <button className="cursor-pointer [border:none] pt-[13px] px-[45.1px] pb-[4.1px] bg-gainsboro flex-1 rounded-11xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-silver"onClick={handleButtonClickShop}>
          <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
          <div className="w-[107.7px] relative text-xl font-semibold font-poppins text-gray-01 text-left inline-block shrink-0 z-[2]">{`Shopping `}</div>
        </button>
      </div>
      <div className="self-stretch rounded-11xl bg-gainsboro flex flex-row items-start justify-start pt-[12.9px] px-[45.1px] pb-[7.4px] z-[1]"onClick={handleButtonClickWork}>
        <div className="h-[48.1px] w-[208.7px] relative rounded-11xl bg-gainsboro hidden" />
        <div className="relative leading-[27.8px] font-semibold inline-block min-w-[93.4px] z-[2] mq450:text-base mq450:leading-[22px]">
          Workers
        </div>
      </div>
    </div>
  );
};

export default Menu;
