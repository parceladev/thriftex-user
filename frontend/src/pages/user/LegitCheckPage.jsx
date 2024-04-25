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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchLegitPublish()
      .then((data) => {
        if (data.status) {
          setLegitData(data.data);
        } else {
          setError('No data available');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch data');
        setLoading(false);
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <section className="w-full h-screen">
        <Banner />
      </section>
      <section className="flex flex-col gap-10 m-12">
        <h2 className="text-3xl uppercase">Track a Legit Check</h2>
        <div className="flex gap-5">
          <SearchProduct />
          <ButtonFormLegit />
        </div>
        {loading ? (
          <div className="flex items-center justify-center h-48">
            {' '}
            {/* Adjust height as needed */}
            <p className="text-xl font-medium">Loading...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-48">
            {' '}
            {/* Adjust height as needed */}
            <p className="text-xl text-red-500">Error: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {legitData.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default LegitCheckPage;
