import React from "react";

import StxImg from "../../../assets/img/stx.png";
import BtcImg from "../../../assets/img/btc.png";
import { ReactComponent as InfoImg } from "../../../assets/img/info.svg";
import { ReactComponent as SettingImg } from "../../../assets/img/setting.svg";
import { ReactComponent as ChervonDownImg } from "../../../assets/img/chervon-down.svg";
import { SwapProgress } from "../Swap";

const CatamaranSwap = ({
  setSwapProgress,
}: {
  setSwapProgress: React.Dispatch<React.SetStateAction<SwapProgress>>;
}) => {
  return (
    <div className="w-full p-5 flex flex-col gap-3 bg-white dark:bg-[rgba(11,11,15,0.9)] rounded-[18px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <p className="text-base leading-6 font-normal">Catamaran Swap</p>
          <InfoImg className="dark:stroke-white stroke-special-black" />
        </div>
        <SettingImg className="dark:stroke-white stroke-special-black" />
      </div>
      <div className="p-5 flex justify-between items-center rounded-lg bg-[rgba(7,7,10,0.03)] dark:bg-[#14151A] border-[1px] border-[rgba(7,7,10,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <div className="w-full">
          <p className="text-xs font-light leading-[14px] opacity-50">
            You send
          </p>
          <div className="mt-2 w-full flex justify-between items-center">
            <input
              className="text-[28px] leading-6 font-light bg-transparent outline-none w-1/2"
              defaultValue={1}
              type="number"
            />
            <div className="flex gap-2 items-center">
              <img className="h-7 w-7" src={StxImg} alt="" />
              <p className="text-xl font-medium leading-6">STX</p>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="mt-4 text-xs leading-[14px] font-light opacity-50">
              ≈$275,208
            </p>
            <p className="mt-4 text-xs leading-[14px] font-light opacity-50">
              Balance: 100 STX
            </p>
          </div>
          <div className="mt-2.5 mb-1 rounded-lg w-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between p-4 pl-3 border-[1px] border-[rgba(7,7,10,0.1)] dark:border-[rgba(255,255,255,0.1)] bg-[rgba(7,7,10,0.04)] text-sm leading-[17px] font-normal">
            <div className="flex gap-1.5 items-center opacity-50">
              <p>Your BTC address</p>
              <InfoImg className="w-3 h-3 dark:stroke-white stroke-special-black" />
            </div>
            <p className="text-xs">1LdSd6KTEvJ...uLzczMYC1</p>
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-between items-center rounded-lg bg-[rgba(7,7,10,0.03)] dark:bg-[#14151A] border-[1px] border-[rgba(7,7,10,0.1)] dark:border-[rgba(255,255,255,0.1)]">
        <div className="w-full">
          <p className="text-xs font-light leading-[14px] opacity-50">
            You receive
          </p>
          <div className="w-full flex justify-between">
            <p className="mt-2 text-[28px] leading-6 font-light">0.000035</p>
            <div className="flex gap-2 items-center">
              <img className="h-7 w-7" src={BtcImg} alt="" />
              <p className="text-xl font-medium leading-6">BTC</p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-[14px] font-light opacity-50">
            ≈$275,469
            <span className="ml-1 text-[#559276]">(0.0965%)</span>
          </p>
          <input
            type="text"
            className="w-full mt-6 mb-1 text-sm leading-[17px] font-normal outline-none bg-transparent"
            placeholder="+ Add Receiver BTC address"
          />
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-10">
        <p className="py-2 text-sm leading-5 font-light">
          1 BTC = 0.0004354 STX
          <span className="opacity-50"> ($1.00043) </span>
        </p>
        <ChervonDownImg className="dark:fill-white fill-special-black flex-none" />
      </div>
      <button
        className="mt-5 rounded-full w-full py-3 dark:bg-white bg-special-black text-base font-medium leading-5 text-white dark:text-special-black"
        onClick={() => setSwapProgress(SwapProgress.SWAP_CONFIRM)}
      >
        Preview Swap
      </button>
    </div>
  );
};

export default CatamaranSwap;
