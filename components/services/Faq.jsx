const accordionItems = [
  {
    id: 1,
    title: "Route Mapping & Tracking",
    content:
      "Utilize our advanced algorithms to map the best motorcycle routes and track your rides seamlessly.",
  },
  {
    id: 2,
    title: "Motorcycle Maintenance Tips",
    content:
      "Benefit from expert advice and step-by-step guides to ensure your motorcycle stays in pristine condition.",
  },
  {
    id: 3,
    title: "Community Events & Rallies",
    content:
      "Stay updated with the latest motorcycle events, rallies, and community meet-ups in your vicinity.",
  }

];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${item.id === 1 ? " show" : ""
              }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
