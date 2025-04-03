import { useId } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from "nanoid";
import * as Yup from "yup";



const ContactForm = ({onAdd}) => {
  const nameFieldId = useId();
  const telFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.number().required("Required"),
  // message: Yup.string().min(3, "Too short").max(256, "Too long").required("Required"),
  // level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Required")
});

  const handleSubmit = (values, actions) => {
    console.log(values);

    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form>
        
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={telFieldId}>Number</label>
          <Field type='text' name="number" id={telFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;