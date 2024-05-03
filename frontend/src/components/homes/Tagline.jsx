const Tagline = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full gap-8 py-16 text-center sm:py-8 sm:flex-row">
      <h2 className="sm:w-1/3 text-center font-didot text-[30px] uppercase  sm:text-left">
        Original With Us
      </h2>
      <p className="sm:w-1/3  sm:text-left text-center text-[13px]">
        provide innovation to help educate and inform people about brand
        originality to reduce fake product around the world
      </p>
      <p className="sm:w-1/3 text-[13px] sm:text-left text-center">
        Collaborating with brand experts and communities to
        <span className="font-didot text-[18px]"> VERIFY </span>a product’s
        originality
      </p>
    </div>
  );
};

export default Tagline;
