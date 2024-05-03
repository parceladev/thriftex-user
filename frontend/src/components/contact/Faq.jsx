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
        <h3 className="pr-16 font-semibold text-gray-700">{question}</h3>
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

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    { question: 'What is Thriftex ?', answer: 'Answer 1' },
    { question: 'How does Thriftex’s legit check works?', answer: 'Answer 2' },
    {
      question: 'How long does it take to get the result from a legit check?',
      answer: 'Answer 3',
    },
    {
      question: 'How does Thriftex process and protect user’s data?',
      answer: 'Answer 4',
    },
    {
      question: 'What happens if my bought product happen to be fake?',
      answer: 'Answer 5',
    },
    {
      question: 'Is the legit check service from Thriftex really costless?',
      answer: 'Answer 6',
    },
    { question: 'Does Thriftex sell products?', answer: 'Answer 7' },
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
