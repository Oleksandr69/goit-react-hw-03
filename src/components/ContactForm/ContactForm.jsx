import { useId } from "react";
import React from "react";
import { Formik, Form, Field } from 'formik';


const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({onAdd}) => {
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);

    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />

        <label htmlFor={telFieldId}>Number</label>
        <Field type='text' name="number" id={telFieldId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;