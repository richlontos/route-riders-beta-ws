const faqs = [
  {
    id: "1",
    question: "How do I start sharing my motorcycle routes?",
    answer:
      "After creating an account and logging in, navigate to the 'Share Route' option. From there, you can upload, describe, and share your routes with the community.",
  },
  {
    id: "2",
    question: "Can I join routes created by other riders?",
    answer:
      "Absolutely! Browse routes created by others, and if one piques your interest, you can save it, join the ride, or interact with the creator.",
  },
  {
    id: "3",
    question: "How does the lead rider tracking feature work?",
    answer:
      "When on a group ride, one rider can be designated as the 'lead rider'. Using the app, other riders can then track the lead's position in real-time to ensure the group stays together.",
  },
  {
    id: "4",
    question: "How do I connect with other riders in my area?",
    answer:
      "Our community section allows you to discover and connect with riders in your area. You can also join local ride events or start one yourself.",
  },

];

const Faq = () => {
  return (
    <div className="accordion accordion-style-one md-mt-40" id="accordionOne">
      {faqs.map((faq) => (
        <div className="accordion-item" key={faq.id}>
          <div className="accordion-header" id={"heading" + faq.id}>
            <button
              className={`accordion-button${faq.id !== "3" ? " collapsed" : ""
                }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + faq.id}
              aria-expanded={faq.id === "3" ? "true" : "false"}
              aria-controls={"collapse" + faq.id}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={"collapse" + faq.id}
            className={`accordion-collapse collapse${faq.id === "3" ? " show" : ""
              }`}
            aria-labelledby={"heading" + faq.id}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
