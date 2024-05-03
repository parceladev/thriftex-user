const WhyWeDifferent = () => {
  return (
    <section>
      <div className="flex flex-col w-full mt-10">
        <h1 className="mb-16 text-4xl font-bold uppercase font-didot">
          Why We Different?
        </h1>
        <div className="grid items-center w-full grid-cols-3 text-center justify-arround">
          <div className="p-16 border border-t-0 border-l-0 border-black">
            <h3 className="text-xl">Free Lifetime</h3>
          </div>
          <div className="p-16 border border-t-0 border-black">
            <h3 className="text-xl">Community & Brand Expert</h3>
          </div>
          <div className="p-16 border border-t-0 border-r-0 border-black">
            <h3 className="text-xl">Result 1 x 24 Hour</h3>
          </div>
        </div>
        <div className="grid items-center w-full grid-cols-3 text-center justify-arround">
          <div className="p-16 border border-b-0 border-l-0 border-black">
            <h3 className="text-xl">24/7 Service</h3>
          </div>
          <div className="p-16 border border-b-0 border-black">
            <h3 className="text-xl">Local & International Brand</h3>
          </div>
          <div className="p-16 border border-b-0 border-r-0 border-black">
            <h3 className="text-xl">Online Certification</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDifferent;
