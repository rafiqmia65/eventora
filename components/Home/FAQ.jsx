"use client";

import React, { useState } from "react";

// Single FAQ item component
const FAQItem = ({ faq, index, openIndex, toggleFAQ }) => {
  const isOpen = openIndex === index;

  // Button classes change based on open/close state
  const buttonClasses = `
    w-full px-6 py-4 text-left transition-colors flex justify-between items-center
    ${
      isOpen
        ? "bg-teal-200 dark:bg-teal-800"
        : "bg-teal-100 dark:bg-teal-800 hover:bg-teal-200 dark:hover:bg-teal-700"
    }
  `;

  const answerClasses = `
    px-6 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200
  `;

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* FAQ Question Button */}
      <button onClick={() => toggleFAQ(index)} className={buttonClasses}>
        <span className="font-semibold text-gray-900 dark:text-white">
          {faq.question}
        </span>
        <span className="text-gray-700 dark:text-gray-200">
          {isOpen ? "-" : "+"} {/* Toggle icon */}
        </span>
      </button>

      {/* FAQ Answer: Only visible if open */}
      {isOpen && <div className={answerClasses}>{faq.answer}</div>}
    </div>
  );
};

// Sample FAQ data
const faqs = [
  {
    question: "How do I create an event?",
    answer:
      "Simply sign up, go to the Events dashboard, and click on 'Create Event'. Fill out the details and publish.",
  },
  {
    question: "Can I manage multiple events at once?",
    answer:
      "Yes! Eventora allows you to create, edit, and manage multiple events simultaneously.",
  },
  {
    question: "How do I accept bookings?",
    answer:
      "Once your event is live, users can book tickets. You can track all bookings from the dashboard.",
  },
  {
    question: "Is there a payment integration?",
    answer:
      "Yes, Eventora supports Stripe and PayPal for easy and secure payment processing.",
  },
];

// Main FAQ Section
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        {/* Section Subtitle */}
        <p className="text-gray-700 dark:text-gray-300 mb-12">
          Find answers to common questions about Eventora.
        </p>

        {/* Flex container: left accordion, right paragraph */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side: Accordion */}
          <div className="flex-1 space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>

          {/* Right Side: Informative paragraph */}
          <div className="flex-1 flex items-center text-gray-700 dark:text-gray-300 text-lg">
            <p className="w-full text-left">
              Have questions about using Eventora? Our FAQ section provides
              clear answers to common inquiries, helping you manage, book, and
              create events smoothly. Learn how to create an event, invite
              participants, handle payments, and customize your event settings
              effortlessly. If your question isn’t listed here, feel free to
              contact our support team anytime. We are committed to ensuring
              your event experience is seamless and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
