import Button from "../Button";

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
    <section className="pb-0 relative max-h-fit">
      <div>
        <div className="absolute right-[200px] rotate-180 opacity-20 w-[436px] h-[436px] top-[250px] blur-[100px] rounded-[50%] bg-purple-primary" />
        <div className="absolute bottom-0 rotate-180 opacity-20 w-[436px] h-[436px] top-[250px] blur-[100px] left-[50%] rounded-[50%] translate-x-[-50%] translate-y-2/4 bg-green-elipse" />
        <div className="absolute left-[200px] rotate-180 opacity-20 w-[545px] h-[544px] top-[250px] blur-[100px] rounded-[50%] bg-purple-elipse" />
      </div>
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
        <Button>
          Try Authtrail Validator
        </Button>
      </div>
      <div className="mt-[112px] gap-x-8 flex justify-center">
        <div className="w-[616px] p-12 bg-[#010101] z-10">
          <p className="text-white font-epilogue font-bold mb-4 text-2xl leading-9">
            Request to API
          </p>
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
        <div className="w-[616px] h-[628px] p-12 bg-[#010101] z-10">
          <p className="text-white font-epilogue font-bold mb-4 text-2xl leading-9">
            Response
          </p>
          <pre className="break-all w-full code text-paragraph font-inter font-normal text-base leading-7">
            {JSON.stringify(obj, undefined, 1)}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default AuthValidator;
