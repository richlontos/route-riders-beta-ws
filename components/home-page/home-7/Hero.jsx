import HeroBtnGroup from "./HeroBtnGroup";

const Hero = () => {
  return (
    <>
      <a href="#" className="slogan d-inline-block">
        <strong className="fw-500">Get it Now!</strong> for only,
        $2.99/mo. <i className="fas fa-chevron-right" />
      </a>
      <h1 className="hero-heading fw-bold mt-25 mb-40 md-mt-20">
        Your GPS might be wrong, but we're not!
      </h1>
      <p className="text-lg mb-50 lg-mb-30 pe-xxl-4">
        Navigate Your Adventure. GSXRs, Maybe Next Update?
      </p>
      <HeroBtnGroup />
      <h2 className="fw-500 mt-40 mb-5">A+ Rating </h2>
      <p className="fs-18 opacity-75">
        The Only Thing We Drop is the Gear, Not the Grade!
      </p>
    </>
  );
};

export default Hero;
