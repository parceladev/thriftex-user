const WhyWeDifferent = () => {
  return (
    <section>
      <div className="flex flex-col w-full my-10">
        <h1 className="mb-8 text-2xl font-bold uppercase sm:text-4xl sm:mb-16 font-didot">
          Why We Different?
        </h1>
        <table className="w-full text-center">
          <tr>
            <td className="p-4 border-b border-r border-gray-700 sm:p-16">
              <h3 className="text-md sm:text-xl">Free Lifetime</h3>
            </td>
            <td className="p-4 border-b border-r border-gray-700 sm:p-16">
              <h3 className="text-md sm:text-xl">Community & Brand Expert</h3>
            </td>
            <td className="p-4 border-b border-gray-700 sm:p-16">
              <h3 className="text-md sm:text-xl">Result 1 x 24 Hour</h3>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-r border-gray-700 sm:p-16">
              <h3 className="text-md sm:text-xl">24/7 Service</h3>
            </td>
            <td className="p-4 border-r border-gray-700 sm:p-16">
              <h3 className="text-md sm:text-xl">
                Local & International Brand
              </h3>
            </td>
            <td className="p-4 sm:p-16">
              <h3 className="text-md sm:text-xl">Online Certification</h3>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default WhyWeDifferent;
