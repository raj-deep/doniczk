import React, { useEffect } from "react";
import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {

  getAuthUserPhoneNumber,
  updateAuthUserProfile,
} from "../../utils/firebase/firebase.utils";

import {
  AccountContainer,
  LogoutBtn,
  RightContainer,
} from "./welcomeScreen.styles";
import Plants from "../../assets/plants.png";
import {
  updateEmail,
  updatePassword,
} from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const WelcomeScreen = ({ onLogout }) => {
  const user = firebase.auth().currentUser;

  const [errors, setErrors] = useState({}); // Add errors state
  // const [phoneNumber, setPhoneNumber] = useState();
  const [formFields, setFormFields] = useState({
    displayName: user.displayName,
    email: user.email,
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const { displayName, email, password, confirmPassword, phoneNumber } =
    formFields;

  useEffect(() => {
    const getPhoneNumber = async () => {
      const { phone, name } = await getAuthUserPhoneNumber(user);
      // setPhoneNumber(phone);
      setFormFields((prev) => ({
        ...prev,
        phoneNumber: phone,
        displayName: name,
      }));
    };
    getPhoneNumber();
  }, []);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setErrors({}); // Reset errors state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrors({
        confirmPassword:
          "The passwords are not identical. Make sure both fields contain the same password.",
      });
      return;
    }
    try {
      await updateAuthUserProfile(user, displayName, phoneNumber)
        .then(() => {
          const user = firebase.auth().currentUser;
          console.log("update profile success", user);
        })
        .catch((error) => {
          console.log(error);
        });
      await updateEmail(user, email)
        .then(() => {
          console.log("update email success");
        })
        .catch((error) => {
          console.log(error);
        });

      await updatePassword(user, password)
        .then(() => {
          console.log("update password success");
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors({
          email:
            "An account with this email address already exists. Log in using this email address.",
        });
      } else {
        console.log("Error creating user, please try again", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleLogout = () => {
    // Call the onLogout function passed from the parent component
    if (typeof onLogout === "function") {
      onLogout();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <AccountContainer>
        <div>You can update your account information</div>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            error={errors.displayName}
          />

          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            error={errors.email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?!.*\s).{8,}$"
            instruction="The password must contain at least 8 characters, including lowercase/uppercase letters, numbers, and special characters such as !@#$%^&*()-_=+{};:,<.>"
            error={errors.password}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            error={errors.confirmPassword}
          />

          <FormInput
            label="Phone Number"
            type="tel"
            required
            onChange={handleChange}
            name="phoneNumber"
            value={phoneNumber}
            pattern="\d{3} \d{3} \d{3}"
            placeholder="123 456 789"
            instruction="Enter your phone number in the format 123 456 789."
            error={errors.phoneNumber}
          />

          <Button type="submit">Update</Button>
        </form>
      </AccountContainer>
      <RightContainer>
        <img src={Plants} alt="plant illustration" />
        <LogoutBtn onClick={handleLogout}>Log out</LogoutBtn>
      </RightContainer>
    </div>
  );
};

export default WelcomeScreen;
