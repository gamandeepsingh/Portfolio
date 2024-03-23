const Home = () => {
  return (
    <div className="w-[50vw] max-md:w-[100vw] h-full text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-start gap-8 ml-[20%] ">
        <p className="text-4xl max-md:text-3xl">Hello Geeky!</p>
        <div className="flex flex-col gap-1">
          <span className="text-sm ">I&apos;m a</span>
          <span className="text-6xl max-md:text-5xl max-sm:text-4xl -ml-2">MERN STACK DEVELOPER</span>
          <span className="text-sm">from INDIA</span>
        </div>
        <button>My Resume</button>
      </div>
    </div>
  );
};

export default Home;
