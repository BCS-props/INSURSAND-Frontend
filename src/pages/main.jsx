import { useEffect, useRef, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { useObserve } from "../hooks/observe";

const Main = () => {
  const [showIcon, setShowIcon] = useState(false);
  const targetRef = useRef(null);

  const { isObserved, dom } = useObserve();

  useEffect(() => {
    setTimeout(() => {
      setShowIcon(true);
    }, 2000);
  }, []);

  const handleIconClick = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex min-h-screen justify-center">
        <div className="relative w-full flex flex-col justify-between">
          <video
            src={`${process.env.PUBLIC_URL}/images/background.mp4`}
            autoPlay
            muted
            loop
            className="z-0 object-cover absolute opacity-100 inset-0 w-full h-full"
          />
          <div className="text-6xl font-bold text-amber-900/50 z-10 mx-auto mt-32 text-center">
            <div className="animate-fade-up animate-once">
              Every moment in DeFi,
            </div>
            <div className="mt-12 animate-fade-up animate-once animate-delay-[1000ms]">
              Safe easy with INSURSAND
            </div>
          </div>
          {showIcon && (
            <div className="flex justify-center mb-20 animate-bounce animate-infinite">
              <BsChevronCompactDown
                className="opacity-50"
                size={100}
                color="black"
                onClick={handleIconClick}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div
          className="min-h-screen flex z-0"
          ref={targetRef}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/background_2.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // opacity: "0.9",
          }}
        >
          <div className="flex-grow px-40 pt-24">
            <div
              className={`text-6xl pt-28 flex justify-center ${
                isObserved && "bg-red-100"
              }`}
              ref={dom}
            >
              About INSURSAND
            </div>
            <div className="flex justify-center mt-52">
              <div className="grid grid-cols-4 gap-12 bg-red-100">
                <div className="p-4 bg-white w-fit">
                  <div>Supported chains</div>
                </div>
                <div className="p-4 bg-white w-fit">
                  <div>Total coverage amount</div>
                </div>
                <div className="p-4 bg-white w-fit">
                  <div>Supported insurance types</div>
                </div>
                <div className="p-4 bg-white w-fit">
                  <div>Types of coins for insurance claim</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-40">
              <button className="bg-white p-4">Get Cover</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
