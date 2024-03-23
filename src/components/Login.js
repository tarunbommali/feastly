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
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h5 className="text-xl font-semibold">
        The login features have not been implemented yet.
      </h5>
      <p className="text-lg font-bold">
        <Link to="/" className="nav-link">
          Back To Home
        </Link>
      </p>
      <form
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className="bg-[#f3f2ef] py-5 px-5 rounded-md"
      >
        <div className="flex justify-between items-center py-3">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Sign up</h2>
            <p>
              or{" "}
              <a href="#" className="underline">
                login to your account
              </a>
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/drdgj0pch/image/upload/v1710779644/pngwing.com_vzlpd9.png"
            alt="logo"
            className="w-[78px] h-[78px]"
          />
        </div>

        <div className="flex flex-col py-2 text-md">
          <label htmlFor="phone">Phone number</label>
          <input
            type="tel"
            autoComplete="current-phone"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            placeholder="95xxxxxx26"
            className="py-2 px-3 rounded-md"
            pattern="[0-9]*"
            inputMode="numeric"
          />

          {formik.errors.phone && (
            <p className="text-red-500 font-semibold">
              * {formik.errors.phone}
            </p>
          )}
        </div>
        <div className="flex flex-col py-2 text-md">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="enter name"
            className="py-2 px-3 rounded-md"
          />
          {formik.errors.name && (
            <p className="text-red-500 font-semibold">* {formik.errors.name}</p>
          )}
        </div>
        <div className="flex flex-col py-2 text-md">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="jhon@gmail.com"
            className="py-2 px-3 rounded-md"
          />
          {formik.errors.email && (
            <p className="text-red-500 font-semibold">
              * {formik.errors.email}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="button flex justify-center bg-[#004182] text-white rounded-md my-2 mt-3  py-1  px-3 w-[100%]"
        >
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
