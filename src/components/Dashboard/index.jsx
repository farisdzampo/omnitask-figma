const Dashboard = () => {
  return (
    <section className="mt-[186px] flex justify-center gap-8">
      <div>
        <p className="font-epilogue font-bold uppercase text-purple-primary mb-4 text-sm leading-[22px] tracking-[0.25em]">
          authtrail dashboard
        </p>
        <h2 className="font-epilogue font-bold text-white mb-4 text-5xl leading-[64px] ">
          A complete big picture
        </h2>
        <p className="font-epilogue font-normal text-paragraph text-lg leading-8 w-[616px]">
          <span className="font-bold">Authtrail Dashboard</span> gives you a
          clear insight into product/service data history through blockchain
          anchors, integrity checks, and linked documents.
        </p>
        <p className="font-epilogue font-normal text-paragraph text-lg mt-10 leading-8 w-[616px]">
          <span className="font-bold">Authtrail Public Explorer</span> allows
          your customers, business partners, and auditors to easily check the
          relevant data from outside and establish better relationships.
        </p>
      </div>
      <div className="flex items-end">
        <img className="w-[548px] h-[320px]" src="/images/dashboard/notebook.png" alt="notebook"/>
      </div>
    </section>
  );
};

export default Dashboard;
