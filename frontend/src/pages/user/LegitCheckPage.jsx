import {
  ButtonFormLegit,
  CardProduct,
  SearchProduct,
  Banner,
} from '../../components/legitchecks';
import { fetchLegitPublish } from '../../utils/legit-api-service';
import { useEffect, useState } from 'react';

const LegitCheckPage = () => {
  const [legitData, setLegitData] = useState([]);

  useEffect(() => {
    const getLegitData = async () => {
      try {
        const data = await fetchLegitPublish();
        if (data.status) {
          setLegitData(data.data);
        } else {
          // Handle jika status false
        }
      } catch (error) {
        // Handle error
      }
    };

    getLegitData();
  }, []);

  return (
    <div>
      <section className="h-screen w-full,">
        <Banner />
      </section>
      <section className="flex flex-col gap-10 m-12">
        <h2 className="text-3xl uppercase">Track a Legit Check</h2>
        <div className="flex gap-5">
          <SearchProduct />
          <ButtonFormLegit />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {legitData.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LegitCheckPage;
