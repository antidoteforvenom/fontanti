"use client";
import React from "react";
import { useState } from "react";
export default function UsdcV() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="bg-slate-500 rounded-md ">
      <div className="group rounded-md shadow-xl p-8 flex text-center items-center justify-between bg-slate-500 w-full">
        <div className="flex items-center gap-2">
          <a>
            <svg
              className="w-14 h-12"
              viewBox="0 0 560 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_401_2)">
                <path
                  d="M280 560C435.168 560 560 435.168 560 280C560 124.832 435.168 0 280 0C124.832 0 0 124.832 0 280C0 435.168 124.832 560 280 560Z"
                  fill="#2775CA"
                />
                <path
                  d="M357 324.332C357 283.5 332.5 269.5 283.5 263.668C248.5 259 241.5 249.668 241.5 233.332C241.5 216.997 253.168 206.5 276.5 206.5C297.5 206.5 309.168 213.5 315 231C316.168 234.5 319.668 236.832 323.168 236.832H341.832C346.5 236.832 350 233.332 350 228.668V227.5C345.332 201.832 324.332 182 297.5 179.668V151.668C297.5 147 294 143.5 288.168 142.332H270.668C266 142.332 262.5 145.832 261.332 151.668V178.5C226.332 183.168 204.168 206.5 204.168 235.668C204.168 274.168 227.5 289.332 276.5 295.168C309.168 301 319.668 308 319.668 326.668C319.668 345.335 303.332 358.168 281.168 358.168C250.832 358.168 240.332 345.332 236.832 327.832C235.668 323.168 232.168 320.832 228.668 320.832H208.832C204.168 320.832 200.668 324.332 200.668 329V330.168C205.332 359.332 224 380.332 262.5 386.168V414.168C262.5 418.832 266 422.332 271.832 423.5H289.332C294 423.5 297.5 420 298.668 414.168V386.168C333.668 380.332 357 355.832 357 324.332Z"
                  fill="white"
                />
                <path
                  d="M220.5 446.832C129.5 414.168 82.8325 312.668 116.668 222.832C134.168 173.832 172.668 136.5 220.5 119C225.168 116.668 227.5 113.168 227.5 107.332V91C227.5 86.3324 225.168 82.8324 220.5 81.6676C219.332 81.6676 217 81.6676 215.832 82.8324C105 117.832 44.3324 235.668 79.3324 346.5C100.332 411.832 150.5 462 215.832 483C220.5 485.332 225.168 483 226.332 478.332C227.5 477.168 227.5 476 227.5 473.668V457.332C227.5 453.832 224 449.168 220.5 446.832ZM344.168 82.8324C339.5 80.5 334.832 82.8324 333.668 87.5C332.5 88.6676 332.5 89.8324 332.5 92.1676V108.5C332.5 113.168 336 117.832 339.5 120.168C430.5 152.832 477.168 254.332 443.332 344.168C425.832 393.168 387.332 430.5 339.5 448C334.832 450.332 332.5 453.832 332.5 459.668V476C332.5 480.668 334.832 484.168 339.5 485.332C340.668 485.332 343 485.332 344.168 484.168C455 449.168 515.668 331.332 480.668 220.5C459.668 154 408.332 103.832 344.168 82.8324Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_401_2">
                  <rect width="560" height="560" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <div>
            <p className="text-xl text-white font-semibold">BUSD</p>
            <p className="text-gray-300">BUSD</p>
          </div>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">BUSD</p>
          <p className="text-gray-300">Balance</p>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">BUSD</p>
          <p className="text-gray-300">Deposited</p>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">0 ANTI</p>
          <p className="text-gray-300">Earned</p>
        </div>
        <div>
          <p className="text-xl text-white font-semibold">8 %</p>
          <p className="text-gray-300">APY</p>
        </div>
        <div className="">
          <button
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="btn bg-[#95b677] dropdown hover:bg-lime-300 p-4 rounded-md"
          >
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.16992 10.7021L0.529297 4.06152C0.0703125 3.60254 0.0703125 2.86035 0.529297 2.40625L1.63281 1.30273C2.0918 0.84375 2.83398 0.84375 3.28809 1.30273L7.99512 6.00977L12.7021 1.30273C13.1611 0.84375 13.9033 0.84375 14.3574 1.30273L15.4609 2.40625C15.9199 2.86523 15.9199 3.60742 15.4609 4.06152L8.82031 10.7021C8.37109 11.1611 7.62891 11.1611 7.16992 10.7021Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          "w-full divide-x-2  px-6 pt-10 text-white flex justify-between" +
          (navbarOpen ? " flex" : " hidden")
        }
      >
        <div className="w-1/2  pb-6 text-end p-4">
          <label className="w-full">
            <h1 className="pb-1">Balance: 0 USDT</h1>
            <input
              type="number"
              className="w-full p-2  rounded-lg text-black border placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:ring-lime-200 focus:border-transparent border-gray-300"
            />
          </label>
          <fieldset className="space-y-1 w-full pt-4 dark:text-gray-100">
            <input
              type="range"
              className="w-full accent-lime-400"
              min="1"
              max="5"
            />
            <div
              aria-hidden="true"
              className="w-full flex justify-between px-1"
            >
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </fieldset>
          <div className="flex justify-center pt-10">
            <button className=" px-4 py-3 bg-[#95b677] rounded-md">
              APPROVE
            </button>
          </div>
        </div>
        <div className="w-1/2 text-end  pb-6 p-4">
          <label className="w-full">
            <h1 className="pb-1">Deposit: 0 USDT</h1>
            <input
              type="number"
              className="w-full p-2  rounded-lg text-black border placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  focus:ring-lime-200 focus:border-transparent border-gray-300"
            />
          </label>
          <fieldset className="space-y-1 w-full pt-4 dark:text-gray-100">
            <input
              type="range"
              className="w-full accent-lime-400"
              min="1"
              max="5"
            />
            <div
              aria-hidden="true"
              className="w-full flex justify-between px-1"
            >
              <span>0%</span>
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>100%</span>
            </div>
          </fieldset>
          <div className="flex justify-center gap-6 pt-10">
            <button className=" px-4 py-3 bg-[#95b677] rounded-md">
              WITHDRAW
            </button>
            <button className=" px-4 py-3 bg-[#95b677] rounded-md">
              CLAIM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
