export default function StartYourJourney() {
  return (
    <div>
      <div className="flex flex-col gap-10 xl:items-center lg:items-start items-center xl:ml-0 lg:ml-24 ml-0 xl:mr-14 mr-0">
        <h1 className="text-center lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-normal leading-tight sm:w-auto w-[21rem] text-white">
          Start Your <span className="text-[#f9cb6f]">Journey</span> With Us
        </h1>
        <div className="xl:ml-0 lg:ml-10 ml-0 flex items-center justify-center gap-5 mb-28">
          <div className="flex justify-center items-center gap-5">
            <a href="/sign-in">
              <button className="flex justify-center items-center px-6 py-3 rounded-3xl text-white bg-black buttonBoxShadow text-xl">
                Log in
              </button>
            </a>
          </div>
          <p className="text-xl text-[#959595] font-medium">or</p>
          <div className="flex justify-center items-center gap-5">
            <a href="/sign-up">
              <button className="flex justify-center items-center px-6 py-3 rounded-3xl text-white bg-[#f9cb6f] text-xl">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
