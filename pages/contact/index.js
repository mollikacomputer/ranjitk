import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // for email js
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6cbaf0b",
        "template_39szbht",
        form.current,
        "QZ-FwUQStvQDi1wdO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="./contact_form.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <h2 className="text-2xl">Sent Your Message</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="user_name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="user_email"
                  className="input input-bordered "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <textarea
                    name="message"
                    placeholder="Bio"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  ></textarea>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" value="Send" className="btn btn-primary">
                  Sent Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
