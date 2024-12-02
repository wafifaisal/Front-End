"use client";

import { Field, Form, Formik, FormikProps } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

// Validation schema
const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function FormRegister() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValue: FormValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleAdd = async (user: FormValues) => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:8000/api/auth", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      });
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-96 animate-fadeIn">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6 animate-slideUp">
          Register
        </h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleAdd(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValues>) => {
            const { handleChange, values, touched, errors } = props;
            return (
              <Form className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                    placeholder="Enter your name"
                  />
                  {touched.username && errors.username ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.username}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                    placeholder="Enter your email"
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                    placeholder="Enter your password"
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </div>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={values.confirmPassword}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3"
                    placeholder="Confirm your password"
                  />
                  {touched.confirmPassword && errors.confirmPassword ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.confirmPassword}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-teal-600 text-white py-3 rounded-lg text-sm font-semibold disabled:bg-teal-200 disabled:cursor-not-allowed hover:bg-teal-700 focus:ring-4 focus:ring-teal-300"
                >
                  <div
                    className={`flex items-center justify-center ${
                      isLoading ? "animate-slide-left" : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <span className="mr-2">Loading...</span>
                        <span role="img" aria-label="rocket">
                          🚀
                        </span>
                      </>
                    ) : (
                      "Register"
                    )}
                  </div>
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormRegister;
