const Main = () => {
  return (
    <div className="flex min-h-screen justify-center bg-gradient-to-r from-amber-400/80 to-amber-600/80">
      <div className="flex">
        <video
          src={`${process.env.PUBLIC_URL}/images/background.mp4`}
          autoPlay
          muted
          loop
          className="z-0 opacity-80 object-cover"
        >
          {" "}
        </video>
        <div className="text-6xl font-bold text-stone-600/75 z-10 absolute translate-x-2/4 translate-y-3/4 mt-8">
          <div className="">Every moment in DeFi,</div>
          <div className="mt-12">safe easy with INSURSAND</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
