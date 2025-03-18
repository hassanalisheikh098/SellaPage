import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { BackgroundGradientDemo } from "./sections/Section2"
import { HeroScrollDemo } from "./sections/Tabpage"
import { useState } from "react";
import RDICalculatorComplete from "./sections/Calculator"

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Sella?",
      answer: "Sella is your 24/7 AI inbound closer that helps convert website visitors into qualified leads."
    },
    {
      question: "How does Sella work?",
      answer: "Sella engages visitors in natural conversations and seamlessly schedules meetings."
    },
    {
      question: "Is Sella easy to integrate?",
      answer: "Yes, Sella can be easily integrated into your existing website with minimal setup."
    }
  ];

  return (
    <div className="flex flex-col items-center mt-10 mb-16">
      <h2 className="text-5xl md:text-7xl font-bold mb-16 bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`relative bg-black text-white shadow-lg rounded-lg p-6 mb-4 cursor-pointer transition-all duration-300 ease-in-out`}
            onClick={() => toggleExpand(index)}
          >
            <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-clip-padding bg-gradient-to-b from-white to-[#a855f7] opacity-50"></div>
            <div className="relative z-10 flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-90' : ''}`}>➔</span>
            </div>
            <div className={`transition-opacity duration-300 ease-in-out ${expandedIndex === index ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
              <p className="text-gray-300 mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
};

export const Desktop = (): JSX.Element => {
  
  return (
    <div className="flex flex-col w-full bg-[#020103]">
      <NavigationSection />
      <DashboardSection />
     <BackgroundGradientDemo/>
     <HeroScrollDemo/>
     <RDICalculatorComplete/>
      <FAQs/>
      <FooterSection />
    </div>
  );
};
