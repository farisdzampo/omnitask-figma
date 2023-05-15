const Steps = () => {
  return <section className="mt-[192px]">
    <p className="font-epilogue font-bold uppercase text-purple-primary mb-4 text-sm leading-[22px] tracking-[0.25em]">how does it work</p>
    <h2 className="font-epilogue font-bold text-white mb-4 text-5xl leading-[64px] ">From raw to data trust</h2>
    <p className="font-epilogue font-normal text-paragraph text-lg leading-[30px] mb-20 w-[616px]">Add the power of blockchain technology to enterprise data. Equip it with rock-solid integrity in just four steps.</p>
    <div className="flex gap-x-8">
        <div>
            <img className="rounded ml-[-50px] min-h-[160px] min-w-[284px]" src="/images/steps/Steps1.png" height={160} width={292} loading="lazy" alt="image1"/>
            <h3 className="font-epilogue font-bold text-2xl leading-9 text-white mb-4 mt-6">Data aggregation</h3>
            <p className="font-inter font-normal text-paragraph text-lg leading-8">Gather relevant data from various internal databases and applications.</p>
        </div>
        <div>
            <img className="rounded ml-[-50px] min-h-[160px] min-w-[284px]" src="/images/steps/Steps2.png" height={160} width={292} loading="lazy" alt="image2"/>
            <h3 className="font-epilogue font-bold text-2xl leading-9 text-white mb-4 mt-6">Data hashing</h3>
            <p className="font-inter font-normal text-paragraph text-lg leading-8">Hash verified data in bulks to reduce costs and accelerate transactions.</p>
        </div>
        <div>
            <img className="rounded ml-[-60px] min-h-[160px] min-w-[284px]" src="/images/steps/Steps3.png" height={160} width={292} loading="lazy" alt="image3"/>
            <h3 className="font-epilogue font-bold text-2xl leading-9 text-white mb-4 mt-6">Blockchain anchoring</h3>
            <p className="font-inter font-normal text-paragraph text-lg leading-8">Anchor data hashes on blockchain to prevent edits and enable trusted verification.</p>
        </div>
        <div>
            <img className="rounded ml-[-60px] min-h-[160px] min-w-[284px]" src="/images/steps/Steps4.png" height={160} width={292} loading="lazy" alt="image4"/>
            <h3 className="font-epilogue font-bold text-2xl leading-9 text-white mb-4 mt-6">Data verification</h3>
            <p className="font-inter font-normal text-paragraph text-lg leading-8">Verify data against blockchain records, track its history, or detect flawed data.</p>
        </div>
    </div>
  </section>;
};



export default Steps;
