import { useEffect, useRef, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const Main = () => {
  const [showIcon, setShowIcon] = useState(false);
  const targetRef = useRef(null);

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
      <div
        className="min-h-screen flex justify-center items-center z-0"
        ref={targetRef}
      >
        <div className="relative w-full flex flex-col justify-between bg-amber-800">
          <img
            src={`${process.env.PUBLIC_URL}/images/background_2.jpg`}
            className="opacity-30"
            alt="sand"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
