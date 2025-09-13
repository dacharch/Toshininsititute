import React from 'react';
import "./About.css";

const AboutUs = () => {
  return (
    <div className="section about-us">
      <div className="container">
        <div className="row">
          {/* Left-side Accordion */}
          <div className="col-lg-6 offset-lg-1">
            <div className="accordion" id="accordionExample">
              {/* Accordion Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Our Vision
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    At Toshni Institute, we create a sacred space where individuals reconnect with their true essence and awaken their inner light. Our purpose is to guide people beyond pain and limitations, helping them heal deep wounds, rediscover balance, and embrace their infinite potential.
                  </div>
                </div>
              </div>

              {/* Accordion Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Our Motive
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We empower individuals through meditation, energy healing, therapy, and soulful teachings. Healing is not just the absence of suffering but the remembrance of wholeness — embracing peace, joy, and inner strength that already exists within us.
                  </div>
                </div>
              </div>

              {/* Accordion Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Our Approach
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We blend ancient wisdom with modern understanding, providing holistic tools that help people break free from limitations, live consciously, and walk their unique soul path with clarity and confidence.
                  </div>
                </div>
              </div>

              {/* Accordion Item 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Our Impact
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Every transformation here ripples outward, nurturing families, communities, and contributing to humanity’s evolution. Toshni Institute serves as a beacon for souls seeking to reclaim their sacred birthright and live fully aligned with their highest purpose.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right-side Content */}
          <div className="col-lg-5 align-self-center">
            <div className="section-heading">
              <h6>About Us</h6>
              <h2>What makes us the best academy online?</h2>
              <p>
                Toshni Institute is dedicated to awakening the inner light within every individual. We guide souls towards healing, self-discovery, and conscious living through meditation, therapy, energy work, and holistic education. Our vision is to create a ripple effect of transformation — from individuals to families, communities, and ultimately, humanity.
              </p>
              <div className="main-button">
                <a href="#">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
