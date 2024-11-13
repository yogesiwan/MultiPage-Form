"use client";

import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "../context/AppContext";
import { Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ContentHeader from "./ContentHeader";

// Define validation functions locally
export const validateName = (val) => {
  if (val === "") return "This field is required";
  return "";
};

export const validateEmail = (val) => {
  if (val === "") return "This field is required";
  if (val.indexOf("@") === -1 || val.indexOf(".") === -1) return "Invalid email format";
  return "";
};

export const validatePhone = (val) => {
  if (val === "") return "This field is required";
  if (!/^[0-9,+]+$/.test(val)) return "Invalid format for phone number";
  return "";
};

const Step1 = () => {
  const { userData, setUserData } = useContext(AppContext);
  const { setProgress } = useContext(AppContext);
  const [input, setInput] = useState({
    name: userData.userInfo.name,
    email: userData.userInfo.email,
    phone: userData.userInfo.phone,
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));

    let error = "";
    if (name === "name") error = validateName(value);
    if (name === "email") error = validateEmail(value);
    if (name === "phone") error = validatePhone(value);
    
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleNextClick = () => {
    const newErrors = {
      name: validateName(input.name),
      email: validateEmail(input.email),
      phone: validatePhone(input.phone),
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      alert("Please make change(s) to your input.");
      return;
    }
    setProgress(1);

    setUserData((prev) => ({
      ...prev,
      userInfo: { ...input },
    }));
    router.push("/step2");
  };

  return (
    <div className="container">
      <Sidebar />

      <main className="main-container">
        <ContentHeader
          contentTitle="Personal Info"
          contentDescription="Please provide your name, email address, and phone number."
        />

        <Form className="form-container">
          <Form.Group controlId="name">
            <div className="label-box">
              <Form.Label>Name</Form.Label>
              <p className="feedback feedback--name">{errors.name}</p>
            </div>
            <Form.Control
              className={`input--name ${errors.name ? "red-border" : ""}`}
              onChange={handleChange}
              name="name"
              value={input.name}
              type="text"
              placeholder="e.g. Tony Stark"
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <div className="label-box">
              <Form.Label>Email Address</Form.Label>
              <p className="feedback feedback--email">{errors.email}</p>
            </div>
            <Form.Control
              className={`input--email ${errors.email ? "red-border" : ""}`}
              onChange={handleChange}
              name="email"
              value={input.email}
              type="email"
              placeholder="e.g. tonystark@teleport.com"
              required
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <div className="label-box">
              <Form.Label>Phone Number</Form.Label>
              <p className="feedback feedback--phone">{errors.phone}</p>
            </div>
            <Form.Control
              className={`input--phone ${errors.phone ? "red-border" : ""}`}
              onChange={handleChange}
              name="phone"
              value={input.phone}
              type="text"
              placeholder="e.g. +91 7111111111"
              required
            />
          </Form.Group>
        </Form>
      </main>

      <div className="button-box next__btn-box">
        <Button onClick={handleNextClick} className="next__btn">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default Step1;