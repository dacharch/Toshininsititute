import React from 'react';
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-us section" id="contact">
      <div className="container">
        <div className="row">
          {/* Left Side - Info & Offer */}
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <h6>Contact Toshi Institute</h6>
              <h2>We are here to help you learn better</h2>
              <p>
                At Toshi Institute, we provide high-quality educational resources and courses to help you excel in your career.
                Reach out to us anytime for guidance, support, or to know more about our programs.
              </p>

             
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-6">
            <div className="contact-us-content">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your E-mail..."
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message..."
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">
                        Send Message Now
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
