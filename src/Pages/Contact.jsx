import React from "react";
import Navbar from "../components/Navbar";
import LastSection from "../components/LastSection";

const servicesText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            at vitae atque quos dignissimos. Vitae facilis repudiandae
            voluptatem commodi vel.`;

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section">
        <div className="container underline_text has-text-centered">
          <h1 className="is-size-2-desktop is-size-4-mobile serviceText">
            Contact
          </h1>
        </div>
        <div className="container has-text-centered pt-5">
          <p>{servicesText}</p>
          <p>{servicesText}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="has-text-centered">
            <h2 className="is-size-4 mb-3">Send a message</h2>
          </div>
          <div className="columns is-centered">
            <div className="column is-half">
              <form>
                <div className="field">
                  <label className="label has-text-black">Name</label>
                  <div className="control">
                    <input
                      className="input has-background-white has-text-black"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-black">Email</label>
                  <div className="control">
                    <input
                      className="input has-background-white has-text-black"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-black">Subject</label>
                  <div className="control">
                    <input
                      className="input has-background-white has-text-black"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-black">Phone</label>
                  <div className="control">
                    <input
                      className="input has-background-white has-text-black"
                      type="tel"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label has-text-black">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea has-background-white has-text-black"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" />I agree to the{" "}
                      <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button className="button btn">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <LastSection />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
