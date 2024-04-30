import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import Zoom from 'react-medium-image-zoom';
// import 'react-medium-image-zoom/dist/styles.css';
import { InputField } from '../../components/legitchecksdetail';
import { TextAreaField } from '../../components/legitchecksdetail';
import { PhotosField } from '../../components/legitchecksdetail';
import { AuthenticityStatus } from '../../components/legitchecksdetail';

const initialData = {
  id: '#4142-ONZX',
  category: 'Shoes',
  brand: 'Vans',
  name: 'Vans Old Skool',
  photos: [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ],
  purchase: '04-01-2024',
  storeName: 'Sneaker Street',
  condition: 'New',
  otherNote: 'Hola Hola Hola',
  detailDescription: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  // authenticity: '',
};

export const LegitDetail = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialData);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // POST data to an API or handle internally
  // };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden">
        <div className=" flex flex-row justify-between items-center border-b-2 p-4 mb-5">
          <p className="text-xl font-bold text-sans text-black ">Legit Check Detail</p>
          <button type="button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="text-[16px]" />
          </button>
        </div>
        <div className="p-4 overflow-y-auto" style={{ maxHeight: '80vh' }}>
          <InputField
            label="ITEM CATEGORY"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          <InputField
            label="ITEM BRAND"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
          <InputField label="ITEM NAME" name="name" value={formData.name} onChange={handleChange} />
          <PhotosField photos={formData.photos} />
          <InputField
            label="PURCHASE DATE"
            name="purchase"
            value={formData.purchase}
            onChange={handleChange}
          />
          <InputField
            label="STORE NAME"
            name="storeName"
            value={formData.storeName}
            onChange={handleChange}
          />
          <InputField
            label="ITEM CONDITION"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          />
          <TextAreaField
            label="OTHER NOTE"
            name="otherNote"
            value={formData.otherNote}
            onChange={handleChange}
            required={false} 
          />
          <AuthenticityStatus
            status={formData.authenticity}
            message={
              formData.authenticity === 'ORIGINAL' ? 'Origianl Product' : 'Fake product detected'
            }
          />
          <InputField
            label="DETAIL DESCRIPTION"
            name="detailDescription"
            value={formData.detailDescription}
            onChange={handleChange}
            type="textarea"
          />
        </div>
      </div>
    </div>
  );
};

export default LegitDetail;
