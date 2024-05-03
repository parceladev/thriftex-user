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
    <div className="p-6 mt-14 sm:mt-28 sm:p-16">
      <section className="flex flex-col gap-10">
        <h2 className="text-3xl uppercase">My Legit Check</h2>
        <div className="flex gap-5">
          <SearchProduct />
          <ButtonFormLegit />
        </div>
        {loading ? (
          <div className="flex items-center justify-center h-48 gap-2">
            <FontAwesomeIcon icon={faCircleNotch} spin />
            <p className="text-xl font-medium">Loading...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-48">
            <p className="text-xl text-red-500">Error: {error}</p>
          </div>
        ) : legitData.length > 0 ? (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {legitData.map((product) => (
              <CardProductMyLegit key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-48">
            <p className="text-xl">
              Youve never done a legit check, legit check now!
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyLegitPage;
