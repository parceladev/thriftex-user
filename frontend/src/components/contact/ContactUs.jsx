import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQItem = ({ question, answer, isActive, setActive }) => {
  return (
    <>
      <button
        onClick={setActive}
        className="flex justify-between items-center w-full text-left py-3"
      >
        <h3 className="text-gray-700 font-semibold pr-16">{question}</h3>
        {isActive ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isActive && (
        <div className="pb-4">
          <p>{answer}</p>
        </div>
      )}
      <hr />
    </>
  );
};

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { question: 'What is Thriftex ?', answer: 'Answer 1' },
    { question: 'How does Thriftex’s legit check works?', answer: 'Answer 2' },
    { question: 'How long does it take to get the result from a legit check?', answer: 'Answer 3' },
    { question: 'How does Thriftex process and protect user’s data?', answer: 'Answer 4' },
    { question: 'What happens if my bought product happen to be fake?', answer: 'Answer 5' },
    { question: 'Is the legit check service from Thriftex really costless?', answer: 'Answer 6' },
    { question: 'Does Thriftex sell products?', answer: 'Answer 7' },
  ];

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col w-full p-16">
      {/* Top Section with Contact Form and FAQ */}
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-stretch justify-center space-y-10 md:space-y-0 md:space-x-32">
        {/* Contact Form Section */}
        <div className="flex flex-col w-full md:flex-1 px-4 mb-10">
          <h2 className="text-xl font-semibold mb-6">CONTACT US</h2>
          <form className=" max-w-[700px] flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name (Required)
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border-0 border-b-2 border-gray-800 bg-transparent py-2 pl-3 focus:ring-0 focus:border-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email (Required)
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-0 border-b-2 border-gray-800 bg-transparent py-2 pl-3 focus:ring-0 focus:border-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full border-0 border-b-2 border-gray-800 bg-transparent py-2 pl-3 focus:ring-0 focus:border-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message (Required)
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full border-0 border-b-2 border-gray-800 bg-transparent py-2 pl-3 focus:ring-0 focus:border-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full font-bold py-2 transition-colors duration-200 transform rounded-md focus:outline-none ${
                isFormValid
                  ? 'bg-gray-800 text-white hover:bg-gray-700 focus:bg-gray-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!isFormValid}
            >
              SUBMIT MESSAGE
            </button>
          </form>
          {/* Additional Content Below the Submit Button */}
          <div className="mt-16 text-sm text-gray-700">
            <p className="font-bold mb-3">CONTACT US</p>
            <p className=''>thriftexcs@gmail.com</p>
            <p className="font-bold mt-8 mb-3">CUSTOMER SERVICE SUPPORT HOURS</p>
            <p className='mb-3'>Monday – Friday 8:00 am - 4:00pm EST.</p>
            <p>Excluding the weekend and major holidays.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col w-full md:flex-1 px-4">
            <h2 className="text-xl font-semibold mb-6">FREQUENTLY ASKED QUESTIONS</h2>
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isActive={activeIndex === index}
                setActive={() => toggleActiveIndex(index)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
