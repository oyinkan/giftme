"use client";

import { useState, useEffect } from "react";
import AuthComponent from "@/components/auth-component/AuthComponent";
import Button from "@/components/button/Button";

const formElements = [
  "otp_one",
  "otp_two",
  "otp_three",
  "otp_four",
  "otp_five",
  "otp_six",
];

interface FormData {
  [key: string]: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    otp_one: "",
    otp_two: "",
    otp_three: "",
    otp_four: "",
    otp_five: "",
    otp_six: "",
  });
  const [timer, setTimer] = useState(120);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    let intervalId;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      return;
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  const formatTimer = (timer: number) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds}s`;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, id, value } = event.target;
    let index: any = Number(name.split("_")[2]);

    setFormData((prevFormData) => {
      if (value.length > 1) value = value.split("")[1];
      return { ...prevFormData, [id]: value };
    });

    // auto-focus next input
    const nextInput = document.querySelector(`#${formElements[index + 1]}`);
    if (nextInput instanceof HTMLInputElement) {
      nextInput.focus();
    }
  };

  const validateOTP = () => {
    const otpValues = Object.values(formData);

    // Check if all fields are filled and have only one digit
    const allFilled = otpValues.every(
      (value) => value.length === 1 && /^\d$/.test(value)
    );

    if (!allFilled) {
      setFormError("Please enter a valid 6-digit OTP.");
      return false;
    }

    setFormError(null); // Clear errors if valid
    return true;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Call API or perform other actions with the form data
    if (validateOTP()) {
      // Call API or perform other actions with the form data
      console.log(formData);
    }
  };

  return (
    <>
      <AuthComponent
        title="Verification"
        details="Please input the OTP sent to your Email address peace444@gmail.com to complete the registration process."
      />
      <form className="w-full md:w-2/5 m-auto mt-6">
        <div className="flex justify-between gap-2">
          {formElements.map((el, index) => (
            <input
              type="number"
              key={el}
              id={el}
              name={`${el}_${index}`}
              className="w-12 h-12 text-center text-sm p-4 my-3 border border-[#CBD5E1] rounded-full text-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={formData[el]}
              onChange={handleInputChange}
            />
          ))}
        </div>
        {formError && (
          <p className="text-sm text-red-500 text-center">{formError}</p>
        )}
        <p className="text-sm text-dark text-center mt-12">
          Didn&#39;t get OTP?{" "}
          <button className="font-bold">Resend in {formatTimer(timer)}</button>
        </p>
        <Button
          className="bg-primary text-white"
          value="Continue"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}
