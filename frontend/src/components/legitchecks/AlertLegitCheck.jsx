import React from 'react';


const AlertLegitCheck = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const buttonStyle = "inline-block text-center py-4 px-4 w-auto min-w-[150px]"; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 w-[600px] h-[500px] flex flex-col justify-between items-center">
        <div className="flex flex-col items-center gap-2">  
          <h1 className="font-serif font-normal text-6xl leading-tight tracking-widest mt-8">THANK YOU</h1>
          <p className="mt-10">Please wait until your item is <span className="font-bold text-xl">verified</span>  by our validator</p>
        </div>
        <div className="flex flex-col items-center gap-4 mb-8"> 
          <button
            className={`${buttonStyle} bg-black text-white`}
            onClick={onClose}
          >
            MY LEGIT CHECKS
          </button>
          <button
            className={`${buttonStyle} border border-black bg-transparent text-black`}
            onClick={onClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertLegitCheck;