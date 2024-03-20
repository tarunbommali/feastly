import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      console.log("formSubmit");
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "Enter your name";
      }
      if (!values.email) {
        errors.email = "Invalid email address";
      }
      if (!values.phone) {
        errors.phone = "Enter your phone number";
      }
      return errors;
    },
  });
  return (
    <div className="login">
      <h5>The login features have not been implemented yet.</h5>
      <p><Link to='/' className="nav-link">Back To Home</Link></p>
      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className="form-container"
      >
        {" "}
        <div className="login-title-container">
          <div>
            <h2 className="login-title">Sign up</h2>
            <p>
              or <a href="#">login to your account</a>
            </p>
          </div>
          <img src="" alt="..." />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            autoComplete="current-phone"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="95xxxxxx26"
            className="input-field"
            pattern="[0-9]*"
            inputMode="numeric"
          />

          {formik.errors.phone && (
            <p className="err-msg">* {formik.errors.phone}</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="enter name"
            className="input-field"
          />
          {formik.errors.name && (
            <p className="err-msg">* {formik.errors.name}</p>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="jhon@gmail.com"
            className="input-field"
          />
          {formik.errors.email && (
            <p className="err-msg">* {formik.errors.email}</p>
          )}
        </div>
        <button type="submit" className="login-btn">
          CONTINUE
        </button>
        <p className="disclaimer">
          By creating an account, I accept the Terms & Conditions & Privacy
          Policy
        </p>
      </form>
    </div>
  );
}

// using FORMIK , we can create scalable forms faster and easy way
