import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import InputSelect from '../../components/legitchecks/InputSelect';
import InputText from '../../components/legitchecks/InputText';
import { InputTextArea } from '../../components/legitchecks';

const LegitCheckFormPage = () => {
  const categories = [
    { value: 'shoes', label: 'Shoes' },
    { value: 'shirts', label: 'Shirts' },
    { value: 'pants', label: 'Pants' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'electronics', label: 'Electronics' },
  ];

  const brands = [
    { value: 'nike', label: 'Nike' },
    { value: 'adidas', label: 'Adidas' },
  ];

  // eslint-disable-next-line no-unused-vars
  const purchases = [
    { value: 'offline', label: 'Offline' },
    { value: 'online', label: 'Online' },
  ];

  // eslint-disable-next-line no-unused-vars
  const conditions = [
    { value: '', label: 'Choose item conditions' },
    { value: 'new', label: 'New' },
  ];

  return (
    <div className="flex flex-col justify-start w-full min-h-screen p-10">
      <a
        href="/users/legit-check"
        className="flex items-center justify-start mt-32"
      >
        <FaArrowLeft /> <span className="pl-2">Back</span>
      </a>
      <div className="w-full p-8 mt-5 bg-white rounded">
        <div className="mb-6 text-2xl italic text-center uppercase">
          Legit Check Form
        </div>
        <form>
          <InputSelect
            label="Item Category"
            name="category"
            id="category"
            htmlFor="category"
            isRequired="required"
            data={categories}
          />
          <InputSelect
            label="Item Brand"
            name="category"
            id="category"
            htmlFor="category"
            isRequired="required"
            data={brands}
          />
          <InputText
            label="Item Name"
            name="category"
            id="category"
            htmlFor="category"
            isRequired="required"
          />
          {/* Images -> Input Images */}
          <InputSelect
            label="Purchase"
            name="category"
            id="category"
            htmlFor="category"
            isRequired="required"
            data={purchases}
          />
          <InputText
            label="Store Name"
            name="category"
            id="category"
            htmlFor="category"
            isRequired="required"
          />
          <InputSelect
            label="Item Condition"
            name="category"
            id="category"
            htmlFor="category"
            isRequired="required"
            data={conditions}
          />
          <InputTextArea
            label="Other Notes"
            name="category"
            id="category"
            htmlFor="category"
            isRequired="optional"
          />
          <button
            className={`py-3 w-full mt-4 uppercase text-center flex justify-center items-center`}
          >
            Legit Check <FaArrowRight className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LegitCheckFormPage;
