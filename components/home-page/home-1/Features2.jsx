const Features2 = () => {
  const listItems = [
    "Discover thrilling routes.",
    "Connect with passionate riders.",
    "Engage in rider communities.",
  ];

  const platformButtons = [
    {
      href: "#", // update with actual link when available
      imgSrc: "/images/icon/apple.svg", // ensure you have motorcycle-related icons if necessary
      imgAlt: "iOS App",
      platform: "App Store",
    },
    {
      href: "#", // update with actual link when available
      imgSrc: "/images/icon/playstore.svg", // ensure you have motorcycle-related icons if necessary
      imgAlt: "Android App",
      platform: "Google Play",
    },
  ];

  return (
    <div className="block-style-three" data-aos="fade-right">
      <div className="title-style-four">
        <h2 className="main-title fw-500 tx-dark m0">
          Elevate your rides with our <span>app.</span>
        </h2>
      </div>
      {/* /.title-style-four */}
      <p className="text-lg pt-35 pb-30 lg-pb-10">
        Embark on new adventures. Have questions? We're here to guide the journey.
      </p>

      <ul className="style-none list-item fs-18">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="d-sm-flex align-items-center platform-button-group mt-60 lg-mt-30">
        {platformButtons.map((button, index) => (
          <a
            key={index}
            href={button.href}
            className={`d-flex align-items-center ${button.platform === "App store" ? "ios-button" : "windows-button"
              }`}
          >
            <img
              src={button.imgSrc}
              alt={button.imgAlt}
              className="lazy-img icon"
            />
            <div>
              <span>Download on the</span>
              <strong>{button.platform}</strong>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Features2;
