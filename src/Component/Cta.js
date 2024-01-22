import React from "react";

const optVals = [
  "Friends and family",
  "YouTube video",
  "Podcast",
  "Facebook",
  "Others",
];

const ctaFormData = [
  {
    id: "full-name",
    dis: "Full Name",
    placeholder: "Priya V",
  },
  {
    id: "email",
    dis: "Email address",
    placeholder: "example@gmail.com",
  },
];

export default function Cta() {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form className="cta-form" action="#">
              {ctaFormData.map((data, index) => {
                let { id, dis, placeholder } = data;
                return (
                  <div key={index}>
                    <label htmlFor={id}>{dis}</label>
                    <br />
                    <input
                      type="text"
                      id={id}
                      name={id}
                      placeholder={placeholder}
                      required
                    />
                  </div>
                );
              })}

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <br />
                <select id="select-where" required defaultValue="">
                  <option value="">Please choose one option:</option>
                  {optVals.map((optVal, index) => {
                    return (
                      <option value={optVal.toLowerCase()} key={index}>
                        {optVal}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button className="btn form-btn">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
}
