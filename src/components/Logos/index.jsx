const Logos = () => {
  return (
    <section
      className="pt-14 mx-auto text-center relative"
      style={{ width: 1250, overflow: "hidden" }}
    >
      <div className="flex w-[1136.6px] justify-between items-center mx-auto mt-20 relative z-0">
        <img src="/images/logos/microsoft.png" alt="logo1" />
        <img src="/images/logos/mysql.png" alt="logo2" />
        <img src="/images/logos/oracle.png" alt="logo3" />
        <img src="/images/logos/salesforce.png" alt="logo4" />
        <img src="/images/logos/shopify.png" alt="logo5" />
        <img src="/images/logos/sap.png" alt="logo6" />
        <div
          className="absolute opacity-[0.12] left-[50%] top-[-30px] bg-green-elipse h-[203.86px] w-[920px] blur-[80px] rounded-[50%]"
          style={{ transform: "translate(-50%,0)" }}
        ></div>
        <div
          className="absolute opacity-[0.18] left-[50%] top-[120px] bg-rectangle w-[119.48px] h-[374.12px] blur-[60px] rounded-[50%]"
          style={{ transform: "translate(-50%,0)" }}
        ></div>
      </div>
      <button className="border-paragraph text-paragraph rounded-[22px] px-5 py-3 mt-[48.7px] border z-10 relative">
        API integration
      </button>
      <img
        className="mt-[48.7px] mx-auto py-[13px] px-[4px]"
        src="/images/logos/Logo.png"
        alt="authtrailLogo"
      />
      <button className="border-paragraph text-paragraph rounded-[22px] px-5 py-3 mt-[48.7px] border z-10 relative">
        Hash on
      </button>
      <img
        className="mt-[48.7px] mb-[80.9px] mx-auto py-[7px] min-h-[60px] max-h-[61px]"
        src="/images/logos/moonbeam.png"
        alt="moonbeam"
      />
    </section>
  );
};

export default Logos;
