import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer, isActive, setActive }) => {
  return (
    <>
      <button
        onClick={setActive}
        className="flex items-center justify-between w-full py-3 text-left"
      >
        <h3 className="pr-16 font-semibold">{question}</h3>
        {isActive ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isActive && (
        <div className="pb-4">
          <p className="font-sans">{answer}</p>
        </div>
      )}
      <hr />
    </>
  );
};

const Faq = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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
