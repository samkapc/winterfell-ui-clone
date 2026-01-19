import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-centre">
      <main className="h-screen">
        <div className="flex flex-col gap-4 text-center">
          <div className="text-6xl text-[#D9D9D9] font-semibold flex flex-col gap-4">
            <p>Ship Solana Contracts</p>
            <p className="bg-linear-to-b from-[#D9D9D9] to-[#606060] bg-clip-text text-transparent">
              in Minutes not Months
            </p>
          </div>
          <div className="text-[#A7A7A7] font-mono text-[0.95rem]">
            <span>Winterfell eats months. Ships in minutes</span>
          </div>
        </div>

        <div className="flex flex-col border border-[#252525] drop-shadow-white text-white rounded-lg min-w-[45vw]  mt-6">
          <div className="flex justify-between bg-[#111111] p-2 font-mono rounded-lg">
            <div className="flex item-center text-[#5A5A5A] items-center gap-2">
              <span className="text-[#3F3F3F] text-xl tracking-wider">●●●</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-terminal w-2 h-2 md:w-3.5 md:h-3.5"
                aria-hidden="true"
              >
                <path d="M12 19h8"></path>
                <path d="m4 17 6-6-6-6"></path>
              </svg>
              <span className="text-sm">winterfell.dev</span>
            </div>
            <div className="flex text-[#404040] text-sm gap-2">
              <span>●</span>
              <span>idle</span>
            </div>
          </div>

          <div className="flex bg-[#0A0A0A]">
            <span className="text-[#4C4C4C] font-mono ml-5 mt-4">{">"}</span>
            <textarea
              className="flex rounded-md border-input shadow-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-20 md:h-28 bg-transparent py-5 px-3 text-neutral-200 border-0 placeholder:text-neutral-800 placeholder:font-mono placeholder:text-xs md:placeholder:text-sm resize-none focus:outline-none transition-all duration-200 text-md tracking-wider caret-[#e6e0d4]"
              placeholder="create a counter contract..."
              rows="3"
            ></textarea>
          </div>

          <div className="flex justify-between bg-[#111111] p-2 font-mono rounded-lg">
            <div className="flex item-center text-[#5A5A5A] items-center gap-6">
              <button className="flex bg-[#1F183A] rounded-full px-2 py-1 gap-1">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  color="#6c44fc"
                  style={{ color: "#6c44fc" }}
                  height="14"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 11.16c.887-.933 1.813-1.865 2.78-2.6C15.952 7.668 17.267 7 18.75 7 21.657 7 24 9.615 24 12.25s-2.343 5.25-5.25 5.25c-1.483 0-2.798-.668-3.97-1.56-.967-.735-1.893-1.667-2.78-2.6-.887.933-1.813 1.865-2.78 2.6-1.172.892-2.487 1.56-3.97 1.56C2.343 17.5 0 14.885 0 12.25S2.343 7 5.25 7c1.483 0 2.798.667 3.97 1.56.967.735 1.893 1.667 2.78 2.6ZM5.25 8.5c-2.032 0-3.75 1.895-3.75 3.75S3.218 16 5.25 16c1.017 0 2.014-.457 3.062-1.253.89-.678 1.758-1.554 2.655-2.497-.897-.943-1.765-1.82-2.655-2.497C7.264 8.957 6.267 8.5 5.25 8.5Zm7.783 3.75c.897.943 1.765 1.82 2.655 2.497C16.736 15.543 17.733 16 18.75 16c2.032 0 3.75-1.895 3.75-3.75S20.782 8.5 18.75 8.5c-1.017 0-2.014.457-3.062 1.253-.89.678-1.758 1.554-2.655 2.497Z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "#442D99" }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-up size-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>

              <button className="flex items-center text-sm gap-1 hover:text-white/75 cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  class="md:w-3.5 md:h-3.5 w-2 h-2 mb-0.5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.127 3.502 5.25 3.5h9.5c.041 0 .082 0 .123.002A2.251 2.251 0 0 0 12.75 2h-5.5a2.25 2.25 0 0 0-2.123 1.502ZM1 10.25A2.25 2.25 0 0 1 3.25 8h13.5A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75v-5.5ZM3.25 6.5c-.04 0-.082 0-.123.002A2.25 2.25 0 0 1 5.25 5h9.5c.98 0 1.814.627 2.123 1.502a3.819 3.819 0 0 0-.123-.002H3.25Z"></path>
                </svg>
                templates
              </button>

              <span className="text-xs text-white/15">
                {"| "}
                <span className="text-white/35">0</span>
                {" / 200"}
              </span>
            </div>
            <div className="text-white/50">
              <button className="px-4 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right md:w-3 md:h-3 w-1 h-1 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center mt-8">
          <div className="flex items-center gap-2 text-xs bg-[#161717] border border-[#1E1E1E] rounded-sm text-[#707070] py-1 px-2 font-mono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-terminal w-3 h-3 mb-0.5 text-[#d41b1b]"
              aria-hidden="true"
            >
              <path d="M12 19h8"></path>
              <path d="m4 17 6-6-6-6"></path>
            </svg>
            Generate
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right w-3 h-3 text-[#9b9b9b]"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <div className="flex items-center gap-2 text-xs bg-[#161717] border border-[#1E1E1E] rounded-sm text-[#707070] py-1 px-2 font-mono">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="w-3 h-3 mb-0.5 text-[#FFC412]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.98 11.802a.995.995 0 0 0-.738-.771l-6.86-1.716 2.537-5.921a.998.998 0 0 0-.317-1.192.996.996 0 0 0-1.234.024l-11 9a1 1 0 0 0 .39 1.744l6.719 1.681-3.345 5.854A1.001 1.001 0 0 0 8 22a.995.995 0 0 0 .6-.2l12-9a1 1 0 0 0 .38-.998z"></path>
            </svg>
            Deploy
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right w-3 h-3 text-[#9b9b9b]"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          <div className="flex items-center gap-2 text-xs bg-[#161717] border border-[#1E1E1E] rounded-sm text-[#707070] py-1 px-2 font-mono">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-file-code w-3 h-3 mb-0.5 text-[#00A652]"
              aria-hidden="true"
            >
              <path d="M10 12.5 8 15l2 2.5"></path>
              <path d="m14 12.5 2 2.5-2 2.5"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
            </svg>
            Integrate
          </div>
        </div>

        <div className="absolute bottom-12 left-14">
          <div className="flex flex-col text-white font-bold text-lg">
            <span>Powered by AI + Anchor</span>
            <span>Build Solana Smart Contracts 10x Faster</span>
            <div className="flex items-end gap-2.5">
              <button className="flex justify-center items-center bg-primary text-white cursor-pointer transition-transform hover:-translate-y-0.5 rounded-sm px-6 py-1.5 gap-2 font-semibold mt-2 text-[1rem]">
                Explore Playground
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                </svg>
              </button>
              <a
                className="text-primary font-normal py-0.5 text-xs border-b border-primary"
                href=""
              >
                Read Our Docs
              </a>
            </div>
          </div>
        </div>
      </main>

      <section className="h-screen w-full bg-primary">
        <div className="h-full flex items-center flex-col text-white tracking-widest">
          <p className="mt-20 text-[#D4C8AD] tracking-widest">
            fin-tastic features. zero-hassle.
          </p>
          <h1 className="text-5xl font-bold mt-2">BECAUSE CODING SHOULDN'T</h1>
          <h1 className="text-5xl font-bold mt-2"> RUIN YOUR SLEEP SCHEDULE</h1>
          <p className="mt-44 text-black font-semibold text-2xl tracking-[3px]">
            Transform your blockchain ideas into procution ready contracts
            seamlessly
          </p>
        </div>
      </section>

      <section className="h-screen w-full">
        <div className="flex flex-col gap-4 text-center justify-center h-full">
          <div className="text-6xl text-[#D9D9D9] font-semibold flex flex-col gap-4 pb-24">
            <p>GSAP Seekhne jaa rha 🎉</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
