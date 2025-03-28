import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import "./BasicForm.css";

function BasicForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form values:", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <FormField name="name" label="Name:" type="text" />
          <FormField name="email" label="Email:" type="email" />
          <button 
            type="submit" 
            className="submit-button" 
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default BasicForm;
