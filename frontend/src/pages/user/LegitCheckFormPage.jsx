import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  InputText,
  InputImage,
  InputTextArea,
  InputSelect,
} from '../../components/legitchecks';

const LegitCheckFormPage = () => {
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
            dataType="categories"
            defaultValue="Select Item Category"
          />
          <InputSelect
            label="Item Brand"
            name="item-brand"
            id="item-brand"
            htmlFor="item-brand"
            isRequired="required"
            dataType="brands"
            defaultValue="Select Brand"
          />
          <InputText
            label="Item Name"
            name="item-name"
            id="item-name"
            htmlFor="item-name"
            isRequired="required"
            placeholder="Enter Item Name"
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
            isRequired="optional"
            dataType="purchases"
            defaultValue="Select Purchase"
          />
          <InputText
            label="Store Name"
            name="store-name"
            id="store-name"
            htmlFor="store-name"
            isRequired="optional"
            placeholder="Enter Store Name"
          />
          <InputSelect
            label="Item Condition"
            name="item-condition"
            id="item-condition"
            htmlFor="item-condition"
            isRequired="optional"
            dataType="conditions"
            defaultValue="Select Item Condition"
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
