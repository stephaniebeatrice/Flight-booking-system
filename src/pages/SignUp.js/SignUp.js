import React from "react";
import RegistrationForm from "../../components/user-details/registration";
import { useNavigation } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="App" style={{}}>
      <RegistrationForm />
    </div>
  );
};
