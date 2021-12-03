import React, { useRef } from "react";

import { useAuth } from "../../context/AuthContext";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.lenght > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.lenght > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/i.test(values.password)
  ) {
    errors.password =
      "Password should contain at least one uppercase letter, one lowercase letter and one number";
  }
  if (!values.passwordconfirm) {
    errors.passwordconfirm = "Required";
  } else if (values.password !== values.passwordconfirm) {
    errors.passwordconfirm = "password dosen't match";
  }

  return errors;
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordconfirm: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <form className="field" onSubmit={formik.handleSubmit}>
      <input
        id="firstName"
        className="FirstName"
        name="firstName"
        type="text"
        placeholder="FirstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? (
        <div className="errors">{formik.errors.firstName}</div>
      ) : null}

      <input
        id="lastName"
        className="LastName"
        name="lastName"
        type="text"
        placeholder="LastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? (
        <div className="errors">{formik.errors.lastName}</div>
      ) : null}
      <input
        id="email"
        className="email"
        ref={emailRef}
        name="email"
        type="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <div className="errors">{formik.errors.email}</div>
      ) : null}

      <input
        id="password"
        className="password"
        ref={passwordRef}
        type="text"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? (
        <div className="errors">{formik.errors.password}</div>
      ) : null}
      <input
        id="passwordconfirm"
        className="passwordconfirm"
        ref={confirmpasswordRef}
        type="text"
        name="passwordconfirm"
        placeholder="Confirm Password"
        onChange={formik.handleChange}
        value={formik.values.passwordconfirm}
      />
      {formik.errors.passwordconfirm ? (
        <div className="errors">{formik.errors.passwordconfirm}</div>
      ) : null}
    </form>
  );
};

export default SignupForm;
