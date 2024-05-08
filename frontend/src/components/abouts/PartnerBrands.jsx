const PartnerBrands = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 sm:mt-8">
        <h1 className="mb-3 text-2xl font-bold uppercase sm:text-4xl font-didot">
          Partner Brands
        </h1>
        <div className="flex items-center gap-3 mt-4 sm:mt-8">
          <h3 className="text-xl">
            We work together with these brand companies{' '}
          </h3>
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
        </div>
        <div className="flex justify-around my-10 sm:my-20">
          <li>
            <img
              className="w-10 h-10 sm:w-20 sm:h-20"
              src="../../../public/aboutpage/partner-brands/adidas.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="w-10 h-10 sm:w-20 sm:h-20"
              src="../../../public/aboutpage/partner-brands/nike.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="w-10 h-10 sm:w-20 sm:h-20"
              src="../../../public/aboutpage/partner-brands/dickies.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="w-10 h-10 sm:w-20 sm:h-20"
              src="../../../public/aboutpage/partner-brands/vans.png"
              alt=""
            />
          </li>
          <li>
            <img
              className="w-10 h-10 sm:w-20 sm:h-20"
              src="../../../public/aboutpage/partner-brands/converse.png"
              alt=""
            />
          </li>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
