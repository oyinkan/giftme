"use client";
import { useState } from "react";
import Link from "next/link";
import AuthComponent from "@/components/auth-component/AuthComponent";
import Button from "@/components/button/Button";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";

const formElements = [
  {
    label: "First name",
    type: "text",
    id: "first_name",
    placeholder: "Enter your first name",
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    label: "Last name",
    type: "text",
    id: "last_name",
    placeholder: "Enter your last name",
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    label: "Email address",
    type: "email",
    id: "email",
    placeholder: "Enter your email address",
    validation: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
  },
  {
    label: "Birthday date",
    type: "date",
    id: "birthday_date",
    placeholder: "Enter your birthday date",
    validation: {
      required: true,
    },
  },
  {
    label: "Password",
    type: "password",
    id: "password",
    placeholder: "Enter your password",
    validation: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/, // at least 8 characters, at least one letter and one number
    },
  },
];

interface FormData {
  [key: string]: string;
}

interface FormError {
  [key: string]: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    birthday_date: "",
    password: "",
  });
  const [formError, setFormError] = useState<FormError>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const validateForm = () => {
    const error: FormError = {};
    formElements.forEach((el) => {
      if (el.validation.required && !formData[el.id]) {
        error[el.id] = "This field is required";
      } else if (
        el.validation.minLength &&
        formData[el.id].length < el.validation.minLength
      ) {
        error[
          el.id
        ] = `Minimum length is ${el.validation.minLength} characters`;
      } else if (
        el.validation.pattern &&
        !el.validation.pattern.test(formData[el.id])
      ) {
        error[el.id] = "Invalid format";
      } else {
        setFormError(error);
      }
    });
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call API or perform other actions with the form data
    if (validateForm()) {
      // Call API or perform other actions with the form data
      console.log(formData);
    }
  };

  return (
    <>
      <div className="p-4">
        <AuthComponent
          title="Let’s get you started"
          details="Tell us more about you, please use your name as it appears on your ID. "
        />
        <form className="w-full md:w-2/5 m-auto mt-6" onSubmit={handleSubmit}>
          {formElements.map((el) => (
            <div key={el.id}>
              <label htmlFor={el.id} className="text-sm text-[#230101]">
                {el.label}
              </label>
              <input
                type={el.type}
                id={el.id}
                name={el.id}
                value={formData[el.id]}
                onChange={handleInputChange}
                className="block w-full text-sm p-4 my-3 border border-[#CBD5E1] rounded-[12px] text-gray-500"
                placeholder={el.placeholder}
              />
              {formError[el.id] && (
                <p className="text-sm text-red-500">{formError[el.id]}</p>
              )}
            </div>
          ))}
          <div className="my-6">
            <Button className="bg-primary text-white" value="Signup" />
          </div>
        </form>
        <div className="w-full md:w-2/5 m-auto">
          <div className="flex justify-center items-center gap-3 my-3">
            <hr className="w-full border border-[#ECECEC]" />
            <span className="text-[12px] text-[#646464]">or</span>
            <hr className="w-full border border-[#ECECEC]" />
          </div>
          <Button
            className="border border-primary"
            value={
              <>
                <FcGoogle className="text-lg mr-4" />
                <span className="text-primary">Continue with Google</span>
              </>
            }
          />
          <Button
            className="border border-primary"
            value={
              <>
                <IoLogoApple className="text-lg mr-4" />
                <span className="text-primary">Continue with Apple</span>
              </>
            }
          />
        </div>
        <p className="text-sm text-dark text-center mt-12">
          Already have an account?{" "}
          <Link href="/login" className="font-bold">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
