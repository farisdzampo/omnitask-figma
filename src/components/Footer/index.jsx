import { ReactComponent as Logo } from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-card h-[473px] w-full mt-80 flex justify-center relative">
      <div className="max-w-screen-xl w-full flex z-10 relative">
        <div className="flex flex-col justify-between pt-20">
          <div>
            <Logo />
          </div>
          <div className="pb-10">
            <p className="text-paragraph font-inter font-normal text-sm leading-6">
              All rights reserved © Authtrail 2021
            </p>
          </div>
        </div>
        <div className="relative w-[473px]">
          <img
            src="/images/footer/dnk1.png"
            alt="dnk"
            className=" w-[356px] h-[473px]"
            loading="lazy"
          />
        </div>
        <div className="flex pt-20 flex-col justify-between">
          <div className="flex gap-x-36">
            <div>
              <p className="text-paragraph font-inter font-normal text-base leading-7">
                Website content
              </p>
              <ul className="text-white mt-9">
                <li className="mb-4">Token</li>
                <li className="mb-4">Product</li>
                <li className="mb-4">Resources</li>
                <li className="mb-4">Network</li>
                <li>Press kit</li>
              </ul>
            </div>
            <div>
              <p className="text-paragraph font-inter font-normal text-base leading-7">
                Legal
              </p>
              <ul className="text-white mt-9">
                <li className="mb-4">Privacy policy</li>
                <li className="mb-4">Cookies</li>
                <li>Legal disclaimer</li>
              </ul>
            </div>
          </div>
          <div className="flex pb-8">
            <img
              className="mr-12"
              src="/images/footer/twitter.png"
              alt="twitter"
            />
            <img className="mr-12" src="/images/footer/share.png" alt="share" />
            <img
              className="mr-12"
              src="/images/footer/github2.png"
              alt="github"
            />
            <img
              className="mr-12"
              src="/images/footer/linkedin.png"
              alt="linkedin"
            />
            <img src="/images/footer/discord.png" alt="discord" />
          </div>
        </div>
      </div>
      <div className="h-px bg-background absolute w-full bottom-[104px]" />
    </footer>
  );
};

export default Footer;
