import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer, isActive, setActive }) => {
  return (
    <>
      <button
        onClick={setActive}
        className="flex items-center justify-between w-full py-3 text-left"
      >
        <h3 className="pr-16 font-semibold text-black">{question}</h3>
        {isActive ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isActive && (
        <div className="pb-4">
           <p className="text-gray-500 font-sans">{answer}</p>
        </div>
      )}
      <hr />
    </>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'What is Thriftex ?',
      answer:
        'Thriftex is a website that offers free legit checks for fashion items like clothing, shoes, and accessories. We help you verify the authenticity of thrifted or second-hand goods before you purchase them.',
    },
    {
      question: 'How does Thriftex’s legit check works?',
      answer:
        'To use Thriftex legit check service, simply visit our website, upload a photo of the product you want to verify, and our team will analyze and check its authenticity for free. We will then provide you with the results.',
    },
    {
      question: 'How long does it take to get the result from a legit check?',
      answer:
        'Typically, the legit check process takes about 24 hours, but it may take longer depending on the volume of requests we are handling. We strive to deliver results as quickly as possible',
    },
    {
      question: 'How does Thriftex process and protect user’s data?',
      answer:
        'We understand the importance of your data privacy. Thriftex processes user data securely and confidentially in accordance with our privacy policy. We do not share or sell user data to third parties without your consent. For more information, please refer to our privacy policy on our website.',
    },
    {
      question: 'What happens if my bought product happen to be fake?',
      answer:
        'If a product you verify through our legit check service turns out to be fake, we will provide detailed information on why we believe it to be counterfeit. We recommend that you avoid purchasing fake items and exercise caution in transactions.',
    },
    {
      question: 'Is the legit check service from Thriftex really costless?',
      answer:
        'Ya, layanan legit check di Thriftex benar-benar gratis. Kami percaya bahwa semua orang harus memiliki akses ke informasi keaslian produk, terutama ketika berbelanja barang thrift atau second-hand. Kami berkomitmen untuk menyediakan layanan ini secara gratis kepada pengguna kami.',
    },
    {
      question: 'Does Thriftex sell products?',
      answer:
        'No, Thriftex is not an e-commerce that sell products. We only provide a legit check service to help you verify product authenticity. After receiving our verification results, you will need to find another place or platform to complete your purchase.',
    },
  ];

  return (
    <div className="flex flex-col w-full md:flex-1">
      <h2 className="mb-6 text-xl font-semibold">FREQUENTLY ASKED QUESTIONS</h2>
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
  );
};

export default Faq;
