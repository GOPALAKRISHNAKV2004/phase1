import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import "./BasicForm.css";

function BasicForm() {
  const [submittedData, setSubmittedData] = useState(null); // Store submitted data

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        age: "",
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
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm password is required"),
        age: Yup.number()
          .typeError("Age must be a number")
          .min(18, "Must be at least 18")
          .max(60, "Must be at most 60")
          .required("Age is required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form Submitted:", values);
        setSubmittedData(values); // Store the submitted data
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <div className="form-container">
          <h2>Advanced Registration Form</h2>
          <Form>
            <FormField name="name" label="Name:" type="text" />
            <FormField name="email" label="Email:" type="email" />
            <FormField name="phone" label="Phone:" type="tel" />
            <FormField name="password" label="Password:" type="password" />
            <FormField name="confirmPassword" label="Confirm Password:" type="password" />
            <FormField name="age" label="Age:" type="number" />

            <button 
              type="submit" 
              className="submit-button" 
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>

          {/* Display submitted data */}
          {submittedData && (
            <div className="submitted-data">
              <h3>Submitted Data</h3>
              <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            </div>
          )}
        </div>
      )}
    </Formik>
  );
}

export default BasicForm;
