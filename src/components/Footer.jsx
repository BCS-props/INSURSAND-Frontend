import { BsDiscord, BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-white to-amber-400/80 relative font-cairo">
      <div>
        <div className="pt-4 pl-12 pb-4 ml-4">
          <div className="flex w-fit items-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="logo"
              className="w-52"
            />
          </div>
          <div className="opacity-70 pb-8 w-fit">
            <div className="pb-4 mt-4 ">Every moment in DeFi,</div>
            <div className="">Safe easy with INSURSAND</div>
          </div>
          <div className="flex justify-between pr-4 mt-12">
            <div className="flex gap-8">
              <a
                href="https://discord.gg/h4QwrSfA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600"
              >
                <BsDiscord size={26} />
              </a>
              <a
                href="https://twitter.com/INSURSAND"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600"
              >
                <BsTwitter size={26} />
              </a>
              <a
                href="https://github.com/BCS-props"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-600"
              >
                <BsGithub size={26} />
              </a>
            </div>
            <div>© 2023 INSURSAND. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
