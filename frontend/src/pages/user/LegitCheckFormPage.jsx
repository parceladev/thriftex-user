import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  InputText,
  InputImage,
  InputTextArea,
  InputSelect,
} from '../../components/legitchecks';

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

  const purchases = [
    { value: 'offline', label: 'Offline' },
    { value: 'online', label: 'Online' },
  ];

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
            name="item-category"
            id="item-category"
            htmlFor="item-category"
            isRequired="required"
            data={categories}
          />
          <InputSelect
            label="Item Brand"
            name="item-brand"
            id="item-brand"
            htmlFor="item-brand"
            isRequired="required"
            data={brands}
          />
          <InputText
            label="Item Name"
            name="item-name"
            id="item-name"
            htmlFor="item-name"
            isRequired="required"
          />
          <InputImage
            label="Upload Images"
            htmlFor="imageUpload"
            id="imageUpload"
            isRequired="required"
            // images={userData.images}
            // handleImageChange={handleImageChange}
          />
          <InputSelect
            label="Purchase"
            name="purchase"
            id="purchase"
            htmlFor="purchase"
            isRequired="required"
            data={purchases}
          />
          <InputText
            label="Store Name"
            name="store-name"
            id="store-name"
            htmlFor="store-name"
            isRequired="required"
          />
          <InputSelect
            label="Item Condition"
            name="item-condition"
            id="item-condition"
            htmlFor="item-condition"
            isRequired="required"
            data={conditions}
          />
          <InputTextArea
            label="Other Notes"
            name="other-notes"
            id="other-notes"
            htmlFor="other-notes"
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
