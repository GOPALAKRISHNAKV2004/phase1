import React from "react";
import { Field, ErrorMessage } from "formik";
import "./FormField.css";

function FormField({ label, name, type }) {
  return (
    <div className="form-field">
      <label htmlFor={name} className="form-label">{label}</label>
      <Field 
        type={type} 
        name={name} 
        id={name} 
        className="form-input" 
      />
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}

export default FormField;












