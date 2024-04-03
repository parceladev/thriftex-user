import {
  ButtonFormLegit,
  CardProduct,
  SearchProduct,
  Banner,
} from '../../components/legitchecks';

const LegitCheckPage = () => {
  return (
    <div>
      <section className="h-screen w-full,">
        <Banner />
      </section>
      <section className="flex flex-col gap-10 m-12">
        <h2 className="text-3xl uppercase">Track Your Legit Check</h2>
        <div className="flex gap-5">
          <SearchProduct />
          <ButtonFormLegit />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>
    </div>
  );
};

export default LegitCheckPage;
