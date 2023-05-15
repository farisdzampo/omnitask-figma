import Button from "../Button";

const Cards = () => {
  return (
    <section className="mt-80 flex gap-x-8 justify-center">
      <div className="bg-card w-[616px] rounded shadow-cards">
        <div className="pt-16 pl-16 pr-16">
          <div className="flex flex-wrap items-center">
            <img className="h-9" src="/images/cards/demo.png" alt="demo"/>
            <p className="text-white font-epilogue font-bold text-2xl leading-9 ml-4">Authtrail Demo</p>
          </div>
          <p className="text-paragraph font-inter font-normal text-lg leading-8 mt-6">Equip data with integrity and verify it in a few steps.</p>
        </div>
        <Button className="mt-36 ml-16 mb-16">
          Try Authtrail Demo
        </Button>
      </div>
      <div className="bg-card w-[616px] rounded shadow-cards">
        <div className="pt-16 pl-16 pr-16">
          <div className="flex flex-wrap items-center">
            <img className="h-9" src="/images/cards/github.png" alt="demo"/>
            <p className="text-white font-epilogue font-bold text-2xl leading-9 ml-4">GitHub</p>
          </div>
          <p className="text-paragraph font-inter font-normal text-lg leading-8 mt-6">Browse the Authtrail code in GitHub repositories.</p>
        </div>
        <Button className="mt-36 ml-16 mb-16">
          Go to GitHub
        </Button>
      </div>
    </section>
  );
};

export default Cards;
