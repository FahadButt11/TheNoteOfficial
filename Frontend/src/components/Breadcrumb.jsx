import React from "react";

const Breadcrumb = ({ currentStep }) => {
  const steps = ["Information", "Shipping", "Payment"];
  return (
    <nav>
      {steps.map((step, index) => (
        <span
          key={index}
          className={index + 1 === currentStep ? "font-bold" : ""}
        >
          {step}
          {index < steps.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
