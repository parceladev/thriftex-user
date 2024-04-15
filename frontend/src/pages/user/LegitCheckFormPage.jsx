import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import CategoryOption from '../../components/legitchecks/CategoryOption';
import BrandOption from '../../components/legitchecks/BrandOption';
import PurchaseOption from '../../components/legitchecks/PurchaseOption';
import ItemConditionOption from '../../components/legitchecks/ItemConditionOption';

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
        href="/user/legit-check"
        className="flex items-center justify-start mt-32"
      >
        <FaArrowLeft />
        <span className="pl-2">Back</span>
      </a>
      <div className="w-full p-8 mt-5 bg-white rounded">
        <div className="mb-6 text-2xl italic text-center">LEGIT CHECK FORM</div>
        <form action="">
          <div className="mb-8">
            <label
              htmlFor="item-category"
              className="block mb-5 font-bold text-gray-700"
            >
              <span className="text-red-600">*</span> ITEM CATEGORY
            </label>
            <select
              id="item-category"
              className="w-full p-2 border-b-2 border-gray-500 "
            >
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
              className="block mb-5 font-bold text-gray-700"
            >
              <span className="text-red-600">*</span> ITEM BRAND
            </label>
            <select
              id="item-brand"
              className="w-full p-2 border-b-2 border-gray-500 "
            >
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
              className="block mb-5 font-bold text-gray-700"
            >
              <span className="text-red-600">*</span> ITEM NAME
            </label>
            <input
              id="item-name"
              type="text"
              className="w-full p-2 border-b-2 border-gray-500 "
              defaultValue="Air Jordan 1"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="item-photos"
              className="block mb-5 font-bold text-gray-700"
            >
              <span className="text-red-600">*</span> ITEM PHOTOS
            </label>
            <p className="text-gray-600">
              Make sure to upload 4 images. <br />
              Image size must be less than 1,000KB.
            </p>
            <div className="flex flex-wrap justify-between mt-5">
              <div className="mb-4 border border-gray-300">
                <img
                  src="/src/assets/user/legit-check-page/product-legit-portofolio.png"
                  alt="Item"
                  className="object-cover w-20 h-20 lg:w-40 lg:h-40"
                />
              </div>
              <div className="mb-4 border border-gray-300">
                <img
                  src="/src/assets/user/legit-check-page/product-legit-portofolio.png"
                  alt="Item"
                  className="object-cover w-20 h-20 lg:w-40 lg:h-40"
                />
              </div>
              <div className="mb-4 border border-gray-300">
                <img
                  src="/src/assets/user/legit-check-page/product-legit-portofolio.png"
                  alt="Item"
                  className="object-cover w-20 h-20 lg:w-40 lg:h-40"
                />
              </div>
              <div className="mb-4 border border-gray-300">
                <img
                  src="/src/assets/user/legit-check-page/product-legit-portofolio.png"
                  alt="Item"
                  className="object-cover w-20 h-20 lg:w-40 lg:h-40"
                />
              </div>
              <div className="mb-4 border border-gray-300">
                <img
                  src="/src/assets/user/legit-check-page/product-legit-portofolio.png"
                  alt="Item"
                  className="object-cover w-20 h-20 lg:w-40 lg:h-40"
                />
              </div>
              <div className="mb-4 border border-gray-300">
                <img
                  src="/src/assets/user/legit-check-page/product-legit-portofolio.png"
                  alt="Item"
                  className="object-cover w-20 h-20 lg:w-40 lg:h-40"
                />
              </div>
            </div>
            <button className="w-full py-3 mt-4 text-center text-white bg-black dark:bg-gray-300 dark:text-black">
              SELECT IMAGES
            </button>
          </div>
          <div className="mb-8">
            <label
              htmlFor="item-brand"
              className="block mb-5 font-bold text-gray-700"
            >
              PURCHASE
            </label>
            <select
              id="purchase"
              className="w-full p-2 border-b-2 border-gray-500 "
            >
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
              className="block mb-5 font-bold text-gray-700"
            >
              STORE NAME
            </label>
            <input
              id="store-name"
              type="text"
              className="w-full p-2 border-b-2 border-gray-500"
              defaultValue="Nike Official Store"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="item-condition"
              className="block mb-5 font-bold text-gray-700"
            >
              ITEM CONDITION
            </label>
            <select
              id="item-condition"
              className="w-full p-2 border-b-2 border-gray-500"
            >
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
              className="block mb-5 font-bold text-gray-700"
            >
              OTHER NOTES
            </label>
            <textarea
              id="other-note"
              className="w-full p-2 border-b-2 border-gray-500"
            ></textarea>
          </div>
          <button className="flex items-center justify-center w-full py-3 mt-4 text-center text-white bg-black dark:bg-gray-300 dark:text-black">
            LEGIT CHECK <FaArrowRight className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LegitCheckFormPage;
