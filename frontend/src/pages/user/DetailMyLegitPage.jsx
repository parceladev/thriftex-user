import { useState, useEffect } from 'react';
import { fetchDetailMyLegit } from '../../utils/legit-api-service';
import { useParams } from 'react-router-dom';

const DetailMyLegitPage = () => {
  let { caseCode } = useParams();
  const [legitData, setLegitData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDetailMyLegit(caseCode);
        if (data && data.status) {
          setLegitData(data.data[0]);
          setLoading(false);
        } else {
          setError({ message: 'Failed to load data' });
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [caseCode]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!legitData) return <div>No data found.</div>;

  return (
    <div className="max-w-2xl mt-44 mx-auto p-4 shadow-lg rounded-lg bg-white">
      <a href="/user/my-legit">back</a>
      <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
        Legit Detail
      </h2>
      <div className="mt-4">
        <p className="text-lg text-gray-700">
          <strong className="font-semibold">Name:</strong> {legitData.nama_item}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold">Status:</strong>{' '}
          {legitData.legit_status}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold">Submission Time:</strong>{' '}
          {legitData.submit_time}
        </p>
        <p className="text-lg text-gray-700">
          <strong className="font-semibold">Check Result:</strong>{' '}
          {legitData.check_result}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Images:</h3>
        <div className="flex flex-wrap -mx-2 overflow-hidden">
          {legitData.image_list.map((image, index) => (
            <div
              key={index}
              className="px-2 w-1/2 overflow-hidden sm:w-1/3 lg:w-1/4 xl:w-1/4"
            >
              <img
                src={image.file_path}
                alt={`Legit Item ${index + 1}`}
                className="mb-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailMyLegitPage;
