// import { useState } from "react";
import React from "react";
import { Formik } from 'formik';


const ContactForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="" name="" value='' />
      <input type="" name="" value='' />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;