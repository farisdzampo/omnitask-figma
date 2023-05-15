import Button from "../Button";

const Hero = () => {
  return (
    <section className="relative h-hero mx-auto mt-40" style={{ width: 887 }}>
      <div
        className="text-center w-full z-10 relative"
        style={{ maxWidth: 832 }}
      >
        <h1 className="text-white font-epilogue font-bold text-heroTitle mb-4">
          Every business needs trustworthy data
        </h1>
        <p className="font-inter font-normal text-lg leading-8 text-paragraph">
          Data integrity accelerates processes, reduces costs, and opens new
          opportunities.
        </p>
        <p className="font-inter font-normal text-lg leading-8 text-paragraph">
          Boost your data value with Moonbeam-powered Authtrail.
        </p>
        <p className="font-inter font-normal text-lg leading-8 text-paragraph">
          Faster, cheaper, safer.
        </p>
        <Button>Try free Authtrail Demo</Button>
      </div>
      <div className="absolute left-0 rotate-180 opacity-20 w-[545px] h-[544px] top-[-100px] blur-[100px] rounded-[50%] bg-green-elipse" />
      <div className="absolute right-0 rotate-180 opacity-20 w-[436px] h-[436px] top-[-100px] blur-[100px] rounded-[50%] bg-purple-primary" />
      <div className="absolute bottom-0 rotate-180 opacity-20 w-[544px] h-[544px] top-[-100px] blur-[100px] left-[50%] rounded-[50%] translate-x-[-50%] translate-y-2/4 bg-purple-elipse" />
    </section>
  );
};

export default Hero;
