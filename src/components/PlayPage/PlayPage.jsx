import { useState } from "react";
import { getLottoNumbers } from "src/api/index.js";

import getNumberColor from "/src/util/getNumberColor.js";

const PlayPage = () => {
  const [lotteryNumbers, setLotteryNumbers] = useState([]);
  const generateLotteryNumbers = async () => {
    setLotteryNumbers(await getLottoNumbers());
  };
  return (
    <div
      className={
        "flex h-60 bg-base-300 text-base justify-center items-center flex-col mt-10 p-36 rounded-2xl"
      }
    >
      <h2 className={"text-2xl text-white "}>
        Hit the button below to get your lucky numbers!
      </h2>
      <div className="mt-2 text-2xl ">
        {lotteryNumbers.length > 0 ? (
          <div className="mt-3 p-4 bg-slate-700 rounded-xl">
            {lotteryNumbers.map((number) => (
              <span
                className={"text-4xl pt-1 pb-1 pl-2 pr-2 "}
                key={number}
                style={{ color: getNumberColor(number) }}
              >
                {number}
              </span>
            ))}
          </div>
        ) : (
          <div className="mt-3 p-9 text-2xl bg-base-100 pl-36 pr-48 rounded-xl"></div>
        )}
      </div>
      <div>
        <button
          className="btn w-80 text-primary-content bg-primary mt-12 hover:bg-primary/70"
          onClick={() => generateLotteryNumbers()}
        >
          Generate Lottery Numbers
        </button>
      </div>
    </div>
  );
};

export default PlayPage;
