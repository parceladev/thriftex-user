import {
  SearchProduct,
  ButtonFormLegit,
  CardProductMyLegit,
} from '../../components/legitchecks';
import { fetchMyLegit } from '../../utils/legit-api-service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const MyLegitPage = () => {
  const navigate = useNavigate();

  const [legitData, setLegitData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getLegitData = async () => {
      try {
        const data = await fetchMyLegit(navigate);
        if (data.status) {
          setLegitData(data.data.data);
        } else {
          setError('No legit checks available at the moment.');
        }
      } catch (error) {
        setError('Failed to fetch data.');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    getLegitData();
  }, [navigate]);

  return (
    <div className="mt-44">
      <section className="flex flex-col gap-10 m-12">
        <h2 className="text-3xl uppercase">Track a Legit Check</h2>
        <div className="flex gap-5">
          <SearchProduct />
          <ButtonFormLegit />
        </div>
        {loading ? (
          <div className="flex items-center justify-center h-48 gap-2">
            {' '}
            <FontAwesomeIcon icon={faCircleNotch} spin />
            <p className="text-xl font-medium">Loading...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-48">
            {' '}
            <p className="text-xl text-red-500">Error: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {legitData.map((product) => (
              <CardProductMyLegit
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyLegitPage;
