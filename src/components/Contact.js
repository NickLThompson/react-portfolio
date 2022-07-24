import React, { useState } from "react";
import { validateEmail } from "../regex/regex";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    message: "",
    email: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const { name, message, email } = formState;

  function formChange(emailAddress) {
    if (emailAddress.target.name === "email") {
      const valid = validateEmail(emailAddress.target.value);
      if (!valid) {
        setErrMessage("Your email is invalid");
      } else {
        if (!emailAddress.target.value.length) {
          setErrMessage(`${emailAddress.target.name} is required`);
        } else {
          setErrMessage("");
        }
      }
    }

    if (!errMessage) {
      setFormState({
        ...formState,
        [emailAddress.target.name]: emailAddress.target.value,
      });
    }
  }

  function blank(emailAddress) {
    if (
      emailAddress.target.name === "Name" ||
      emailAddress.target.name === "Message"
    ) {
      if (!emailAddress.target.value.length) {
        setErrMessage(`${emailAddress.target.name} is required`);
      } else {
        setErrMessage("");
      }
    }

    if (!errMessage) {
      setFormState({ ...formState, [emailAddress.target.name]: emailAddress.target.value });
    }
  }

  return (
    <section>
      <div className = "center">
        <h2 className = "page-header">Contact Me!</h2>
      </div>
      <div>
        <form id = "contact-form">
          <div>
            <label htmlFor = "Name">Name:</label>
            <br></br>
            <input type = "Text" defaultValue = {name} onBlur = {blank} name = "Name"></input>
          </div>
          <div>
            <label htmlFor = "Email">Email:</label>
            <br></br>
            <input type = "Email" defaultValue = {email} onBlur = {formChange} name = "Email"></input>
          </div>
          <div>
            <label htmlFor = "Message">Message:</label>
            <br></br>
            <input rows = "6" defaultValue = {message} onBlur = {blank} name = "Message"></input>
          </div>
          {errMessage && (
            <div>
              <p className = "err-text">{errMessage}</p>
            </div>
          )}
          <button type = "submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
