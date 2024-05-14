import {
  ButtonFormLegit,
  CardProductLegitPublish,
  SearchProduct,
  Banner,
} from '../../components/legitchecks';
import { fetchLegitPublish } from '../../utils/legit-api-service';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";


const LegitCheckPage = () => {
  const { t } = useTranslation();
  const [legitData, setLegitData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchLegitPublish()
      .then((data) => {
        if (data.status) {
          setLegitData(data.data);
          setFilteredData(data.data);
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

  useEffect(() => {
    const filtered = legitData.filter((product) =>
      product.nama_item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, legitData]);

  return (
    <div className="">
      <Banner />
      <section className="flex flex-col gap-8 p-6 py-8 sm:p-16">
        <h2 className="text-3xl text-center uppercase sm:text-left font-didot">
          {t("LegitPage 1")}
        </h2>
        <div className="flex w-full gap-10">
          <SearchProduct
            onSearchChange={(e) => setSearchQuery(e.target.value)}
          />
          <ButtonFormLegit />
        </div>
        {loading ? (
          <div className="flex items-center justify-center h-48 gap-2">
            <FontAwesomeIcon icon={faCircleNotch} spin />
            <p className="text-xl font-medium">{t("Loading")}</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-48">
            <p className="text-xl text-red-500">Error: {error}</p>
          </div>
        ) : filteredData.length > 0 ? (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {filteredData.map((product) => (
              <CardProductLegitPublish key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-48">
            <p className="text-xl">{t("Not Found")}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default LegitCheckPage;
