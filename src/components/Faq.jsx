import React, { useState } from "react";

const faqs = [
  {
    question: "Do I need prior gym experience?",
    answer:
      "Not at all. Whether you're stepping into a gym for the first time or you've been training for years, MuscleLab is built to help you progress.",
  },
  {
    question: "What membership plans do you offer?",
    answer:
      "We offer different membership options based on your training needs and duration. Choose the plan that works best for your goals.",
  },
  {
    question: "Do you provide personal training?",
    answer:
      "Yes. Our coaches can provide personalized guidance to help you train with better technique, structure, and consistency.",
  },
  {
    question: "What are the gym timings?",
    answer:
      "MuscleLab is open throughout the week during our scheduled operating hours. Contact us to confirm the current timings.",
  },
  {
    question: "Can I visit the gym before joining?",
    answer:
      "Absolutely. Visit MuscleLab, check out the facilities, and talk to our team before deciding on a membership.",
  },
  {
    question: "Is MuscleLab suitable for beginners?",
    answer:
      "Yes. You don't need to be fit before joining. We'll help you build the consistency, strength, and confidence to reach your goals.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-4">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Got Questions?
          </p>

          <h2 className="max-w-3xl text-3xl  sm:text-5xl font-bold uppercase leading-[0.95] tracking-tight text-text md:text-7xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ */}
        <div className="border-t border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-border"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-8 py-6 text-left md:py-8"
                >
                  <div className="flex items-start gap-5">

                    <span className="sm:text-lg font-semibold uppercase tracking-tight text-text md:text-2xl">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border border-border text-2xl font-light text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    } text-text`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 text-base leading-tight sm:leading-relaxed text-muted md:pb-8 md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Faq;