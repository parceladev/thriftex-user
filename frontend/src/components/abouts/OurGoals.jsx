const OurGoals = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 mt-16 sm:mt-20">
        <h1 className="mb-3 text-2xl font-bold uppercase sm:text-4xl font-didot">
          Our Goals
        </h1>
        <div className="flex flex-col gap-8 mt-4 text-xl sm:mt-8 sm:gap-2">
          <h5>
            Thriftex stands to educate people about fake product and
            intellectual property.
          </h5>
          <h5 className="flex items-center gap-3">
            With Creativity & Technology, Thriftex is commited to help{' '}
            <span>
              <svg
                className="w-10 h-2 sm:h-4 sm:w-20"
                viewBox="0 0 25 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.206 4.23798H0.5V3.76202H23.206L20.2549 0.836555L20.5945 0.5L23.9553 3.83172L24.125 4L23.9553 4.16828L20.5945 7.5L20.2549 7.16345L23.206 4.23798Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </h5>
        </div>
        <div className="flex flex-col justify-between gap-8 mt-6 sm:mt-16 sm:flex-row">
          <div className="flex justify-center gap-8 text-xl sm:justify-start">
            <h3>Consument</h3>
            <h3>Producer</h3>
            <h3>Stackholder</h3>
          </div>
          <div className="mb-14 sm:mb-20 max-w-96">
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
