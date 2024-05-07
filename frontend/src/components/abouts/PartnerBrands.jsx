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
            <img
              src="../../../public/icons/right-icon.svg"
              alt=""
              className="w-20 h-4"
            />
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
