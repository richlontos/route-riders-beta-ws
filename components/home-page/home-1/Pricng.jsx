const monthlyPricingPlans = [
  {
    id: "regular",
    price: "$0", 
    plan: "GSXR riders be like",
    features: [
      "Route Tracking",
      "Discover Riding Spots",
      "Friend Locator",
      "No Cell Required",
      "...and more!",
    ],
  },
  {
    id: "flexible",
    price: "$4.99",
    plan: "Lit status",
    features: [
      "All Regular Features",
      "Exclusive Ride Suggestions",
      "Enhanced Route Planner",
      "Interactive 3D Maps",
      "...and more!",
    ],
    active: true,
  },
  {
    id: "business",
    price: "$7.99",
    plan: "Top-Tier!",
    features: [
      "All Flexible Features",
      "Full PRO Access",
      "Free Shipping on Gear",
      "Exclusive Discounts",
      "...and more!",
    ],
  },
];


const yearlyPricingPlans = [
  {
    id: "regular",
    price: "$0",  // assuming it's free even yearly
    plan: "GSXR riders be like",
    features: [
      "Route Tracking",
      "Discover Top Riding Spots",
      "Friend Locator",
      "...and much more!"
    ],
  },
  {
    id: "flexible",
    price: "$29.99",
    plan: "Lit Status",
    features: [
      "All Regular Plan Features",
      "Exclusive Ride Suggestions",
      "Enhanced Route Planner with Winding Roads",
      "Interactive 3D Maps",
      "...and additional features!"
    ],
    active: true,
  },
  {
    id: "business",
    price: "$49.99",
    plan: "Top-Tier!",
    features: [
      "All Flexible Plan Offerings",
      "Full PRO Access",
      "Free Shipping at Partnered Stores",
      "Exclusive Discounts, Rewards, and Content",
      "...and even more exclusive benefits!"
    ],
  },
];


const Pricing = () => {
  return (
    <>
      <ul
        className="nav nav-tabs justify-content-center border-0 pricing-nav-two wow fadeInUp"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#month"
            type="button"
            role="tab"
          >
            Monthly
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#year"
            type="button"
            role="tab"
          >
            Yearly
          </button>
        </li>
      </ul>

      <div className="mt-80 lg-mt-50 wow fadeInUp">
        <div className="tab-content">
          <div className="tab-pane show active" id="month">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="row gx-xxl-5 align-items-center pricing-table-area-two">
                  {monthlyPricingPlans.map((plan) => (
                    <div key={plan.id} className="col-lg-4 col-sm-6">
                      <div
                        className={`pr-column mt-40 ${plan.active ? "active" : ""
                          }`}
                      >
                        <div className="pr-header pb-30 mb-45">
                          <div className="price fw-500 tx-dark">
                            {plan.price}
                          </div>
                          <div className="plan tx-dark">{plan.plan}</div>
                        </div>
                        <div className="pr-body">
                          <ul className="style-none text-start">
                            {plan.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pr-footer pt-55 lg-pt-30">
                          
                          <a
                            href="#"
                            className="signup-btn fw-500 tran3s w-100"
                          >
                            Sign up
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* End month */}
          <div className="tab-pane" id="year">
            <div className="row">
              <div className="col-xxl-11 m-auto">
                <div className="row gx-xxl-5 align-items-center pricing-table-area-two">
                  {yearlyPricingPlans.map((plan) => (
                    <div key={plan.id} className="col-lg-4 col-sm-6">
                      <div
                        className={`pr-column mt-40 ${plan.active ? "active" : ""
                          }`}
                      >
                        <div className="pr-header pb-30 mb-45">
                          <div className="price fw-500 tx-dark">
                            {plan.price}
                          </div>
                          <div className="plan tx-dark">{plan.plan}</div>
                        </div>
                        <div className="pr-body">
                          <ul className="style-none text-start">
                            {plan.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pr-footer pt-55 lg-pt-30">
                          <div className="trial-text opacity-75 mb-20">
                            Up to 7 user + 1.99 per user
                          </div>
                          <a
                            href="#"
                            className="signup-btn fw-500 tran3s w-100"
                          >
                            Sign up
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* year */}
        </div>
      </div>
    </>
  );
};

export default Pricing;
