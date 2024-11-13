"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppContext } from "../context/AppContext";
import Sidebar from "./Sidebar";
import { Form, Button } from "react-bootstrap";
import ContentHeader from "./ContentHeader";
import PlanCard from "./PlanCard";

const plans = [
  {
    planTitle: "Arcade",
    imgSrc: "/images/icon-arcade.svg",
    monthlyPrice: 9,
    yearlyPrice: 90,
    benefit: "2 months free",
  },
  {
    planTitle: "Advanced",
    imgSrc: "/images/icon-advanced.svg",
    monthlyPrice: 12,
    yearlyPrice: 120,
    benefit: "2 months free",
  },
  {
    planTitle: "Pro",
    imgSrc: "/images/icon-pro.svg",
    monthlyPrice: 15,
    yearlyPrice: 150,
    benefit: "2 months free",
  },
];
const Step2 = () => {
  const { userData, setUserData } = useContext(AppContext);
  const [plan, setPlan] = useState({
    planTitle: userData.plan.planTitle,
    paymentPlan: userData.plan.paymentPlan,
    price: userData.plan.price,
  });
  const { setProgress } = useContext(AppContext);
  const router = useRouter();

  // Run when user selects a plan (title)
  const handlePlanSelect = (e) => {
    const { id } = e.target;
    const foundPlan = plans.find((item) => item.planTitle === id);

    setPlan((prev) => ({
      ...prev,
      planTitle: id,
      price: plan.paymentPlan === "monthly" ? foundPlan.monthlyPrice : foundPlan.yearlyPrice,
    }));

    setUserData((prev) => ({
      ...prev,
      plan: {
        planTitle: id,
        paymentPlan: plan.paymentPlan,
        price: plan.paymentPlan === "monthly" ? foundPlan.monthlyPrice : foundPlan.yearlyPrice,
      },
    }));
    setProgress(2);
  };

  // Run when user switches plans (monthly or yearly)
  const handleSwitch = () => {
    const foundPlan = plans.find((item) => item.planTitle === plan.planTitle);

    setPlan((prev) =>
      prev.paymentPlan === "monthly"
        ? { ...prev, paymentPlan: "yearly", price: foundPlan.yearlyPrice }
        : { ...prev, paymentPlan: "monthly", price: foundPlan.monthlyPrice }
    );

    setUserData((prev) => ({
      ...prev,
      plan: prev.plan.paymentPlan === "monthly"
        ? { planTitle: foundPlan.planTitle, paymentPlan: "yearly", price: foundPlan.yearlyPrice }
        : { planTitle: foundPlan.planTitle, paymentPlan: "monthly", price: foundPlan.monthlyPrice },
    }));
    setProgress(2);
  };
  const handleNextClick = () => {
    setProgress(2);
    router.push("/step3");
  };

  const switchLabelStyle = {
    color: "hsl(231, 11%, 63%)",
  };

  return (
    <div className="container">
      <Sidebar />

      <main className="main-container">
        <ContentHeader
          contentTitle="Select Your Plan"
          contentDescription="You have the option of monthly or yearly billing."
        />

        <Form className="form-container">
          <div className="plancard-box">
            {plans.map((item) => (
              <PlanCard
                key={item.planTitle}
                id={item.planTitle}
                imgSrc={item.imgSrc}
                planTitle={item.planTitle}
                price={
                  plan.paymentPlan === "monthly"
                    ? `$${item.monthlyPrice}/mo`
                    : `$${item.yearlyPrice}/yr`
                }
                benefit={plan.paymentPlan === "yearly" && item.benefit}
                handleClick={handlePlanSelect}
                selectedPlan={plan.planTitle}
              />
            ))}
          </div>
          <div className="switch-box">
            <label
              htmlFor="plan-switch"
              className="switch__label switch__label--mo"
              style={plan.paymentPlan === "yearly" ? switchLabelStyle : null}
            >
              Monthly
            </label>
            <Form.Check
              onChange={handleSwitch}
              type="switch"
              checked={plan.paymentPlan === "yearly"}
              id="plan-switch"
            />
            <label
              htmlFor="plan-switch"
              className="switch__label switch__label--yr"
              style={plan.paymentPlan === "monthly" ? switchLabelStyle : null}
            >
              Yearly
            </label>
          </div>
        </Form>
      </main>

      <div className="button-box">
        <Link href="/" className="go-back light-gray-text">
          Go Back
        </Link>
        <Button onClick={handleNextClick} className="next__btn">
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default Step2;