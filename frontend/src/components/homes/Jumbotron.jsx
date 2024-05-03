const Jumbotron = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-8 h-[250px] p-10 text-center mt-14 sm:h-screen"
      style={{
        backgroundImage: "url('../../../public/homepage/jumbotron.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="block text-2xl sm:text-[40px] font-didot text-secondary py-2">
        IS YOUR FASHION STYLE LEGIT?
      </h1>
      <div className="flex items-center gap-3 px-6 py-3 mt-2 text-white bg-transparent border border-white rounded-lg hover:bg-white hover:text-primary">
        <a href="/user/legit-check" className="">
          CHECK NOW
        </a>
        <img
          src="../../../public/icons/right-icon.svg"
          alt="right-icon"
          className="h-6"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
