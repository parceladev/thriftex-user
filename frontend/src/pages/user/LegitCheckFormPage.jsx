import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { InputText, InputImage, InputTextArea, InputSelect } from '../../components/legitchecks';
import AlertLegitCheck from '../../components/legitchecks/AlertLegitCheck';

const LegitCheckFormPage = () => {
  // State untuk tiap-tiap field dan gambar.
  const [itemCategory, setItemCategory] = useState('');
  const [itemBrand, setItemBrand] = useState('');
  const [itemName, setItemName] = useState('');
  const [images, setImages] = useState([]);

  // State untuk tombol submit.
  const [isButtonActive, setIsButtonActive] = useState(false);

  // Efek untuk menentukan apakah semua syarat terpenuhi.
  useEffect(() => {
    if (
      itemCategory.trim() !== '' &&
      itemBrand.trim() !== '' &&
      itemName.trim() !== '' &&
      images.length >= 6
    ) {
      setIsButtonActive(true); // Aktifkan tombol jika semua syarat terpenuhi.
    } else {
      setIsButtonActive(false); // Tetap non-aktif jika ada syarat yang belum terpenuhi.
    }
  }, [itemCategory, itemBrand, itemName, images]); // Dependensi efek.

  // Fungsi untuk menangani perubahan gambar yang diunggah
  // eslint-disable-next-line no-unused-vars
  const handleImageChange = (files) => {
    const newFiles = Array.from(event.target.files);
    // Memastikan total gambar tidak melebihi 12 setelah menambahkan yang baru
    if (images.length + newFiles.length <= 12) {
      // Validasi ukuran file jika diperlukan
      if (newFiles.every((file) => file.size <= 1000000)) {
        setImages(prevImages => [...prevImages, ...newFiles].map(file => 
          file instanceof File ? URL.createObjectURL(file) : file
        ));
      } else {
        // Handle error ukuran file
        alert('All images must be less than 1000KB.');
      }
    } else {
      // Handle error jika melebihi batas gambar
      alert(`You can only upload up to 12 images. You've already selected ${images.length} images.`);
    }
  };

  
  // Fungsi untuk menangani submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isButtonActive) {
      // Proses data form di sini
      // console.log('Form Submitted:', { itemName, itemCategory, itemBrand, images });
      setAlertVisible(true); // Menampilkan alert sukses
    }
  };
  
 
  const [isAlertVisible, setAlertVisible] = useState(false); // State untuk menampilkan alert
 
  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <div className="flex flex-col justify-start w-full min-h-screen p-10">
      <a href="/user/legit-check" className="flex items-center justify-start mt-32">
        <FaArrowLeft /> <span className="pl-2">Back</span>
      </a>
      <div className="w-full p-8 mt-5 bg-white rounded">
        <div className="mb-6 text-2xl italic text-center uppercase">Legit Check Form</div>
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
            images={images}
            setImages={setImages}
            handleImageChange={(e) => handleImageChange(e.target.files)}
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
            // className={`py-3 w-full mt-4 uppercase text-center flex justify-center items-center`}
            className={`py-3 w-full mt-4 text-center flex justify-center items-center 
            ${isButtonActive ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}
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
