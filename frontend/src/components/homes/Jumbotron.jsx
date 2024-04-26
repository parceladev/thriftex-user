const Jumbotron = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center"
      style={{
        backgroundImage: "url('../../../public/homepage/jumbotron.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="block text-[40px] font-didot text-secondary py-2">
        IS YOUR FASHION STYLE LEGIT?
      </h1>
      <a
        href="/user/legit-check"
        className="px-6 py-3 mt-2 text-white bg-transparent border border-white rounded-lg hover:bg-white hover:text-primary"
      >
        CHECK NOW
      </a>
    </div>
  );
};

export default Jumbotron;
