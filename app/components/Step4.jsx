"use client"; 

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "../context/AppContext";
import { Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import ContentHeader from "./ContentHeader";
import SummaryCard from "./SummaryCard";
import Link from "next/link";

const Step4 = () => {
  const { userData, setUserData } = useContext(AppContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone} = userData.userInfo;

    router.push("/step5");
  };

  return (
    <div className="container">
      <Sidebar />

      <div className="main-container">
        <ContentHeader
          contentTitle="Finishing up"
          contentDescription="Double-check everything looks OK before confirming."
        />
        <SummaryCard />
      </div>

      <Form onSubmit={handleSubmit} className="summary">
        <div className="button-box">
          <Link className="go-back light-gray-text" href="/step3">
            Go Back
          </Link>
          <Button type="submit" className="confirm__btn">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Step4;