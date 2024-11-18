"use client";
import action from "@/app/action";
import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("name is Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 Characters minimum")
    .required("Password is required"),
});

interface IFormValues {
  name: string;
  email: string;
  password: string;
}

export default function FormRegister() {
  const initialValue: IFormValues = { name: "", email: "", password: "" };
  const handleAdd = async (user: IFormValues) => {
    try {
      await fetch("http://localhost:8000/api/user", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      });
      action("users");
      alert(`Account ${user.name} Has Been Added`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center mt-14 bg-[#1A2238]">
      <div className="w-[400px] bg-[#133E87] p-8 rounded-lg shadow-lg">
        <h1 className="text-center mb-6 font-mono font-bold text-3xl text-white">
          Register Form
        </h1>
        <Formik
          initialValues={initialValue}
          validationSchema={registerSchema}
          onSubmit={(values, action) => {
            handleAdd(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<IFormValues>) => {
            const { handleChange, values, touched, errors } = props;

            return (
              <Form>
                <div className="mb-4">
                  <label className="text-[#F3F3E0] block mb-1" htmlFor="name">
                    name:
                  </label>
                  <Field
                    className="w-full px-3 py-2 bg-white border border-[#ccc] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  {touched.name && errors.name ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.name}
                    </div>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label className="text-[#F3F3E0] block mb-1" htmlFor="email">
                    Email:
                  </label>
                  <Field
                    className="w-full px-3 py-2 bg-white border border-[#ccc] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="mb-6">
                  <label
                    className="text-[#F3F3E0] block mb-1"
                    htmlFor="password"
                  >
                    Password:
                  </label>
                  <Field
                    className="w-full px-3 py-2 bg-white border border-[#ccc] text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="w-full py-2 mt-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold rounded-md transition duration-300 ease-in-out"
                >
                  Register
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
