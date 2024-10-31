import { useState } from "react";
import Modal from "../components/modal";
import { Form, Formik } from "formik";
import { Input } from "../components/input";
import { UserRegister } from "../types/user";
import { registerSchema } from "../helpers/schema";
import { useNavigate } from "react-router-dom";
import axios from "../helpers/axios";

const initialValues: UserRegister = {
  username: "",
  email: "",
  password: "",
};

export const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onRegister = async (data: UserRegister) => {
    try {
      setLoading(true);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  interface IFormValues {
    username: string;
    email: string;
    password: string;
  }

  const navigate = useNavigate();
  const initialValue: IFormValues = { username: "", email: "", password: "" };
  const handleAdd = async (user: IFormValues) => {
    try {
      await axios.post("/twitter", user);
      alert(`Account ${user.username} Has Been Added`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-[#1DA1F2] py-2 px-8 w-[300px] font-bold text-white rounded-full flex justify-center gap-3 hover:bg-blue-600 transition duration-200"
      >
        Create account
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values, action) => {
            onRegister(values);
            action.resetForm();
          }}
        >
          {() => {
            return (
              <Form className="h-full flex flex-col justify-between py-4">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold">Buat Akun</h1>
                  <Input name="username" type="text" placeholder="Username" />
                  <Input name="email" type="email" placeholder="Email" />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  {loading ? "Loading .." : "Daftar"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};
