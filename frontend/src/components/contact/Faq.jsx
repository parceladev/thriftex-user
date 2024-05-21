import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState,useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer, isActive, setActive }) => {
  const contentRef = useRef(null);

  return (
    <>
      <button
        onClick={setActive}
        className="flex items-center justify-between w-full py-3 text-left"
      >
        <h3 className="pr-16 font-semibold">{question}</h3>
        {isActive ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div
        ref={contentRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden`}
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <div className="pb-4">
          <p className="font-sans">{answer}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

const Faq = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Menambahkan sedikit penundaan sebelum mengatur isVisible ke true
  }, []);


  const faqData = [
    {
      question: t("Question FAQ 1"),
      answer:
        t("Answer FAQ 1"),
    },
    {
      question: t("Question FAQ 2"),
      answer:
      t("Answer FAQ 2"),
    },
    {
      question: t("Question FAQ 3"),
      answer:
      t("Answer FAQ 3"),
    },
    {
      question: t("Question FAQ 4"),
      answer:
      t("Answer FAQ 4"),
    },
    {
      question: t("Question FAQ 5"),
      answer:
      t("Answer FAQ 5"),
    },
    {
      question: t("Question FAQ 6"),
      answer:
      t("Answer FAQ 6"),
    },
    {
      question: t("Question FAQ 7"),
      answer:
      t("Answer FAQ 7"),
    },
  ];

  return (
    <div className={`flex flex-col w-full md:flex-1 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h2 className="mb-6 text-xl font-semibold uppercase">Frequently Asked Questions</h2>
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
