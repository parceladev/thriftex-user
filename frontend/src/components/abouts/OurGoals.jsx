const OurGoals = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 mt-24">
        <h1 className="text-2xl font-bold uppercase sm:text-4xl font-didot mb-3">
          Our Goals
        </h1>
        <div className="flex flex-col gap-2 text-xl">
          <h5>
            Thriftex stands to educate people about{' '}
            fake product and intellectual
            property.
          </h5>
          <h5 className="flex items-center gap-3">
            With Creativity & Technology, Thriftex is commited to help{' '}
            <span>
              <img
                src="../../../public/icons/right-icon-02.svg"
                alt=""
                className="w-20 h-4"
              />
            </span>
          </h5>
        </div>
        <div className="flex flex-col justify-between gap-8 mt-8 sm:flex-row">
          <div className="flex justify-center gap-8 text-xl sm:justify-start">
            <h3>Consument</h3>
            <h3>Producer</h3>
            <h3>Stackholder</h3>
          </div>
          <div className="max-w-96 mb-20">
            <h5>
              So they can understand and access every needs about product’s
              authenticity
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
