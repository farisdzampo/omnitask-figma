const obj = {
  data: {
    id: "60c9c15b32c2e900086c929c",
    tag: "test-1",
    data: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
    changeType: 0,
    metadata: {
      name: "test",
    },
    createdAt: "2021-06-16T09:16:11.584Z",
    hash: "ez2XnKgzCpT6fp4bRm2LmeC83qHskFlsDcyNfva0MAw=",
    blockId: null,
    anchorData: null,
  },
  id: "60c9c15b32c2e900086c929b",
  status: 201,
};

const AuthValidator = () => {
  return (
    <section className="pb-[400px]">
      <div className="text-center mt-80">
        <p className="text-purple-primary font-epilogue font-bold text-sm leading-[22px] tracking-[0.25em] uppercase">
          Authtrail Validator
        </p>
        <h2 className="text-white font-epilogue font-bold text-5xl leading-[64px] mt-4 max-w-[616px] mx-auto">
          The code to trust
        </h2>
        <p className="font-inter text-paragraph font-normal text-lg leaing-[32px] max-w-[616px] mx-auto mt-4">
          The open-source Authtrail Validator helps you verify data instantly
          and reliably with a straightforward request to Authtrail API.
        </p>
        <button
          type="button"
          className="mt-8 py-5 px-6 rounded border border-purple-primary font-inter font-bold text-base text-white "
        >
          Try Authtrail Validator
        </button>
      </div>
      <div className="mt-[112px] gap-x-8 flex justify-center">
        <div className="w-[616px] p-12 bg-[#010101]">
          <p className="text-white font-epilogue font-bold mb-4 text-2xl leading-9">Request to API</p>
          <code className="break-all w-full code text-paragraph font-inter font-normal text-base leading-7">{`$ curl -X 'POST' 'https://serviceapi-staging.authtrail.com/data' \\
-H 'x-api-key: {API_KEY}' \\
-H 'Content-Type: application/json; charset=utf-8' \\
-d $'{
  "data": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
  "tag": "test-1",
  "changeType": 0,
  "metadata": {
    "name": "test"
  }
}'`}</code>
        </div>
        <div className="w-[616px] h-[628px] p-12 bg-[#010101]">
          <p className="text-white font-epilogue font-bold mb-4 text-2xl leading-9">Response</p>
          <pre className="break-all w-full code text-paragraph font-inter font-normal text-base leading-7">
            {JSON.stringify(obj, undefined, 1)}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default AuthValidator;
