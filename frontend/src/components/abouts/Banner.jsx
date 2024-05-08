const Banner = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 sm:gap-10">
        <h1 className="text-2xl font-bold uppercase sm:text-4xl font-didot sm:mt-28">
          About Thriftex
        </h1>
        <div className="flex items-center gap-5">
          <h5 className="text-lg">Meet the Team</h5>
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
        </div>
        <div className="w-full h-[150px] sm:h-screen">
          <img src="../../../public/aboutpage/banner-about.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
