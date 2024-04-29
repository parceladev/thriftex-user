import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
  InputText,
  InputImage,
  InputTextArea,
  InputSelect,
} from '../../components/legitchecks';
import AlertLegitCheck from '../../components/legitchecks/AlertLegitCheck';
import { useNavigate } from 'react-router-dom';
import { saveLegitCheck } from '../../utils/legit-api-service';
import { getAccessToken, decodeToken } from '../../utils/token-utilities';

const LegitCheckFormPage = () => {
  const navigate = useNavigate();
  const [itemCategory, setItemCategory] = useState('');
  const [itemBrand, setItemBrand] = useState('');
  const [itemName, setItemName] = useState('');
  const [storeName, setStoreName] = useState('');
  const [purchase, setPurchase] = useState('');
  const [itemCondition, setItemCondition] = useState('');
  const [otherNotes, setOtherNotes] = useState('');
  const [images, setImages] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    if (
      itemCategory.trim() !== '' &&
      itemBrand.trim() !== '' &&
      itemName.trim() !== '' &&
      images.length >= 6
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [itemCategory, itemBrand, itemName, images]);

  const handleImageChange = (event) => {
    const newFiles = Array.from(event.target.files);
    const newImages = [];
    const newImagePreviews = [];

    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];
      newImages.push(file);
      newImagePreviews.push(URL.createObjectURL(file));
    }

    if (images.length + newImages.length <= 12) {
      if (newFiles.every((file) => file.size <= 1000000)) {
        setImages((prevImages) => [...prevImages, ...newImages]);
        setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
      } else {
        alert('All images must be less than 1000KB.');
      }
    } else {
      alert(
        `You can only upload up to 12 images. You've already selected ${images.length} images.`
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isButtonActive) {
      try {
        const accessToken = getAccessToken();
        if (!accessToken) {
          console.error('Access token not found.');
          return;
        }

        const decodedToken = decodeToken(accessToken);
        const userId = decodedToken.user_id;
        if (!userId) {
          console.error('User ID not found in token.');
          return;
        }

        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('kategori', itemCategory);
        formData.append('brand', itemBrand);
        formData.append('nama_item', itemName);
        formData.append('purchase', purchase);
        formData.append('nama_toko', storeName);
        formData.append('kondisi_barang', itemCondition);
        formData.append('catatan', otherNotes);
        for (let i = 0; i < images.length; i++) {
          formData.append('legitimage[]', images[i]);
        }

        const result = await saveLegitCheck(formData, navigate);
        console.log('result:', result);

        if (result && result.status) {
          setAlertVisible(true);
        } else {
          console.error('Error submitting form:', result.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setAlertVisible(false);
      }
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className="flex flex-col justify-start w-full min-h-screen p-10">
      <a
        href="/user/legit-check"
        className="flex items-center justify-start mt-32"
      >
        <FaArrowLeft /> <span className="pl-2">Back</span>
      </a>
      <div className="w-full p-8 mt-5 bg-white rounded">
        <div className="mb-6 text-2xl italic text-center uppercase">
          Legit Check Form
        </div>
        <form onSubmit={handleSubmit}>
          <InputSelect
            label="Item Category"
            name="item-category"
            id="item-category"
            htmlFor="item-category"
            isRequired="required"
            dataType="categories"
            defaultValue="Select Item Category"
            value={itemCategory}
            onChange={(e) => setItemCategory(e.target.value)}
          />
          <InputSelect
            label="Item Brand"
            name="item-brand"
            id="item-brand"
            htmlFor="item-brand"
            isRequired="required"
            dataType="brands"
            defaultValue="Select Brand"
            value={itemBrand}
            onChange={(e) => setItemBrand(e.target.value)}
          />
          <InputText
            label="Item Name"
            name="item-name"
            id="item-name"
            htmlFor="item-name"
            isRequired="required"
            placeholder="Enter Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <InputImage
            label="Upload Images"
            htmlFor="imageUpload"
            id="imageUpload"
            isRequired="required"
            images={imagePreviews}
            setImages={setImages}
            handleImageChange={(e) => handleImageChange(e)}
          />
          <InputSelect
            label="Purchase"
            name="purchase"
            id="purchase"
            htmlFor="purchase"
            isRequired="optional"
            dataType="purchases"
            defaultValue="Select Purchase"
            value={purchase}
            onChange={(e) => setPurchase(e.target.value)}
          />
          <InputText
            label="Store Name"
            name="store-name"
            id="store-name"
            htmlFor="store-name"
            isRequired="optional"
            placeholder="Enter Store Name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
          <InputSelect
            label="Item Condition"
            name="item-condition"
            id="item-condition"
            htmlFor="item-condition"
            isRequired="optional"
            dataType="conditions"
            defaultValue="Select Item Condition"
            value={itemCondition}
            onChange={(e) => setItemCondition(e.target.value)}
          />
          <InputTextArea
            label="Other Notes"
            name="other-notes"
            id="other-notes"
            htmlFor="other-notes"
            isRequired="optional"
            value={otherNotes}
            onChange={(e) => setOtherNotes(e.target.value)}
          />
          <button
            type="submit"
            className={`py-3 w-full mt-4 text-center flex justify-center items-center 
            ${
              isButtonActive ? 'bg-black text-white' : 'bg-gray-300 text-black'
            }`}
            disabled={!isButtonActive}
          >
            Legit Check <FaArrowRight className="ml-2" />
          </button>
        </form>
        <AlertLegitCheck isVisible={isAlertVisible} onClose={closeAlert} />
      </div>
    </div>
  );
};

export default LegitCheckFormPage;
