const Banner = () => {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-bold text-black uppercase font-didot mt-28">
          About Thriftex
        </h1>
        <div className="flex items-center gap-5">
          <h5 className="text-lg">Meet the Team</h5>
          <img
            src="../../../public/icons/right-icon.svg"
            alt=""
            className="w-20 h-4"
          />
        </div>
        <div className="w-full h-screen">
          <img src="../../../public/aboutpage/banner-about.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
