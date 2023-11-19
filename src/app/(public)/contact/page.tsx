import { Metadata } from "next";

import "./style.scss";

export const metadata: Metadata = {
  title: "Vodiy perfume | Contact",
  description:
    "Vodiy perfume",
};

const ContactPage = () => {
  return <section>
    <div className="container">
      <h1 className="contact__title">Contact Us</h1>
      <div className="contact__main">
      <div className="contact_img">
            <img src="https://d2o7rqynhxcgmp.cloudfront.net/uploads/images/modules/column/United-States/_960x480_crop_center-center_50_none/bambora-contact-sales_2021-09-20-202948_vszr.svg" alt="" />
          </div>
        <div className="contact__form">
          <form className="admin__account contact__form">
            <div className="profile__row account__row">
              <div className="profile__input">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" placeholder="First name" />
              </div>
              <div className="profile__input">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" placeholder="Last name" />
              </div>
            </div>
            <div className="profile__row">
              <div className="profile__input">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email" />
              </div>
              <div className="profile__input">
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="text" id="phoneNumber" placeholder="Phone number" />
              </div>
            </div>
            <div className="profile__footer">
              <button type="submit" className="profile__save__btn send__btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>;
};

export default ContactPage;
