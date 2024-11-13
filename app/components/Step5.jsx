"use client";

import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "../context/AppContext";
import { Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ContentHeader from "./ContentHeader";
import { validateName, validateEmail, validatePhone } from "./Step1";
import Link from "next/link";

const Step5 = () => {
  const { userData, setUserData } = useContext(AppContext);
  const router = useRouter();

  // State for account and card details
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [isEmpty, setIsEmpty] = useState(true);
  const { setProgress } = useContext(AppContext);

  useEffect(() => {
    // Check if all fields are empty
    setIsEmpty(Object.values(accountDetails).every((value) => value === ""));
  }, [accountDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if user has provided required info in Step 1
    const { name, email, phone } = userData.userInfo;
    if (validateName(name) || validateEmail(email) || validatePhone(phone)) {
      alert(
        'Please provide personal info in Step 1. After filling the form, click "Next Step" to register your data.'
      );
      // Redirect user to Step1
      setProgress(2);
      router.push("/");
      return;
    }

    // Clear user data and navigate to complete page
    setUserData({
      userInfo: {
        name: "",
        email: "",
        phone: "",
      },
      plan: {
        planTitle: "Arcade",
        paymentPlan: "monthly",
        price: 9,
      },
      addOns: [],
    });
    setProgress(5);
    router.push("/complete");
  };

  return (
    <div className="container">
      <Sidebar />

      <div className="main-container">
        <ContentHeader
          contentTitle="Account Details"
          contentDescription="Provide account details or continue without."
        />

        <Form onSubmit={handleSubmit} className="form-container">
          <Form.Group controlId="accountNumber">
            <Form.Label>Account Number</Form.Label>
            <Form.Control
              type="password" // Change to password
              placeholder="Enter account number"
              name="accountNumber"
              value={accountDetails.accountNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Group>

          <Form.Group controlId="cardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="password" // Change to password
              placeholder="Enter card number"
              name="cardNumber"
              value={accountDetails.cardNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Group>

          <Form.Group controlId="expiryDate">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="password" // Change to password
              placeholder="MM/YY"
              name="expiryDate"
              value={accountDetails.expiryDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Group>

          <Form.Group controlId="cvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="password" // Change to password
              placeholder="Enter CVV"
              name="cvv"
              value={accountDetails.cvv}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Group>
        </Form>
      </div>

      <div className="button-box">
        <Link className="go-back light-gray-text" href="/step4">
          Go Back
        </Link>
        <Button type="submit" className="confirm__btn" onClick={handleSubmit}>
          {isEmpty ? "Provide Later" : "Confirm"}
        </Button>
      </div>
    </div>
  );
};

export default Step5;