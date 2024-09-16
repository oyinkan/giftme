import React from "react";

interface AuthComponentProps {
  title: string;
  details: string;
}

const AuthComponent: React.FC<AuthComponentProps> = ({ title, details }) => {
  return (
    <>
      <h6 className="font-bold text-2xl">{title}</h6>
      <p className="text-sm color-secondary">{details}</p>
    </>
  );
};

export default AuthComponent;
