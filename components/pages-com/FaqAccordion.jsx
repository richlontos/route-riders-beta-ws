const FaqAccordion = () => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "How does the app track my rides?",
      answer:
        "The app uses a combination of GPS and motion sensors to accurately track your motorcycle rides. It ensures minimal battery consumption while maintaining precision.",
    },
    {
      id: "faq-2",
      question: "How do I find recommended routes in my area?",
      answer:
        "Our app has a 'Discover' section where you can find routes recommended by other riders. You can filter these based on difficulty, scenery, or distance.",
    },
    {
      id: "faq-3",
      question: "Can I connect with other riders using this app?",
      answer:
        "Absolutely! We have a community feature that allows you to connect, chat, and plan rides with fellow enthusiasts in your area.",
    },
    {
      id: "faq-4",
      question: "Is there an offline mode?",
      answer:
        "Yes, you can download maps and routes for offline use. This is especially handy in areas with weak mobile reception.",
    },
    {
      id: "faq-5",
      question: "Is there a premium version of the app?",
      answer:
        "Yes, we offer a premium subscription that unlocks additional features such as advanced tracking, no ads, and exclusive community events.",
    },
    {
      id: "faq-6",
      question: "Can I transfer my ride data to a new device?",
      answer:
        "Certainly! Just ensure you're logged in to your account on the new device, and all your ride data will be synchronized automatically.",
    },
    {
      id: "faq-7",
      question: "Can I integrate the app with my action camera?",
      answer:
        "Yes, our app has integrations with certain action camera brands. This allows you to overlay your ride stats on your video footage.",
    },
    {
      id: "faq-8",
      question: "What if I encounter a bug or issue?",
      answer:
        "Our support team is always ready to help. You can report issues directly through the app, and we'll get on it ASAP.",
    },

  ];

  return (
    <div className="accordion accordion-style-four" id="accordionOne">
      {accordionItems.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading-${index}`}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse-${index}`}
            >
              <span>{`0${index + 1}.`}</span> {item.question}
            </button>
          </div>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${index === 2 ? "show" : ""
              }`}
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
