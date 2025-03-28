import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import "./BasicForm.css";

function BasicForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        address: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(20, "Cannot exceed 20 characters")
          .required("Name is required"),
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        phone: Yup.string()
          .matches(/^\d{10}$/, "Phone number must be 10 digits")
          .required("Phone number is required"),
        address: Yup.string()
          .min(10, "Address must be at least 10 characters")
          .required("Address is required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form Submitted:", values);
        alert("Form Submitted Successfully!");
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <h2>Registration Form</h2>
          <FormField name="name" label="Name:" type="text" />
          <FormField name="email" label="Email:" type="email" />
          <FormField name="phone" label="Phone:" type="tel" />
          <FormField name="address" label="Address:" type="text" />
          
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
