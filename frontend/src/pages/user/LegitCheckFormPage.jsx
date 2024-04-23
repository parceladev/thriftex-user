import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import CategoryOption from '../../components/legitchecks/CategoryOption';
import BrandOption from '../../components/legitchecks/BrandOption';
import PurchaseOption from '../../components/legitchecks/PurchaseOption';
import ItemConditionOption from '../../components/legitchecks/ItemConditionOption';
import AlertLegitCheck from '../../components/legitchecks/AlertLegitCheck';

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

  const [images, setImages] = useState([]);
  const [itemCategory, setItemCategory] = useState('');
  const [itemBrand, setItemBrand] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPurchase, setItemPurchase] = useState('');
  const [storeName, setStoreName] = useState('');
  const [setItemCondition] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'itemCategory':
        setItemCategory(value);
        break;
      case 'itemBrand':
        setItemBrand(value);
        break;
      case 'itemName':
        setItemName(value);
        break;
      case 'itemPurchase':
        setItemPurchase(value);
        break;
      case 'storeName':
        setStoreName(value);
        break;
      case 'itemCondition':
        setItemCondition(value);
        break;
      default:
        break;
    }
  };

  const handleStoreNameChange = (e) => {
    setStoreName(e.target.value);
  };

  const handleImageChange = (files) => {
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...newImages].slice(0, 12));
  };

  const canSubmit =
    itemName.trim() !== '' &&
    itemCategory.trim() !== '' &&
    itemBrand.trim() !== '' &&
    images.length >= 6;

  const ImageUploadBox = (props) => {
    const { onFileSelectSuccess } = props;
    return (
      <label className="flex justify-center items-center w-40 h-40 lg:w-48 lg:h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-gray-500">
        <input
          type="file"
          className="hidden"
          accept="image/*"
          multiple
          onChange={(e) => onFileSelectSuccess(e.target.files)}
        />
        <FaPlus className="text-gray-500" size={20} />
      </label>
    );
  };

  ImageUploadBox.propTypes = {
    onFileSelectSuccess: PropTypes.string,
  };

  const [isAlertVisible, setAlertVisible] = useState(false); // State untuk menampilkan alert

  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah reload halaman
    if (canSubmit) {
      // Logic submit ke server bisa di sini
      setAlertVisible(true); // Menampilkan alert sukses
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className="flex min-h-screen w-full justify-start flex-col p-10">
      <Link className="flex justify-start items-center mt-32">
        <FaArrowLeft /> <span className="pl-2">Back</span>
      </Link>
      <div className="bg-white p-8 rounded w-full mt-5">
        <div className="text-2xl  mb-6 italic text-center">
          LEGIT CHECK FORM
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label
              htmlFor="item-category"
              className="block text-gray-700 mb-5 font-bold"
            >
              <span className="text-red-600">*</span> ITEM CATEGORY
            </label>
            <select
              name="itemCategory"
              id="item-category"
              className={`w-full p-2 border-b-2 border-gray-500 ${
                !itemCategory ? 'text-gray-400' : 'text-black'
              }`}
              value={itemCategory}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choose item category
              </option>
              {categories.map((category, index) => (
                <CategoryOption key={index} value={category.value}>
                  {category.label}
                </CategoryOption>
              ))}
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="item-brand"
              className="block text-gray-700 mb-5 font-bold"
            >
              <span className="text-red-600">*</span> ITEM BRAND
            </label>
            <select
              name="itemBrand"
              id="item-brand"
              className={`w-full p-2 border-b-2 border-gray-500 ${
                !itemBrand ? 'text-gray-400' : 'text-black'
              }`}
              value={itemBrand}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choose item brand
              </option>
              {brands.map((brand, index) => (
                <BrandOption key={index} value={brand.value}>
                  {brand.label}
                </BrandOption>
              ))}
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="item-name"
              className="block text-gray-700 mb-5 font-bold"
            >
              <span className="text-red-600">*</span> ITEM NAME
            </label>
            <input
              name="itemName"
              id="item-name"
              type="text"
              className={`w-full p-2 border-b-2 border-gray-500 ${
                !itemName ? 'text-gray-400' : 'text-black'
              }`}
              value={itemName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <label className="block mb-2 text-gray-700">
              ITEM PHOTOS <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-600">
              Make sure to upload 6 images. <br />
              Image size must be less than 1,000KB.
            </p>
            <div className="flex flex-wrap -mx-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="px-2 mb-4 w-40 h-40 lg:w-48 lg:h-48"
                >
                  <img
                    src={image}
                    alt={`upload ${index}`}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              ))}
              {images.length < 12 && (
                <div className="px-2 mb-4">
                  <ImageUploadBox onFileSelectSuccess={handleImageChange} />
                </div>
              )}
            </div>
          </div>
          <div className="mb-8">
            <label
              htmlFor="item-brand"
              className="block text-gray-700 mb-5 font-bold"
            >
              PURCHASE
            </label>
            <select
              id="purchase"
              className={`w-full p-2 border-b-2 border-gray-500 ${
                !itemPurchase ? 'text-gray-400' : 'text-black'
              }`}
            >
              <option value="" disabled selected className="text-gray-400">
                Choose how you purchased the product
              </option>
              {purchases.map((purchase, index) => (
                <PurchaseOption key={index} value={purchase.value}>
                  {purchase.label}
                </PurchaseOption>
              ))}
            </select>
          </div>
          <div className="mb-8">
            <label
              htmlFor="store-name"
              className="block text-gray-700 mb-5 font-bold"
            >
              STORE NAME
            </label>
            <input
              id="store-name"
              type="text"
              className="w-full p-2 border-b-2 border-gray-500"
              placeholder="Enter store name where you get the product"
              value={storeName}
              onChange={handleStoreNameChange}
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="item-condition"
              className="block text-gray-700 mb-5 font-bold"
            >
              ITEM CONDITION
            </label>
            <select
              id="item-condition"
              className={`w-full p-2 border-b-2 border-gray-500 ${
                !itemPurchase ? 'text-gray-400' : 'text-black'
              }`}
            >
              <option value="" disabled selected className="text-gray-400">
                Choose item condition
              </option>
              {conditions.map((condition, index) => (
                <ItemConditionOption key={index} value={condition.value}>
                  {condition.label}
                </ItemConditionOption>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="other-note"
              className="block text-gray-700 mb-5 font-bold"
            >
              OTHER NOTES
            </label>
            <textarea
              id="other-note"
              className="w-full p-2 border-b-2 border-gray-500"
            ></textarea>
          </div>
          <button
            className={`py-3 w-full mt-4 text-center flex justify-center items-center 
            ${canSubmit ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
            disabled={!canSubmit}
          >
            LEGIT CHECK <FaArrowRight className="ml-2" />
          </button>
        </form>
        <AlertLegitCheck isVisible={isAlertVisible} onClose={closeAlert} />
      </div>
    </div>
  );
};

export default LegitCheckFormPage;
