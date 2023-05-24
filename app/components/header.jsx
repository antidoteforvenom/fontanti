import React from "react";

export default function Header() {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-right">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
          Antidote <span className="text-indigo-400 text-xl"> memecoin</span>
        </h1>
        <p className="text-gray-300 max-w-xl leading-relaxed text-xl sm:mx-auto lg:ml-0">
          Antidote is a memecoin built on top of the Venom Network. It is still
          under development, but the team has big plans for the project. In the
          near future, they will be releasing a staking function that will allow
          users to earn governance tokens as a reward for staking their tokens.
          The team also has a number of other ideas that they plan to implement,
          such as a DAO and liquid staking.
        </p>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <img
          src="https://cdn.discordapp.com/attachments/1105287070928351332/1110180018824429611/IMG_6212.png"
          className="w-full mx-auto sm:w-10/12  lg:w-full"
        />
      </div>
    </section>
  );
} /*
  <img https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
          className=""
          src="https://dfi.money/static/media/man@2x.b4afd693.png"
          alt=""
        />*/
