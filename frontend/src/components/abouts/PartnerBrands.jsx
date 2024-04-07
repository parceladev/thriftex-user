const PartnerBrands = () => {
  return (
    <section>
      <div className="flex flex-col gap-5 mt-10">
        <h1 className="text-4xl font-bold uppercase font-didot">Partner Brands</h1>
        <div className="flex items-center gap-3">
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
        <div className="flex justify-around mt-10">
          <li>
            <img
              src="../../../public/aboutpage/partner-brands/adidas.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/aboutpage/partner-brands/nike.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/aboutpage/partner-brands/dickies.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="../../../public/aboutpage/partner-brands/vans.png"
              alt=""
            />
          </li>
          <li>
            <img
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
